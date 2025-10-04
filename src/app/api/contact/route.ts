import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

// Simple in-memory rate limiter (per IP) for basic abuse protection
const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 5
const ipToTimestamps = new Map<string, number[]>()

function isRateLimited(ip: string | null): boolean {
  if (!ip) return false
  const now = Date.now()
  const windowStart = now - RATE_LIMIT_WINDOW_MS
  const timestamps = (ipToTimestamps.get(ip) || []).filter((t) => t > windowStart)
  if (timestamps.length >= RATE_LIMIT_MAX) return true
  timestamps.push(now)
  ipToTimestamps.set(ip, timestamps)
  return false
}

function sanitize(input: unknown): string {
  if (typeof input !== 'string') return ''
  return input
    .replace(/[\u0000-\u001F\u007F]/g, '')
    .replace(/[<>]/g, '')
    .trim()
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      null
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests, please try again later.' }, { status: 429 })
    }

    // Enforce JSON and size limits implicitly handled by Next, parse body
    const { name, email, company, phone, message } = await request.json()
    
    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Basic format checks
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(String(email))) {
      return NextResponse.json({ error: 'Please provide a valid email address' }, { status: 400 })
    }
    const safeName = sanitize(name)
    const safeCompany = sanitize(company)
    const safePhone = sanitize(phone)
    const safeMessage = sanitize(message)
    if (!safeName || !safeMessage) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
    }
    
    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })
    
    // Get recipients from environment variable
    const recipients = process.env.EMAIL_RECIPIENTS?.split(',') || ['info@jaha.co']
    
    // Email content
    const mailOptions = {
      from: `"Jahangir Website" <${process.env.EMAIL_USER}>`,
      to: recipients,
      subject: `New Contact Form Submission from ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #8b6339; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f6f1e4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #8b6339; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Company:</strong> ${safeCompany || 'Not provided'}</p>
            <p><strong>Phone:</strong> ${safePhone || 'Not provided'}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border-left: 4px solid #8b6339;">
            <h3 style="color: #8b6339; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${safeMessage}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This message was sent from the Jahangir website contact form.</p>
            <p>Reply directly to this email to respond to ${safeName}.</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    }
    
    // Send email
    // Try HTML first, fallback to plaintext if necessary
    try {
      await transporter.sendMail(mailOptions)
    } catch (e) {
      await transporter.sendMail({
        ...mailOptions,
        html: undefined,
        text: `New Contact Form Submission\n\nName: ${safeName}\nEmail: ${email}\nCompany: ${safeCompany || 'Not provided'}\nPhone: ${safePhone || 'Not provided'}\n\nMessage:\n${safeMessage}`,
      })
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully' 
    })
    
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}

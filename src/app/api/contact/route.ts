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
    const { name, email, company, phone, message, website } = await request.json()

    // Bot detection: honeypot field should be empty
    if (website) {
      // Silently reject bot submissions (return success to not tip off bots)
      return NextResponse.json({ success: true, message: 'Message received' })
    }
    
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
    
    // Email content - styled to match Jahangir website
    const mailOptions = {
      from: `"JAHANGIR." <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: recipients,
      subject: `New inquiry from ${safeName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f6f1e4; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: linear-gradient(to right, #ebd7b0, #f6f1e4);">
            <tr>
              <td style="padding: 40px 20px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 560px; margin: 0 auto;">
                  <!-- Header -->
                  <tr>
                    <td style="padding-bottom: 32px; border-bottom: 1px solid rgba(23, 23, 23, 0.1);">
                      <span style="font-size: 24px; font-weight: 600; color: #171717; letter-spacing: 0.05em;">JAHANGIR.</span>
                    </td>
                  </tr>

                  <!-- Title -->
                  <tr>
                    <td style="padding: 40px 0 24px 0;">
                      <h1 style="margin: 0; font-size: 20px; font-weight: 600; color: #171717;">New Work Inquiry</h1>
                      <p style="margin: 8px 0 0 0; font-size: 14px; color: #525252;">${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </td>
                  </tr>

                  <!-- Contact Details -->
                  <tr>
                    <td style="background-color: rgba(255, 255, 255, 0.5); border-radius: 16px; padding: 24px;">
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="padding-bottom: 16px;">
                            <span style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #525252;">From</span>
                            <p style="margin: 4px 0 0 0; font-size: 16px; color: #171717; font-weight: 500;">${safeName}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding-bottom: 16px;">
                            <span style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #525252;">Email</span>
                            <p style="margin: 4px 0 0 0;"><a href="mailto:${email}" style="font-size: 16px; color: #171717; text-decoration: none;">${email}</a></p>
                          </td>
                        </tr>
                        ${safeCompany ? `
                        <tr>
                          <td style="padding-bottom: 16px;">
                            <span style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #525252;">Company</span>
                            <p style="margin: 4px 0 0 0; font-size: 16px; color: #171717;">${safeCompany}</p>
                          </td>
                        </tr>
                        ` : ''}
                        ${safePhone ? `
                        <tr>
                          <td>
                            <span style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #525252;">Phone</span>
                            <p style="margin: 4px 0 0 0; font-size: 16px; color: #171717;">${safePhone}</p>
                          </td>
                        </tr>
                        ` : ''}
                      </table>
                    </td>
                  </tr>

                  <!-- Message -->
                  <tr>
                    <td style="padding: 24px 0;">
                      <span style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #525252;">Message</span>
                      <p style="margin: 12px 0 0 0; font-size: 15px; line-height: 1.7; color: #171717; white-space: pre-wrap;">${safeMessage}</p>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding-top: 32px; border-top: 1px solid rgba(23, 23, 23, 0.1);">
                      <p style="margin: 0; font-size: 13px; color: #737373;">Reply directly to this email to respond to ${safeName}.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
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
        text: `JAHANGIR.\n${'─'.repeat(40)}\n\nNew Work Inquiry\n${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}\n\nFrom: ${safeName}\nEmail: ${email}${safeCompany ? `\nCompany: ${safeCompany}` : ''}${safePhone ? `\nPhone: ${safePhone}` : ''}\n\nMessage:\n${safeMessage}\n\n${'─'.repeat(40)}\nReply directly to this email to respond to ${safeName}.`,
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

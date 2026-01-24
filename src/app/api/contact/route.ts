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
          <meta name="color-scheme" content="light">
          <meta name="supported-color-schemes" content="light">
          <style>
            :root { color-scheme: light; }
            @media (prefers-color-scheme: dark) {
              .email-body, .email-wrapper, .email-container, .card-bg { background-color: #f6f1e4 !important; }
              .text-dark { color: #171717 !important; }
              .text-muted { color: #525252 !important; }
              .text-light { color: #737373 !important; }
              .link-dark { color: #171717 !important; }
            }
          </style>
        </head>
        <body class="email-body" style="margin: 0; padding: 0; background-color: #f6f1e4 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; -webkit-font-smoothing: antialiased;">
          <div style="display: none; max-height: 0; overflow: hidden;">New work inquiry from ${safeName} via Jahangir website</div>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" class="email-wrapper" style="background-color: #f6f1e4 !important;">
            <tr>
              <td style="padding: 40px 20px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" class="email-container" style="max-width: 560px; margin: 0 auto; background-color: #f6f1e4 !important;">
                  <!-- Header -->
                  <tr>
                    <td style="padding-bottom: 32px; border-bottom: 1px solid #d4d4d4;">
                      <span class="text-dark" style="font-size: 24px; font-weight: 600; color: #171717 !important; letter-spacing: 0.05em;">JAHANGIR.</span>
                    </td>
                  </tr>

                  <!-- Title -->
                  <tr>
                    <td style="padding: 40px 0 24px 0; background-color: #f6f1e4 !important;">
                      <h1 class="text-dark" style="margin: 0; font-size: 20px; font-weight: 600; color: #171717 !important;">New Work Inquiry</h1>
                      <p class="text-muted" style="margin: 8px 0 0 0; font-size: 14px; color: #525252 !important;">${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </td>
                  </tr>

                  <!-- Contact Details -->
                  <tr>
                    <td class="card-bg" style="background-color: #fffef9 !important; border-radius: 16px; padding: 24px; border: 1px solid #e5e5e5;">
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="padding-bottom: 16px;">
                            <span class="text-muted" style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #525252 !important;">From</span>
                            <p class="text-dark" style="margin: 4px 0 0 0; font-size: 16px; color: #171717 !important; font-weight: 500;">${safeName}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding-bottom: 16px;">
                            <span class="text-muted" style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #525252 !important;">Email</span>
                            <p style="margin: 4px 0 0 0;"><a href="mailto:${email}" class="link-dark" style="font-size: 16px; color: #171717 !important; text-decoration: none;">${email}</a></p>
                          </td>
                        </tr>
                        ${safeCompany ? `
                        <tr>
                          <td style="padding-bottom: 16px;">
                            <span class="text-muted" style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #525252 !important;">Company</span>
                            <p class="text-dark" style="margin: 4px 0 0 0; font-size: 16px; color: #171717 !important;">${safeCompany}</p>
                          </td>
                        </tr>
                        ` : ''}
                        ${safePhone ? `
                        <tr>
                          <td>
                            <span class="text-muted" style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #525252 !important;">Phone</span>
                            <p class="text-dark" style="margin: 4px 0 0 0; font-size: 16px; color: #171717 !important;">${safePhone}</p>
                          </td>
                        </tr>
                        ` : ''}
                      </table>
                    </td>
                  </tr>

                  <!-- Message -->
                  <tr>
                    <td style="padding: 24px 0; background-color: #f6f1e4 !important;">
                      <span class="text-muted" style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #525252 !important;">Message</span>
                      <p class="text-dark" style="margin: 12px 0 0 0; font-size: 15px; line-height: 1.7; color: #171717 !important; white-space: pre-wrap;">${safeMessage}</p>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding-top: 32px; border-top: 1px solid #d4d4d4; background-color: #f6f1e4 !important;">
                      <p class="text-light" style="margin: 0; font-size: 13px; color: #737373 !important;">Reply directly to this email to respond to ${safeName}.</p>
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

import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    // Get form data from request
    const { name, email, company, phone, message } = await request.json()
    
    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
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
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #8b6339; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f6f1e4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #8b6339; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border-left: 4px solid #8b6339;">
            <h3 style="color: #8b6339; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This message was sent from the Jahangir website contact form.</p>
            <p>Reply directly to this email to respond to ${name}.</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    }
    
    // Send email
    await transporter.sendMail(mailOptions)
    
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

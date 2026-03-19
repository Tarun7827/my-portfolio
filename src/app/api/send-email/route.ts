import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
console.log(`Email ${email} sent to ${name}`);
    const data = await resend.emails.send({
      from: `"${name}" <onboarding@resend.dev>`,
      // from: "Portfoli?o <onboarding@resend.dev>",
      to: 'tarun7827@gmail.com',
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
          </div>
          <div style="background-color: #fff; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="color: #666; line-height: 1.6;">${message}</p>
          </div>
          <p style="color: #999; font-size: 12px; margin-top: 20px;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
    });
console.log('Email sent to recipient');
    // Send auto-response to USER
    await resend.emails.send({
      // from: `"Tarun Kumar" <tarun7827@gmail.com>`,
      from: "Tarun Kumar <onboarding@resend.dev>",
      to: 'grufftheretriever@gmail.com',
      subject: "Thank you for contacting me!",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for contacting me. I’ve received your message and will get back to you soon.</p>
        <br/>
        <p>Best regards,<br/>Tarun Kumar</p>
      `
    });
console.log('Auto-response sent to user');
    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

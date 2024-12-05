import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, subject, phone, message } = body;

  try {

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'solarisxavier@gmail.com',
        pass: 'hlwe ejng jehy zdqh',
      },
    });
    const mailOptions = {
      from: email,
      to: 'mondalrishav763@gmail.com',
      subject: `Contact Form Submission: ${subject}`,
      text: `You have a new message from your website contact form:\n\n
      Name: ${name}\n
      Email: ${email}\n
      Phone: ${phone}\n
      Message: ${message}`,
    };
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
  }
}

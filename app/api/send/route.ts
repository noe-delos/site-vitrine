import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Log API key presence (don't log the actual key)
    console.log('API Key exists:', !!process.env.RESEND_API_KEY);

    // Log incoming request data
    const body = await request.json();
    console.log('Received form data:', {
      name: body.name,
      email: body.email,
      company: body.company,
      messageLength: body.message?.length,
    });

    const { name, email, company, message } = body;

    // Log email attempt
    console.log('Attempting to send email...');

    const data = await resend.emails.send({
      from: 'KS consulting <onboarding@resend.dev>', // Update this with your verified domain
      to: ['contact@ks-entreprise.com'], // Update with your email
      subject: `Nouveau message de ${name} - KS consulting`,
      html: `
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nouvelle demande de contact - KS Entreprise</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: Arial, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 20px;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); overflow: hidden;">
                    <!-- Header with Logo -->
                    <tr>
                        <td style="padding: 30px 40px; text-align: center; background-color: #ffffff; border-bottom: 1px solid #eaeaea;">
                            <img src="https://raw.githubusercontent.com/noe-delos/storage/2662eeae114d8a2daa93744caf25a08d8cd1c277/brand-logo.png" alt="KS Entreprise Logo" style="height: 120px; width: auto;"/>
                        </td>
                    </tr>
                    
                    <!-- Main Content -->
                    <tr>
                        <td style="padding: 40px;">
                            <h1 style="color: #333333; font-size: 24px; margin: 0 0 20px 0; font-weight: 600;">
                                Nouvelle demande de contact
                            </h1>
                            
                            <div style="background-color: #f8f9fa; border-radius: 6px; padding: 25px; margin: 20px 0;">
                                <p style="margin: 0 0 15px 0;">
                                    <strong style="color: #666666;">Nom :</strong>
                                    <span style="color: #333333;">\ ${name}</span>
                                </p>
                                
                                <p style="margin: 0 0 15px 0;">
                                    <strong style="color: #666666;">Email :</strong>
                                    <span style="color: #333333;">\ ${email}</span>
                                </p>
                                
                                <p style="margin: 0 0 15px 0;">
                                    <strong style="color: #666666;">Entreprise :</strong>
                                    <span style="color: #333333;">\ ${company}</span>
                                </p>
                                
                                <p style="margin: 0;">
                                    <strong style="color: #666666;">Message :</strong>
                                    <span style="color: #333333; display: block; margin-top: 8px;">\ ${message}</span>
                                </p>
                            </div>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="padding: 20px 40px; background-color: #f8f9fa; border-top: 1px solid #eaeaea; text-align: center;">
                            <p style="margin: 0; color: #666666; font-size: 14px;">
                                © 2024 KS Entreprise - Services Informatiques
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>      `,
    });

    // Log success
    console.log('Email sent successfully:', data);

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    // Log the error
    console.error('Failed to send email:', error);

    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    );
  }
}

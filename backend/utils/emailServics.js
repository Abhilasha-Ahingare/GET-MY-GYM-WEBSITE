const nodemailer = require('nodemailer');

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Send confirmation email to user
exports.sendUserConfirmation = async (demoData) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log('Email configuration not set up. Skipping email sending.');
    return;
  }

  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"Get Mygym" <${process.env.EMAIL_USER}>`,
      to: demoData.email,
      subject: 'Demo Scheduled Successfully - Get Mygym',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5;">Demo Scheduled Successfully!</h2>
          <p>Dear ${demoData.fullName},</p>
          <p>Thank you for scheduling a demo with Get Mygym. Here are your demo details:</p>
          
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${demoData.fullName}</p>
            <p><strong>Gym Name:</strong> ${demoData.gymName}</p>
            <p><strong>Email:</strong> ${demoData.email}</p>
            <p><strong>Phone:</strong> ${demoData.phone}</p>
            <p><strong>Preferred Date:</strong> ${new Date(demoData.date).toLocaleDateString('en-IN')}</p>
          </div>
          
          <p>Our team will contact you shortly to confirm the demo timing and provide the meeting link.</p>
          
          <p>If you have any questions, feel free to reply to this email or call us at +91-800-GET-GYM.</p>
          
          <p>Best regards,<br>Get Mygym Team</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent to user');
  } catch (error) {
    console.error('Error sending confirmation email to user:', error);
  }
};

// Send notification email to admin
exports.sendAdminNotification = async (demoData) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log('Email configuration not set up. Skipping admin notification.');
    return;
  }

  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"Get Mygym" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: 'New Demo Request - Get Mygym',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5;">New Demo Request Received</h2>
          
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${demoData.fullName}</p>
            <p><strong>Gym Name:</strong> ${demoData.gymName}</p>
            <p><strong>Email:</strong> ${demoData.email}</p>
            <p><strong>Phone:</strong> ${demoData.phone}</p>
            <p><strong>Preferred Date:</strong> ${new Date(demoData.date).toLocaleDateString('en-IN')}</p>
            <p><strong>Submitted At:</strong> ${new Date().toLocaleString('en-IN')}</p>
          </div>
          
          <p>Please contact the user within 24 hours to confirm the demo schedule.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Admin notification email sent');
  } catch (error) {
    console.error('Error sending admin notification email:', error);
  }
};
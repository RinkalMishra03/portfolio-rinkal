import nodemailer from "nodemailer";

interface EmailPayload {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt: Date;
  ipAddress?: string;
  userAgent?: string;
}

export async function sendContactEmail(payload: EmailPayload): Promise<boolean> {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const receiver = process.env.RECEIVER_EMAIL;

  if (!user || !pass || !receiver) {
    console.warn(
      "⚠️ Nodemailer SMTP configurations are incomplete. Set SMTP_USER, SMTP_PASS, and RECEIVER_EMAIL in environment variables."
    );
    return false;
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // True for 465, false for other ports like 587
    auth: {
      user,
      pass,
    },
  });

  const formattedDate = payload.createdAt.toLocaleString("en-US", {
    timeZone: "UTC",
    dateStyle: "full",
    timeStyle: "long",
  });

  // Strict email body format as requested:
  const textBody = `--------------------------------
Name: ${payload.name}
Email: ${payload.email}
Phone: ${payload.phone || "Not provided"}
Subject: ${payload.subject}
Message: ${payload.message}
Date & Time: ${formattedDate} (UTC)
IP Address: ${payload.ipAddress || "Unknown"}
Browser: ${payload.userAgent || "Unknown"}
--------------------------------`;

  const mailOptions = {
    from: `"${payload.name} via Portfolio" <${user}>`,
    to: receiver,
    replyTo: payload.email,
    subject: "New Portfolio Contact Form Submission",
    text: textBody,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`📧 Contact email successfully sent via SMTP to ${receiver}`);
    return true;
  } catch (error) {
    console.error("❌ Failed to dispatch email via SMTP:", error);
    return false;
  }
}

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type Mail from "nodemailer/lib/mailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || "465"),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { to, subject, html, text, attachments } = body as {
      to: string;
      subject: string;
      html?: string;
      text?: string;
      attachments?: Array<{
        filename?: string;
        content?: string;
        contentType?: string;
      }>;
    };

    const mailOptions: Mail.Options = {
      from: process.env.EMAIL_FROM,
      to,
      subject,
      text,
      html,
    };

    if (attachments && Array.isArray(attachments) && attachments.length > 0) {
      mailOptions.attachments = attachments.map((attachment) => {
        if (attachment.content && typeof attachment.content === "string") {
          const base64Pattern =
            /^data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+);base64,(.*)$/;
          const matches = attachment.content.match(base64Pattern);

          if (matches) {
            return {
              filename: attachment.filename || "attachment",
              content: Buffer.from(matches[2], "base64"),
              contentType: matches[1],
            };
          } else {
            return {
              filename: attachment.filename || "attachment",
              content: Buffer.from(attachment.content, "base64"),
              contentType: attachment.contentType || "application/octet-stream",
            };
          }
        }

        return {
          filename: attachment.filename || "attachment",
          content: Buffer.from(""),
          contentType: attachment.contentType || "application/octet-stream",
        };
      });
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Failed to send email:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Failed to send email: ${errorMessage}` },
      { status: 500 },
    );
  }
}

import nodemailer from 'nodemailer';

const sendmail=async (options)=>{
   const testaccount=await nodemailer.createTestAccount();

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: testaccount.user,
    pass: testaccount.pass,
  },
});

// Wrap in an async IIFE so we can use await.

  const message = {
    from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
    to: options.email,
    subject: options.subject,
    text: options.message, // plain‑text body
  };
  const info = await transporter.sendMail(message);
    console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

export default sendmail
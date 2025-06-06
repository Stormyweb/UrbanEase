const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const nodemailer = require("nodemailer");
const { defineSecret } = require("firebase-functions/params");

// Initialize Firebase Admin SDK
initializeApp();

// Define Firebase Secrets
const smtpEmail = defineSecret("SMTP_EMAIL");
const smtpPassword = defineSecret("SMTP_PASSWORD");

exports.sendBookingConfirmation = onDocumentCreated(
  {
    document: "bookings/{bookingId}",
    secrets: [smtpEmail, smtpPassword], // Declare secrets used by this function
  }, 
  async (event) => {
    const data = event.data?.data();

    if (!data || !data.email) {
      console.error("Missing booking data or email.");
      return;
    }

    // Create transporter with secrets
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpEmail.value(),
        pass: smtpPassword.value(),
      },
    });

    const mailOptions = {
      from: `"Urban Ease" <${smtpEmail.value()}>`,
      to: data.email,
      subject: `Booking Confirmation - ${data.service}`,
      html: `
        <h2>Booking Confirmed</h2>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Address:</strong> ${data.address}</p>
        ${data.timeSlot ? `<p><strong>Time Slot:</strong> ${data.timeSlot}</p>` : ""}
        <p>We will contact you shortly. Thank you!</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Confirmation email sent to", data.email);
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  }
);
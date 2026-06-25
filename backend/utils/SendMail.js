
// TODO: Re-integrate email sending (Nodemailer / Brevo) later when ready.

const sendResetMail = async (email, resetToken, type) => {
  console.warn(
    `[SendMail] Email sending is disabled. Skipping reset email to: ${email}`
  );
};

module.exports = sendResetMail;

const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "joanny.connelly96@ethereal.email",
      pass: "Gs2XbrbcnhudzvqyTw",
    },
  });

  let info = await transporter.sendMail({
    from: '"FAYOB" <fayobgold@mail.com>',
    to: "bar@example.com",
    subject: "Send Email",
    html: "<h2>Sending Emails with Node.JS</h2>",
  });

  res.json(info);
};

module.exports = sendEmail;

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
    from: '"FAYOB" <fayobgold@gmail.com>',
    to: "bar@example.com",
    subject: "Send Email",
    text: "Text Here",
    html: "<h2>Sending Emails with Node.JS</h2>",
  });

  res.json(info);
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};

module.exports = sendEmail;

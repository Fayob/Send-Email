const nodemailer = require("");

const sendEmail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "glenda.macejkovic36@ethereal.email",
      pass: "C5Gz1vBr1A7BfVK3TX",
    },
  });

  res.send("This is the email");
};

module.exports = sendEmail;

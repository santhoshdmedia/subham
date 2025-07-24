const nodemailer = require("nodemailer");
const ejs = require("ejs");
const fs = require("fs");
const path = require("path");

const contactMail = async (req, res) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER,
        pass: process.env.APP_PASS,
      },
    });

    const templatePath = path.join(__dirname, "../template.ejs");
    const template = fs.readFileSync(templatePath, "utf-8");

    const mailOptions = {
      from: "email",
      to: process.env.T0_EMAIL,
      subject: "Business Enquire Request",
      html: ejs.render(template, req.body),
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
    });
    res.status(200).send({ message: "success" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "failed" });
  }
};

module.exports = { contactMail };

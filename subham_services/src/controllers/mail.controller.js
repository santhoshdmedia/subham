const nodemailer = require("nodemailer");
const ejs = require("ejs");
const fs = require("fs");
const path = require("path");

const contactMail = async (req, res) => {
  const {user,phone,mail,message}=req.body;
  let userDetails={
    name:user,
    phone:phone,
    email:mail,
    message:message
  }
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "info@sailsubham.com",
        pass: "gwpm jztp hxou fmvp",
      },
    });

    const templatePath = path.join(__dirname, "../template.ejs");
    const template = fs.readFileSync(templatePath, "utf-8");

    const mailOptions = {
      from: "email",
      to: "info@sailsubham.com",
      subject: "Business Enquire Request",
      html: ejs.render(template, userDetails),
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

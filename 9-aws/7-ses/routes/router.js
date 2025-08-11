import dotenv from "dotenv/config";
import express from "express";
import aws from "aws-sdk";

const sesRegion = process.env.AWS_SES_REGION;
const accessKey = process.env.AWS_ACCESS_KEY;
const secretKey = process.env.AWS_SECRET_KEY;
const emailAddress = process.env.EMAIL_ADDRESS;

const ses = new aws.SES({
  region: sesRegion,
  accessKeyId: accessKey,
  secretAccessKey: secretKey,
});

const router = express.Router();

router.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  sendEmail(emailAddress, name, email, message)
    .then((val) => {
      console.log(val);
      res.send(`Email sent successfully!\n(Email not received? Check your spam folder)`);
    })
    .catch((err) => {
      res.send(`Failed to send email: ${err}`);
    });
});

function sendEmail(emailTo, name, emailFrom, message) {
  const params = {
    Destination: {
      ToAddresses: [emailTo],
    },
    Message: {
      Body: { Text: { Data: `Name: ${name}\nMessage: ${message}` } },
      Subject: { Data: `AWS SES - Email from ${emailFrom}` },
    },
    Source: emailTo,
  };
  return ses.sendEmail(params).promise();
}

export default router;

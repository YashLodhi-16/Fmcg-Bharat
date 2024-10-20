// import neccessary modules
import nodemailer, {
  Transporter,
  SendMailOptions,
  SentMessageInfo,
} from "nodemailer";

const sendEmails = function (
  from: string,
  to: string | string[],
  subject: string,
  html: string
): Promise<SentMessageInfo> {
  return new Promise<SentMessageInfo>(async (resolve, reject) => {
    // try and catch block to avoid error's
    try {
      // if any of these are not provided then throw a error
      if (!from || !to || !subject || !html) {
        reject(
          new Error(
            "From Or To Or Subject Or Html, Any Of These Are Not Provided..."
          )
        );
      }

      // if any of these are not provided then throw a error
      const { HOST, EMAIL, PASS } = process.env;
      if (!HOST || !EMAIL || !PASS) {
        reject(
          new Error("Host Or EMAIL Or Pass, Any Of These Are Not Provided...")
        );
      }

      // this email will send emails
      const transporter: Transporter = nodemailer.createTransport({
        host: HOST,
        port: 465,
        secure: true,
        auth: {
          user: EMAIL,
          pass: PASS,
        },
      });

      // these are the things neccessary to send an emails
      const mailOptions: SendMailOptions = {
        from,
        to,
        subject,
        html,
      };

      // send an email using promise to get its response value
      const sendEmail = new Promise<SentMessageInfo>((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            return reject(error);
          } else {
            return resolve(info);
          }
        });
      });

      // store response
      const info: SentMessageInfo = await sendEmail;

      // if response is empty, reject the promise
      if (!info) {
        reject(new Error("Mail Not Send!!!"));
      }

      // return send email response
      return resolve(info);
    } catch (error) {
      // log error to console and reject the promise
      console.error("Error Occured While Sending Email...", error);
      reject("Error Occured While Sending Email...");
    }
  });
};

// export it has a default function
export default sendEmails;

import { FAQ } from "@/lib/interfaces/FAQ";
import { FeedbackForm } from "../interfaces/Form";
export const feedbackTemplate = (props: FeedbackForm) => {
  const { name, message, email, subject } = props;
  return `
        <!DOCTYPE html>
                    <html>
                    <head>
                    <meta charset="UTF-8">
                    <title>Email</title>
                    </head>
                    <body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f9f9f9; text-transform: capitalize;">
                    <div style="max-width: 600px; margin: auto; background: #fff; padding: 20px; border: 1px solid #ddd;">
                    <h1 style="color: #333;">Name: ${name}</h1>
                    <p style="font-size: 16px; color: #555; text-transform: none;">Email: ${email}</p> 
                    <h2 style="font-size: 16px; color: #333;">subject: ${subject}</h2>
                    <p style="font-size: 16px; color: #555;">message: ${message}</p>
                    </div>
                    </body>
                    </html>
    `;
};

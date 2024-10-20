import { ContactForm } from "../interfaces/Form";

export const contactTemplate = (props: ContactForm) => {
  const { email, message, name } = props;
  return `
    <html lang="en" dir="ltr" class="fix-spin windows dark complete">
          <head> </head>
          <body
            style="
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 20px;
              background-color: #f9f9f9;
              text-transform: capitalize;
            "
            class="mail-detail-content noI18n colorQuoted text-very-small"
            role="complementary"
            aria-label="sample email"
          >
            <div
              style="
                max-width: 600px;
                margin: auto;
                background: #fff;
                padding: 20px;
                border: 1px solid #ddd;
              "
            >
              <h1 style="color: #333">Name: ${name}</h1>
              
                  <p style="font-size: 16px; color: #555; text-transform: none;">
                    Email:
                    <a
                      href="mailto:${email}"
                      class="mailto-link"
                      target="_blank"
                      style="text-decoration: none"
                      >${email}</a
                    >
                  </p> 
                  <p style="font-size: 16px; color: #555">
                    <span style="color: #333">Message: </span> ${message}
                  </p>
                
            </div>
          </body>
        </html>
`;
};

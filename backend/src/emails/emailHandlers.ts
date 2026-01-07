import { resendClient, sender } from "../lib/resend.js";
import { createWelcomeEmailTemplate } from "./emailTemplates.js";

export const sendWelcomeEmail = async (
  email: string,
  name: string,
  clientURL: string
) => {
  const { data, error } = await resendClient.emails.send({
    from: `${sender.name} <${sender.email}>`,
    to: email,
    subject: "Welcome to chatup",
    html: createWelcomeEmailTemplate(name, clientURL),
  });
  if (error) {
    return console.error({ error });
    throw Error("Failed to send welcome email");
  }
  console.log(data);
};

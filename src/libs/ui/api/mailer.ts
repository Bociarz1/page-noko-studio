import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

interface SendEmailParams {
  to: string;
  replyTo?: string;
  subject: string;
  title?: string;
  fields: Record<string, string>;
  message?: string;
}

export const sendFormEmail = async ({ to, replyTo, subject, title = "Nowe zapytanie z formularza", fields, message }: SendEmailParams) => {
  const tableRows = Object.entries(fields)
    .filter(([_, value]) => value) // Pomijamy puste wartości
    .map(([key, value]) => `
    <tr>
      <td style="padding: 8px 0; font-weight: bold; color: #6b7280; width: 140px;">${key}:</td>
      <td style="padding: 8px 0; color: #111827;">${value}</td>
    </tr>
  `).join('');

  const messageHtml = message ? `
    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
    <h3 style="color: #374151; margin-top: 0;">Wiadomość:</h3>
    <p style="color: #111827; line-height: 1.6; white-space: pre-wrap;">${message}</p>
  ` : '';

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
      <h2 style="color: #111827; margin-top: 0;">${title}</h2>
      <table style="width: 100%; border-collapse: collapse;">
        ${tableRows}
      </table>
      ${messageHtml}
      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
      <p style="color: #9ca3af; font-size: 12px; margin-bottom: 0;">Wiadomość wysłana przez formularz na stronie Noko Studio.</p>
    </div>
  `;

  return await resend.emails.send({
    from: "Formularz kontaktowy <onboarding@resend.dev>",
    to: [to],
    replyTo,
    subject,
    html,
  });
};

import { Resend } from 'resend';

interface SendEmailParams {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

/**
 * Zewnętrzny wrapper dla usługi Resend.
 * Służy do formatowania i wysyłania wiadomości e-mail w formacie HTML.
 */
export const sendEmail = async ({ name, email, phone, subject, message }: SendEmailParams) => {
  // Pobieranie kluczy w trybie SSR
  const resendApiKey = import.meta.env.RESEND_API_KEY;
  const fromEmail = import.meta.env.CONTACT_EMAIL_FROM || 'onboarding@resend.dev';
  const toEmail = import.meta.env.CONTACT_EMAIL_TO;

  if (!resendApiKey || !toEmail) {
    throw new Error('Brak konfiguracji zmiennych środowiskowych serwera pocztowego.');
  }

  const resend = new Resend(resendApiKey);

  const tableRows = [
    ['Imię i nazwisko', name],
    ['E-mail', email],
    ['Telefon', phone],
    ['Temat', subject],
  ]
    .filter(([_, value]) => value)
    .map(
      ([key, value]) => `
    <tr>
      <td style="padding: 8px 0; font-weight: bold; color: #6b7280; width: 140px;">${key}:</td>
      <td style="padding: 8px 0; color: #111827;">${value}</td>
    </tr>
  `
    )
    .join('');

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
      <h2 style="color: #111827; margin-top: 0;">Nowe zapytanie z formularza kontaktowego</h2>
      <table style="width: 100%; border-collapse: collapse;">
        ${tableRows}
      </table>
      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
      <h3 style="color: #374151; margin-top: 0;">Wiadomość:</h3>
      <p style="color: #111827; line-height: 1.6; white-space: pre-wrap;">${message}</p>
      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
      <p style="color: #9ca3af; font-size: 12px; margin-bottom: 0;">Wiadomość wysłana przez formularz na stronie Noko Studio.</p>
    </div>
  `;

  const { data, error } = await resend.emails.send({
    from: `Formularz WWW <${fromEmail}>`,
    to: [toEmail],
    subject: `Nowe zapytanie: ${subject}`,
    replyTo: email,
    html,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

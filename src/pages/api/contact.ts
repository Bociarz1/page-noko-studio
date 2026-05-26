import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  // Parsowanie danych z formularza
  let data: Record<string, string>;
  try {
    data = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ success: false, message: "Nieprawidłowy format danych." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const { name, email, subject, message } = data;

  // Walidacja po stronie serwera
  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return new Response(
      JSON.stringify({ success: false, message: "Wszystkie pola są wymagane." }),
      { status: 422, headers: { "Content-Type": "application/json" } }
    );
  }

  // Walidacja formatu e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response(
      JSON.stringify({ success: false, message: "Podaj prawidłowy adres e-mail." }),
      { status: 422, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const { error } = await resend.emails.send({
      from: "Formularz kontaktowy <onboarding@resend.dev>",
      to: [import.meta.env.CONTACT_EMAIL],
      replyTo: email,
      subject: `Nowe zapytanie: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #111827; margin-top: 0;">Nowe zapytanie z formularza kontaktowego</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #6b7280; width: 120px;">Imię i nazwisko:</td>
              <td style="padding: 8px 0; color: #111827;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">E-mail:</td>
              <td style="padding: 8px 0; color: #111827;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Temat:</td>
              <td style="padding: 8px 0; color: #111827;">${subject}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
          <h3 style="color: #374151; margin-top: 0;">Wiadomość:</h3>
          <p style="color: #111827; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
          <p style="color: #9ca3af; font-size: 12px; margin-bottom: 0;">Wiadomość wysłana przez formularz na stronie Noko Studio</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return new Response(
        JSON.stringify({ success: false, message: "Nie udało się wysłać wiadomości. Spróbuj ponownie." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Wiadomość wysłana. Odezwiemy się wkrótce!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(
      JSON.stringify({ success: false, message: "Wystąpił nieoczekiwany błąd. Spróbuj ponownie." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

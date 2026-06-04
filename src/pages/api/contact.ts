import type { APIRoute } from "astro";
import { sendFormEmail } from "@libs/ui/api/mailer";

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

  const { name, email, phone, subject, message } = data;

  // Walidacja po stronie serwera
  if (!name?.trim() || !email?.trim() || !phone?.trim() || !subject?.trim() || !message?.trim()) {
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
    const { error } = await sendFormEmail({
      to: import.meta.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Nowe zapytanie: ${subject}`,
      title: "Nowe zapytanie z formularza kontaktowego",
      fields: {
        "Imię i nazwisko": name,
        "E-mail": email,
        "Telefon": phone,
        "Temat": subject,
      },
      message,
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

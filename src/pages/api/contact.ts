import type { APIRoute } from 'astro';
import { sendEmail } from '@libs/resend/sendEmail';

// Kluczowe do działania na Cloudflare (jako SSR Endpoint)
export const prerender = false;

// Czysta funkcja walidacyjna (Vanilla TS)
const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, phone, subject, message, honeypot } = data;

    // Podstawowa ochrona przed botami spamującymi
    if (honeypot) {
      // Udajemy sukces dla bota
      return new Response(JSON.stringify({ success: true, message: 'Wysłano' }), { status: 200 });
    }

    // Prosta walidacja "Vanilla TypeScript"
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return new Response(
        JSON.stringify({ error: 'Proszę podać prawidłowe imię (min. 2 znaki).' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!email || typeof email !== 'string' || !validateEmail(email)) {
      return new Response(
        JSON.stringify({ error: 'Proszę podać prawidłowy adres e-mail.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!phone || typeof phone !== 'string' || phone.trim().length < 9) {
      return new Response(
        JSON.stringify({ error: 'Proszę podać prawidłowy numer telefonu (min. 9 znaków).' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!subject || typeof subject !== 'string' || subject.trim().length < 2) {
      return new Response(JSON.stringify({ error: 'Proszę podać temat wiadomości.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return new Response(
        JSON.stringify({ error: 'Wiadomość musi mieć minimum 10 znaków.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Wywołanie Czystej Logiki Biznesowej (libs)
    await sendEmail({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });

    return new Response(
      JSON.stringify({ success: true, message: 'Wiadomość została wysłana pomyślnie!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    console.error('Błąd krytyczny API Kontaktowego:', error);
    return new Response(
      JSON.stringify({ error: 'Błąd serwera. Spróbuj ponownie później.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

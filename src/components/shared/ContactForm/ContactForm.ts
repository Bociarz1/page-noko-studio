const form = document.getElementById('contact-form') as HTMLFormElement;
const status = document.getElementById('contact-status') as HTMLParagraphElement;
const submit = document.getElementById('contact-submit') as HTMLButtonElement;

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Kliencka walidacja HTML5
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  submit.disabled = true;
  status.textContent = 'Wysyłanie…';
  status.className = 'contact-form__status contact-form__status--pending';

  const formData = new FormData(form);
  const payload = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    phone: (formData.get('phone') as string) || '',
    subject: formData.get('subject') as string,
    message: formData.get('message') as string,
  };

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const result = await response.json() as { success: boolean; message: string };

    if (result.success) {
      status.textContent = result.message;
      status.className = 'contact-form__status contact-form__status--success';
      form.reset();
    } else {
      status.textContent = result.message;
      status.className = 'contact-form__status contact-form__status--error';
    }
  } catch {
    status.textContent = 'Problem z połączeniem. Sprawdź internet i spróbuj ponownie.';
    status.className = 'contact-form__status contact-form__status--error';
  } finally {
    submit.disabled = false;
  }
});

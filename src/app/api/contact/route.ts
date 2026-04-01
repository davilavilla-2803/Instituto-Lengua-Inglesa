import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

interface ContactPayload {
  name: string;
  email: string;
  interest: string;
  message: string;
}

const RATE_LIMIT_MAP = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = RATE_LIMIT_MAP.get(ip);
  if (!entry || now - entry.timestamp > RATE_LIMIT_WINDOW_MS) {
    RATE_LIMIT_MAP.set(ip, { count: 1, timestamp: now });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) return true;
  entry.count++;
  return false;
}

function sanitize(str: string): string {
  return str.replace(/[<>"'`]/g, '').trim().slice(0, 500);
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Demasiados intentos. Esperá un momento.' },
      { status: 429 }
    );
  }

  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Solicitud inválida.' }, { status: 400 });
  }

  const name = sanitize(body.name ?? '');
  const email = sanitize(body.email ?? '');
  const interest = sanitize(body.interest ?? '');
  const message = sanitize(body.message ?? '');

  if (!name || !email) {
    return NextResponse.json(
      { error: 'Nombre y email son requeridos.' },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Email inválido.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    console.error('Faltan variables de entorno RESEND_API_KEY / CONTACT_TO_EMAIL');
    return NextResponse.json(
      { error: 'Error de configuración del servidor.' },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: 'Instituto Lengua Inglesa <onboarding@resend.dev>',
    to: toEmail,
    replyTo: email,
    subject: `Nueva consulta de ${name} — ${interest}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#8b5a3c">Nueva consulta desde la web</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px;font-weight:bold;width:120px">Nombre</td><td style="padding:8px">${name}</td></tr>
          <tr style="background:#fdfaf6"><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold">Interés</td><td style="padding:8px">${interest}</td></tr>
          <tr style="background:#fdfaf6"><td style="padding:8px;font-weight:bold;vertical-align:top">Mensaje</td><td style="padding:8px">${message || '(sin mensaje)'}</td></tr>
        </table>
      </div>
    `,
  });

  if (error) {
    console.error('Error Resend:', error);
    return NextResponse.json(
      { error: 'No se pudo enviar el mensaje. Intentá de nuevo.' },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}

import { NextRequest, NextResponse } from "next/server";

// In-memory rate limiter: max 3 submissions per IP per 10 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 3;

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (entry.count >= MAX_REQUESTS) return true;
  entry.count++;
  return false;
}

const NAME_RE = /^[\p{L}\s'-]{2,80}$/u;
const PHONE_RE = /^\+?[\d\s\-()]{7,20}$/;
const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Zbyt wiele zapytań. Spróbuj ponownie za kilka minut." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Nieprawidłowe dane." }, { status: 400 });
  }

  const { name, phone, email, date, guests, message, honeypot } = body as Record<string, string>;

  // Honeypot: bots fill this hidden field, humans don't
  if (honeypot) {
    return NextResponse.json({ ok: true }); // silent accept to not reveal detection
  }

  const errors: string[] = [];

  if (!name || !NAME_RE.test(name.trim()))
    errors.push("Podaj poprawne imię i nazwisko (2–80 znaków).");
  if (!phone || !PHONE_RE.test(phone.trim()))
    errors.push("Podaj poprawny numer telefonu.");
  if (!email || !EMAIL_RE.test(email.trim()))
    errors.push("Podaj poprawny adres e-mail.");
  if (!date || !DATE_RE.test(date))
    errors.push("Podaj poprawną datę.");
  else {
    const chosen = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (chosen < today) errors.push("Data nie może być w przeszłości.");
  }
  if (!guests || !["1","2","3","4","5","6","7","8"].includes(String(guests)))
    errors.push("Wybierz liczbę osób.");
  if (message && String(message).length > 500)
    errors.push("Wiadomość może mieć maksymalnie 500 znaków.");

  if (errors.length > 0) {
    return NextResponse.json({ error: errors.join(" ") }, { status: 422 });
  }

  // Here you would send an email / write to DB.
  // For now we return success so the form works end-to-end.
  return NextResponse.json({ ok: true });
}

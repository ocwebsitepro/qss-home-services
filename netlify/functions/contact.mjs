import { Resend } from "resend";

const ADMIN_EMAIL = process.env.CONTACT_TO || "michaelh1847@gmail.com";
const FROM_EMAIL =
  process.env.RESEND_FROM || "QSS Home Services <hello@qsshomeservices.com>";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders,
    },
    body: JSON.stringify(body),
  };
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function parseBody(event) {
  if (!event.body) return {};

  const raw = event.isBase64Encoded
    ? Buffer.from(event.body, "base64").toString("utf8")
    : event.body;

  const contentType = event.headers["content-type"] || event.headers["Content-Type"] || "";

  if (contentType.includes("application/json")) {
    return JSON.parse(raw);
  }

  return Object.fromEntries(new URLSearchParams(raw));
}

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY");
    return json(500, { error: "Email service is not configured." });
  }

  let data;
  try {
    data = await parseBody(event);
  } catch {
    return json(400, { error: "Invalid request body." });
  }

  // Honeypot — bots fill this; real users leave it empty.
  if (data["bot-field"] || data.botField) {
    return json(200, { ok: true });
  }

  const name = String(data.name || "").trim();
  const phone = String(data.phone || "").trim();
  const email = String(data.email || "").trim().toLowerCase();
  const message = String(data.message || "").trim();

  if (!name || !phone || !email || !message) {
    return json(400, { error: "Please fill out all fields." });
  }

  if (!isValidEmail(email)) {
    return json(400, { error: "Please enter a valid email address." });
  }

  if (name.length > 120 || phone.length > 40 || email.length > 200 || message.length > 5000) {
    return json(400, { error: "One or more fields are too long." });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const safeName = escapeHtml(name);
  const safePhone = escapeHtml(phone);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  const adminHtml = `
    <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #121417;">
      <h2 style="margin: 0 0 12px;">New website lead</h2>
      <p style="margin: 0 0 16px;">Someone submitted the contact form on qsshomeservices.com.</p>
      <p style="margin: 0 0 8px;"><strong>Name:</strong> ${safeName}</p>
      <p style="margin: 0 0 8px;"><strong>Phone:</strong> <a href="tel:${safePhone}">${safePhone}</a></p>
      <p style="margin: 0 0 8px;"><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
      <p style="margin: 16px 0 8px;"><strong>Message:</strong></p>
      <p style="margin: 0; padding: 12px; background: #f5f6f7; border-radius: 4px;">${safeMessage}</p>
    </div>
  `;

  const customerHtml = `
    <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #121417;">
      <h2 style="margin: 0 0 12px;">Thanks, ${safeName} — we got your request.</h2>
      <p style="margin: 0 0 16px;">
        QSS Home Services received your message. Michael or the team will follow up soon.
      </p>
      <p style="margin: 0 0 16px;">
        Need help sooner? Call us at
        <a href="tel:+17148849112"><strong>(714) 884-9112</strong></a>.
      </p>
      <p style="margin: 0 0 8px;"><strong>Your message:</strong></p>
      <p style="margin: 0 0 20px; padding: 12px; background: #f5f6f7; border-radius: 4px;">${safeMessage}</p>
      <p style="margin: 0; color: #2a3038; font-size: 14px;">
        QSS Home Services · Huntington Beach, CA · Servicing Orange County
      </p>
    </div>
  `;

  try {
    const [adminResult, customerResult] = await Promise.all([
      resend.emails.send({
        from: FROM_EMAIL,
        to: [ADMIN_EMAIL],
        replyTo: email,
        subject: `New QSS lead from ${name}`,
        html: adminHtml,
        text: `New website lead\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
      resend.emails.send({
        from: FROM_EMAIL,
        to: [email],
        replyTo: ADMIN_EMAIL,
        subject: "We received your request — QSS Home Services",
        html: customerHtml,
        text: `Thanks, ${name} — we got your request.\n\nQSS Home Services received your message and will follow up soon.\n\nNeed help sooner? Call (714) 884-9112.\n\nYour message:\n${message}\n\nQSS Home Services · Huntington Beach, CA`,
      }),
    ]);

    if (adminResult.error || customerResult.error) {
      console.error("Resend error", {
        admin: adminResult.error,
        customer: customerResult.error,
      });
      return json(502, {
        error: "We couldn’t send your message right now. Please call (714) 884-9112.",
      });
    }

    return json(200, { ok: true });
  } catch (error) {
    console.error("Contact function failed", error);
    return json(500, {
      error: "Something went wrong. Please call (714) 884-9112.",
    });
  }
}

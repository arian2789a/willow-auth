# Willow — Botanical Authentication UI

A responsive English / LTR authentication interface built with **Next.js App Router, React, TypeScript and CSS**. Project 05 in a six-design portfolio: a calm, light workspace with olive accents and an original SVG reading-corner illustration.

> **UI demo only.** No authentication backend, database, email delivery or OAuth integration is included. Submitting a valid form shows an explicit demo message; passwords are never stored or sent. Social buttons explain that their integrations are not configured. The remember-me checkbox is visual only.

## Features

- English copy, document language `en` and left-to-right layout.
- Separate login, registration and password-recovery demo routes.
- Responsive desktop split layout and compact mobile form.
- Native email/required-field validation and an eight-character minimum for registration passwords.
- Password visibility toggle, input autocomplete, visible keyboard focus and announced form feedback.
- Original inline SVG botanical artwork: no stock photos, image downloads or image API keys.
- GitHub Actions production-build and TypeScript checks.
- MIT license.

## Run locally

Install **Node.js 20.9+** (Node.js 22 LTS recommended), then:

```bash
npm ci
npm run dev
```

Open http://localhost:3000. The home route redirects to `/login`.

| Route | Page |
| --- | --- |
| `/login` | Sign in |
| `/signup` | Create account |
| `/forgot-password` | Password recovery UI demo |

```bash
npm run build      # Production build
npm run start      # Serve the production build
npm run typecheck  # TypeScript check (run build first on a fresh checkout)
```

No environment variables are required. System fonts (Arial and Georgia) are used; no font requests or external image downloads are needed.

## Publish the source on GitHub

Create an **empty** repository named `willow-auth-en` on GitHub. Do not initialize it with a README or license because this project already includes both. Extract this project, open a terminal in its folder, then replace `YOUR_USERNAME` below:

```bash
git init
git add .
git commit -m "Build English botanical authentication UI"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/willow-auth-en.git
git push -u origin main
```

Authenticate with your own GitHub credentials when Git requests it. Do not upload `node_modules`, `.next` or secrets. The included `.gitignore` excludes these.

Suggested repository description:

> Responsive light English login & sign-up UI built with Next.js, React and TypeScript.

Suggested topics: `nextjs`, `react`, `typescript`, `light-theme`, `botanical-design`, `login-page`, `authentication-ui`, `responsive-design`.

## Deploy a live demo

Import your repository into Vercel, keep the detected Next.js framework and default build settings, then deploy. No environment variables are required. Add the resulting URL to your GitHub repository's Website field. A Node.js host running `npm run build` and `npm run start` is another option. This project is not configured for GitHub Pages static hosting.

## Structure

```text
app/
  layout.tsx                English document and metadata
  globals.css               Responsive styles and SVG presentation
  page.tsx                  Redirect to login
  login/page.tsx
  signup/page.tsx
  forgot-password/page.tsx
components/auth-screen.tsx  Shared, typed UI and demo interactions
.github/workflows/ci.yml    CI build and TypeScript checks
```

## Customize

Edit colors in `app/globals.css` (`--accent`, `--ink`, `--muted`), copy and brand in `components/auth-screen.tsx`, and metadata in `app/layout.tsx`. The original SVG artwork is embedded in the shared component. Before implementing real login, add server-side validation, secure sessions, CSRF protection where applicable, rate limiting, a password-hashing strategy or managed identity provider, and real recovery / OAuth flows. Never treat client-side validation as authorization.

## راهنمای فارسی

این پروژه پنجمین طرح مجموعه و دومین نمونهٔ انگلیسی است: رنگ‌های سفید و سبز زیتونی، فرم چپ‌چین و تصویرسازی اختصاصی یک فضای مطالعه با درخت زیتون. تصویر SVG است، عکس واقعی نیست. فونت‌ها سیستمی هستند و تصویر خارجی دانلود نمی‌شود.

پس از نصب Node.js، در پوشهٔ پروژه `npm ci` و سپس `npm run dev` را اجرا کن و آدرس `http://localhost:3000` را باز کن. برای انتشار، مخزن خالی گیت‌هاب بساز و دستورهای بخش Publish را با نام کاربری خودت اجرا کن.

این نسخه صرفاً رابط کاربری است؛ حسابی ساخته نمی‌شود، ایمیلی ارسال نمی‌شود و ورود گوگل یا گیت‌هاب متصل نیست. گزینهٔ Remember me فقط نمایشی است.

## License

[MIT](LICENSE). Use, adapt and publish. No affiliation with Google or GitHub is implied.

## Delivery validation

Production build and TypeScript check passed. Generated HTML for all routes was checked for English LTR markup, linked input labels, required email fields and botanical artwork. The registration password minimum length was verified. Browser visual and interaction checks were not performed; inspect desktop and mobile layouts before publishing a live demo.

# Cliven Macaranas — Portfolia

Responsive cybersecurity portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide. Dark mode by default; no admin interface or public upload endpoint.

## Run locally
Install Node.js 22+ and npm. From this folder:

```sh
npm install
npm run dev
```

Build: `npm run build`. Preview the build: `npm run preview`.

## Update content
Edit **src/portfolio.ts**. All profile, projects, certificates, skills, social links, and education content lives here. General interface labels remain in components.

- Profile: set `name`, `introduction`, `location`, and `email`.
- Photo: the portfolio currently uses `public/assets/cliven-profile.jpg`. Replace that file and keep `photo:'/assets/cliven-profile.jpg'` in the profile configuration to update the portrait.
- Socials: set full HTTPS URLs. Missing links are deliberately non-clickable.
- Resume: add `public/assets/resume.pdf`, set `resume:'/assets/resume.pdf'`. This enables the PDF preview and download/view link.
- Skills: review each category and remove unconfirmed items. Set `confirmed:true` after self-assessment. No skill percentages or invented levels are shown.
- Stack: edit the `stack` array.
- Projects: add entries to `projects`, with unique IDs. Set real `github` and `demo` URLs only when available. Add screenshot paths to `screenshots`. Replace pending contribution, process, and results text with verified details. Cover art is explicitly illustrative, not an actual screenshot. New project IDs use the generic code illustration.
- Certificates: copy any number of PDF, PNG, JPG, or WebP files into `public/assets/` and add objects to `certificates`: `{title, issuer, date, category, file:'/assets/certificate.pdf', topics:[], credentialId?, verification?}`. Valid categories appear in `certificateCategories`. The gallery supports images with zoom and native PDF viewing. This is a repository update workflow, not a visitor upload feature.
- Education: edit `education`. Do not add unverified employers or achievements.
- Labs: templates are in `labs`; extend the report rendering in `src/main.tsx` with actual steps, evidence and lessons when ready.

## Contact delivery
No messages are sent until you configure a real service. Create and verify a Formspree form, copy `.env.example` to `.env`, and set `VITE_CONTACT_ENDPOINT` to its public form endpoint. Enable provider spam protection, recipient verification, and rate limiting. The form includes required/email/length checks and a hidden honeypot; server-side validation and abuse controls must be enabled at the provider. Never put an API secret in a VITE variable. Rebuild after setting the endpoint. A successful response means the provider accepted the request, not a guarantee of inbox delivery. Test with your own address before public use.

## Deployment
### Vercel
Import this repository, select Vite, build `npm run build`, output `dist`. Set the optional VITE_CONTACT_ENDPOINT environment variable and deploy. `vercel.json` provides SPA fallback for the custom 404 screen.
### Netlify
Import the repository, build `npm run build`, publish directory `dist`. Set the optional contact environment variable. `public/_redirects` handles SPA routes.
### Sites
The `.openai/hosting.json` manifest records the linked Site; the deployment uses the Vite static build.

## Accessibility and interactions
Semantic landmarks, skip navigation, native modal dialogs with focus trapping and Escape close, keyboard-operable filters, mobile menu, active-section navigation, reduced-motion support, and Ctrl/Cmd+K quick navigation. Theme preference is the only browser-persisted user state. No analytics or visitor tracking is included.

## Before using for applications
Add a portrait, resume, contact details, verified certificates, actual project screenshots and contributions. Confirm skills. Configure and test contact delivery. Update social metadata in index.html to your final domain. SVG social previews are provided, but some platforms require PNG/JPEG; export public/social.svg to a 1200×630 PNG and update og:image for broad compatibility. The site is a working portfolio with intentionally incomplete personal content, not a claim of professional experience.

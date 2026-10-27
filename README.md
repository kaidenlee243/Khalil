# Khalil Mirza — Professional Personal Portfolio

A modern, responsive personal portfolio website for **Khalil Mirza (Khalil ur Rehman)**, Data Entry Specialist and Computer Science Student based in Rawalpindi, Punjab, Pakistan.

---

## 📁 Project Structure

```text
├── public/
│   └── Khalil_Mirza_CV.pdf       # Printable and downloadable official CV
├── src/
│   ├── components/
│   │   ├── Navbar.tsx             # Responsive header adhering to 3-zone Top Bar Contract
│   │   ├── Hero.tsx               # Hero introduction, CTA buttons & photo placeholder
│   │   ├── About.tsx              # Professional narrative & clean profile card
│   │   ├── Skills.tsx             # Competencies & documented proficiency ratings
│   │   ├── Experience.tsx         # 7star Digital Marketing Agency experience card
│   │   ├── Education.tsx          # AIOU Intermediate & Matric CS records
│   │   ├── LanguagesAndInterests.tsx # Urdu, English, Punjabi & 4 personal interests
│   │   ├── Projects.tsx           # Future-ready project cards with interactive preview
│   │   ├── Contact.tsx            # Form validation, direct links & transparent delivery
│   │   ├── Footer.tsx             # Quick navigation, dynamic copyright & resources
│   │   ├── CVPreviewModal.tsx     # In-browser CV viewer & printing
│   │   └── SetupGuideModal.tsx    # Interactive guide for photos, CV, form & deployment
│   ├── data/
│   │   └── portfolioData.ts       # Central verified profile data
│   ├── App.tsx                    # Main app container
│   ├── index.css                  # Tailwind styles and custom scrollbar
│   └── main.tsx                   # React root entry
├── index.html                     # SEO metadata, OpenGraph tags & Schema.org JSON-LD
├── metadata.json                  # AI Studio metadata
├── package.json                   # Dependencies and scripts
└── vite.config.ts                 # Vite bundler configuration
```

---

## 🚀 Setup & Local Execution

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000`.

3. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📷 Adding Your Profile Photograph

1. **Immediate Preview (In-Browser):**
   - In the Hero section, click **"Test Your Photo"** on the portrait card to pick an image from your device and preview it in real time.
2. **Permanent In Code:**
   - Save your portrait picture as `public/profile.jpg`.
   - In `src/components/Hero.tsx`, update the state initializer:
     ```tsx
     const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>("/profile.jpg");
     ```

---

## 📄 Updating Your CV PDF

- A valid PDF resume has been pre-generated at `public/Khalil_Mirza_CV.pdf`.
- When you update your resume, export it as a PDF named `Khalil_Mirza_CV.pdf` and drop it into `public/`.
- All "Download My CV" buttons will instantly download your updated document.

---

## ✉️ Connecting the Contact Form to Email Delivery

The contact form includes client-side field validation and a transparent fallback that launches your pre-filled email client (`mailto:`) with one click so no messages are lost.

To connect automatic backend or API email delivery:
- **Option 1: Formspree (Recommended, Free & Fast)**
  1. Register at [formspree.io](https://formspree.io) using `khalilmirza733@gmail.com`.
  2. Create a form endpoint (e.g. `https://formspree.io/f/mqkenobp`).
  3. In `src/components/Contact.tsx`, send the payload via `fetch("https://formspree.io/f/YOUR_ENDPOINT", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) })`.
- **Option 2: EmailJS**
  - Install `@emailjs/browser` and call `emailjs.send()` using your free service ID and template.

---

## 🌐 Deploying to Cloudflare, Vercel, or Netlify

### Deploying to Cloudflare (Wrangler / Cloudflare Pages):
1. **Configured automatically**: `wrangler.json` and `wrangler.toml` are included, mapping static assets to `./dist`.
2. In Cloudflare Dashboard:
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `dist`
   - **Deploy Command**: `npx wrangler deploy` (or `npm run deploy`)
3. When running from terminal:
   ```bash
   npm run deploy
   ```

### Deploying to Vercel:
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import your repo.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`, Output Directory: `dist`.
5. Click **Deploy**.

### Deploying to Netlify:
1. Go to [netlify.com](https://netlify.com) and click **"Add new site" > "Import an existing project"**.
2. Select your GitHub repository.
3. Set Build Command: `npm run build` and Publish Directory: `dist`.
4. Click **Deploy site**.


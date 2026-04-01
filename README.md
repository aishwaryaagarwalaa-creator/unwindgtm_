# Unwind GTM — Website

**Live site:** https://unwindgtm.com  
**Hosted on:** GitHub Pages  
**Domain:** unwindgtm.com

---

## 📁 File Structure

```
unwindgtm/
├── index.html              ← Homepage
├── README.md               ← This file
│
├── data/                   ← ✏️ EDIT THESE to update site content
│   ├── founders.json       ← Founder profiles, bios, images, expertise
│   └── services.json       ← Service descriptions and outcomes
│
├── pages/                  ← Individual site pages
│   ├── about.html          ← About Us / Founder profiles page
│   ├── services.html       ← Services listing page
│   ├── consultation.html   ← Consultation overview page
│   ├── consult-debasish.html   ← Debasish's booking page
│   ├── consult-vaibhav.html    ← Vaibhav's booking page
│   └── consult-aishwarya.html  ← Aishwarya's booking page
│
└── assets/
    ├── css/
    │   └── main.css        ← Global styles (colors, fonts, spacing)
    ├── js/
    │   ├── nav.js          ← Navigation for pages/ directory
    │   └── nav-root.js     ← Navigation for index.html (root)
    └── images/             ← ✏️ ADD FOUNDER PHOTOS HERE
        ├── debasish.jpg
        ├── vaibhav.jpg
        └── aishwarya.jpg
```

---

## ✏️ How to Edit Content

### Update Founder Profiles
Edit `data/founders.json` — each founder has:
- `name`, `role`, `bio` — text fields
- `image` — path to photo in `assets/images/`
- `expertise` — array of skill tags
- `linkedin` — LinkedIn profile URL

### Update Services
Edit `data/services.json` — each service has:
- `title`, `tagline`, `description`
- `outcomes` — bullet points shown on the services page
- `icon` — Unicode symbol

### Add Founder Photos
1. Add a photo named `debasish.jpg` (or `vaibhav.jpg` / `aishwarya.jpg`) to `assets/images/`
2. Recommended: Square or portrait crop, minimum 400×400px
3. The site will automatically display the image everywhere

### Add Calendar Booking Links
In each `pages/consult-*.html` file, find the `<!-- CALENDAR EMBED -->` comment and replace the placeholder `<div>` with your Calendly or Cal.com embed code.

**Calendly example:**
```html
<div class="calendly-inline-widget" 
  data-url="https://calendly.com/YOUR_USERNAME/30min"
  style="min-width:280px;height:700px;">
</div>
<script src="https://assets.calendly.com/assets/external/widget.js"></script>
```

### Change Colors or Fonts
Edit `assets/css/main.css` — all design tokens are at the top in `:root { ... }`.  
Key variables: `--color-primary` (gold), `--color-accent` (teal), `--font-display`, `--font-body`.

---

## 🚀 GitHub Pages Setup

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Set source to **Deploy from branch: main, / (root)**
4. Your site will be live at `https://YOUR_USERNAME.github.io/REPO_NAME`

### Custom Domain (unwindgtm.com)
1. In **Settings → Pages → Custom domain**, enter `unwindgtm.com`
2. In your domain registrar (where you bought unwindgtm.com), add these DNS records:
   ```
   A     @     185.199.108.153
   A     @     185.199.109.153
   A     @     185.199.110.153
   A     @     185.199.111.153
   CNAME www   YOUR_USERNAME.github.io
   ```
3. Enable **Enforce HTTPS** once DNS propagates (up to 48 hours)

---

## 📋 Recommended Next Steps

- [ ] Add founder photos to `assets/images/`
- [ ] Update LinkedIn URLs in `data/founders.json`
- [ ] Set up Calendly (or Cal.com) and embed in consult pages
- [ ] Add Google Analytics or Plausible tracking
- [ ] Configure custom domain DNS records

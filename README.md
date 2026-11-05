# 🚀 Modern Developer Portfolio (React + Tailwind CSS + Vite)

A modern, high-performance personal developer portfolio built with React, Tailwind CSS, Lucide Icons, and Canvas Confetti.

---

## 📁 Folder & File Structure (Clean Architecture)

```text
Portfolio/
├── public/                     # Static assets (favicon, resume.pdf, images)
│   └── vite.svg
├── src/
│   ├── assets/                 # Local images, graphics & media
│   ├── components/             # All modular React components
│   │   ├── common/             # Reusable global components
│   │   │   ├── Navbar.jsx          # Sticky glassmorphism header & mobile menu
│   │   │   ├── Footer.jsx          # Footer with socials & back to top
│   │   │   ├── SectionHeader.jsx   # Standardized section headings
│   │   │   ├── ProjectModal.jsx    # Pop-up dialog with full project details
│   │   │   └── SocialIcons.jsx     # Pixel-perfect SVG brand icons
│   │   ├── sections/           # Individual page sections
│   │   │   ├── Hero.jsx            # Headline, stats, IDE card, quick stack
│   │   │   ├── About.jsx           # Journey, philosophy, education, key facts
│   │   │   ├── Skills.jsx          # Categorized skills with badges & icons
│   │   │   ├── Projects.jsx        # Project gallery with category filters
│   │   │   ├── Experience.jsx      # Work timeline with achievements
│   │   │   ├── Services.jsx        # Capabilities & service offerings
│   │   │   ├── Testimonials.jsx    # Client recommendations & FAQs
│   │   │   └── Contact.jsx         # Interactive form with feedback & confetti
│   │   └── ui/                 # Visual elements
│   │       ├── BackgroundEffect.jsx# Glowing ambient orbs & mesh grid
│   │       └── Toast.jsx           # Floating notification toast
│   ├── context/
│   │   └── ThemeContext.jsx    # Theme state management
│   ├── data/
│   │   └── portfolioData.js    # ⭐ SINGLE SOURCE OF TRUTH (All content here!)
│   ├── styles/
│   │   └── index.css           # Tailwind CSS directives & custom glow utilities
│   ├── App.jsx                 # Main layout assembler
│   └── main.jsx                # Application root entry point
├── index.html                  # HTML entry point with fonts & metadata
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind styling configuration
└── vite.config.js              # Vite build tool configuration
```

---

## ⚡ Quick Start (Run Locally)

1. **Development Server Start Karein:**
   ```bash
   npm run dev
   ```
   Browser me `http://localhost:3000` open ho jayega.

2. **Production Build Banayein:**
   ```bash
   npm run build
   ```

3. **Production Preview Dekhein:**
   ```bash
   npm run preview
   ```

---

## 📝 Apna Content Kaise Update Karein? (Very Easy!)

Aapko kisi bhi JSX component ko touch karne ki zaroorat nahi hai. Saara content ek hi file me centralized hai:
👉 **`src/data/portfolioData.js`**

Open karein: `src/data/portfolioData.js`

### 1. Personal Details Badle:
```javascript
export const personalInfo = {
  name: "Aapka Naam",
  role: "Full Stack Developer / Frontend Engineer",
  tagline: "Aapki punchy headline...",
  location: "New Delhi, India",
  email: "aapka-email@gmail.com",
  phone: "+91 98765 43210",
  resumeUrl: "/resume.pdf", // public folder me resume.pdf daal kar ye link de sakte hain
};
```

### 2. Social Links Badle:
```javascript
export const socialLinks = [
  { name: "GitHub", url: "https://github.com/your-username" },
  { name: "LinkedIn", url: "https://linkedin.com/in/your-profile" },
  ...
];
```

### 3. Projects Add / Edit Karein:
```javascript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    category: "Full Stack", // "Frontend", "Backend", "AI & Tools"
    description: "Short summary...",
    longDescription: "Detailed overview...",
    image: "https://...",
    tags: ["React", "Node.js", "Tailwind CSS"],
    liveUrl: "https://your-live-demo.com",
    githubUrl: "https://github.com/your-repo",
  },
  ...
];
```

### 4. Skills & Experience:
Isi tarah `skillCategories` aur `experience` array me apne skills aur companies add kar sakte hain.

---

## ✨ Features Included
- 🎨 **Modern Cyber-Glass Aesthetics**: Dark mode, glow accents, subtle dot grid pattern.
- 📱 **100% Fully Responsive**: Works smoothly on mobile screens, tablets, and desktops.
- ⚡ **Interactive Filtering**: Filter projects by categories (All, Full Stack, Frontend, Backend, AI & Tools).
- 🔍 **Project Modal Preview**: Click any project to open a high-res dialog with detailed description.
- 🎉 **Confetti Celebration & Toast**: Engaging interactive feedback when sending messages or copying emails.
- 📋 **1-Click Copy Email**: Easy copy button with instant status feedback.
- 🎯 **Clean Code & Modular Components**: Follows industry-standard React conventions.


# 🚀 Vish — Developer Portfolio

A modern, fully responsive animated portfolio built with React.js, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Dark/Light Mode** toggle with localStorage persistence
- **Scroll Progress Indicator** — thin accent bar at the top
- **Typing Effect** — animated role text in Hero
- **Framer Motion Animations** — fade-in, slide-in, hover effects throughout
- **Back to Top** button in Footer
- **Fully Responsive** — mobile, tablet, desktop

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Sticky nav, scroll progress, mobile menu
│   ├── Hero.jsx         # Full-screen hero, typing effect, avatar
│   ├── About.jsx        # Bio, animated skill progress bars
│   ├── Projects.jsx     # Grid layout, filter by category, hover cards
│   ├── Skills.jsx       # Tech stack icons grid
│   ├── Experience.jsx   # Vertical timeline with scroll animations
│   ├── Contact.jsx      # Contact form + social links
│   └── Footer.jsx       # Copyright + back-to-top
├── data/
│   └── portfolio.js     # ✏️  Edit your info, projects, experience here
├── hooks/
│   ├── useTheme.js      # Dark/light mode hook
│   └── useScrollProgress.js  # Scroll % tracker
├── App.js
└── index.css            # Tailwind directives + custom utilities
```

## 🛠 Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start

# 3. Production build
npm run build
```

## 🎨 Customization

All your personal data lives in **`src/data/portfolio.js`**:
- Update `personalInfo` with your name, bio, email, social links
- Add your real projects to `projects[]`
- Update `experience[]` with your work/education history
- Adjust `skills[]` levels as you see fit

## 🎯 Tech Stack

| Tool | Purpose |
|------|---------|
| React.js | UI framework |
| Tailwind CSS v3 | Utility-first styling |
| Framer Motion | Animations |
| React Icons | Icon library |

## 🚀 Deploy

```bash
# Vercel (recommended)
npx vercel --prod

# Netlify
npm run build && netlify deploy --prod --dir=build
```

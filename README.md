# ⌚ CHRONOS — Luxury Watch Store

> A premium e-commerce experience for luxury timepieces, built with React, TypeScript, and Tailwind CSS.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=flat-square&logo=framer&logoColor=white)

---

## ✨ Overview

**CHRONOS** is a fully responsive, visually rich e-commerce storefront designed around the luxury watch market. It features a curated product catalog, smooth animations, a functional shopping cart, a complete checkout flow, and an elegant dark-themed UI that conveys craftsmanship and prestige.

---

## 🚀 Features

- 🏠 **Dynamic Home Page** — Hero, Featured Products, New Arrivals, Best Sellers, Special Offers, Customer Reviews, and Newsletter sections
- 🛍️ **Product Catalog** — Filterable collections page with category, price, and brand filters
- 🔍 **Product Detail Page** — Image gallery, features list, ratings, and add-to-cart functionality
- 🛒 **Shopping Cart** — Persistent cart with quantity control and real-time totals via React Context
- 💳 **Checkout Flow** — Multi-step checkout with shipping, payment, and order summary
- ⭐ **Customer Reviews** — Animated testimonial cards with star ratings
- 📩 **Newsletter Signup** — Email subscription section with feedback state
- 🔗 **About & Contact Pages** — Brand story and contact form
- 🎨 **Custom Design System** — CSS variables for colors, spacing, and typography
- 💫 **Scroll Animations** — Smooth entrance animations via Framer Motion
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- ❌ **Custom 404 Page** — Themed error page with navigation back to home

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev) | UI framework |
| [TypeScript 6](https://www.typescriptlang.org) | Type safety |
| [Vite 8](https://vite.dev) | Build tool & dev server |
| [Tailwind CSS 4](https://tailwindcss.com) | Utility-first styling |
| [Framer Motion 12](https://www.framer.com/motion/) | Animations & transitions |
| [React Router 7](https://reactrouter.com) | Client-side routing |
| [React Icons 5](https://react-icons.github.io/react-icons/) | Icon library |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Home page sections (Hero, FeaturedProducts, etc.)
│   └── shared/          # Reusable components (ProductCard, etc.)
├── context/
│   └── CartContext.tsx  # Global cart state management
├── data/
│   └── mockdata.ts      # Product catalog data
├── hooks/               # Custom React hooks
├── pages/               # Route-level page components
├── routes/              # App routing configuration
├── types/               # Shared TypeScript interfaces
└── index.css            # Global styles & design tokens
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/sadik117/e-commerce-watch-store.git
cd e-commerce-watch-store

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at **http://localhost:5173**

### Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |

---

## 🗺️ Pages & Routes

| Route | Page |
|---|---|
| `/` | Home — full landing experience |
| `/collections` | Product catalog with filters |
| `/product/:id` | Individual product detail |
| `/cart` | Shopping cart |
| `/checkout` | Multi-step checkout |
| `/about` | Brand story |
| `/contact` | Contact form |
| `*` | 404 error page |

---

## 🎨 Design System

The UI is driven by a set of CSS custom properties defined in `index.css`, making it easy to adapt the color palette:

```css
--color-bg           /* Primary background */
--color-surface      /* Card & section surfaces */
--color-border       /* Subtle borders */
--color-gold         /* Accent — brand gold */
--color-text-muted   /* Secondary text */
```

---

## 📦 Deployment

Build the production bundle and deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, etc.):

```bash
npm run build
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Crafted with precision. Built with passion.</p>

# 🎮 Onlycs - Premium CS:GO & CS2 Skin Marketplace

A modern, premium marketplace for CS:GO and CS2 weapon skins built with cutting-edge web technologies. Features a sleek dark theme, animated UI components, and seamless Telegram support integration.

![Onlycs Marketplace](https://img.shields.io/badge/Status-Active-brightgreen) ![Next.js](https://img.shields.io/badge/Next.js-15-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-3.4-cyan)

## ✨ Features

### 🎨 **Modern Design**
- **Premium Dark Theme**: Professional `#06070b` background with gradient accents
- **Animated UI**: Heartbeat search animations, hover effects, and smooth transitions
- **Glass Morphism**: Backdrop blur effects and translucent components
- **Responsive Layout**: Mobile-first design with perfect scaling across devices

### 🔧 **Technical Excellence**
- **Next.js 15**: Latest App Router with Server Components
- **TypeScript**: Full type safety and IntelliSense support
- **Tailwind CSS**: Utility-first styling with custom animations
- **Component Architecture**: Modular, reusable, and maintainable code

### 🎯 **User Experience**
- **Category Cards**: Animated weapon category browsing (AWP, Knives, Rifles, etc.)
- **Smart Search**: Centered search bar with heartbeat animation effects
- **Authentication**: Integrated login status component with Steam support (styled to match UI)
- **Navigation**: Fixed header with About Us and user authentication
- **Persian Welcome**: Main title displays "به Onlycs خوش آمدید" with RTL support

### 📱 **Communication**
- **Telegram Integration**: Primary support channel with animated CTAs
- **Instant Support**: Direct contact via `@onlycsirSupport`
- **Modern Contact Page**: Engaging About Us page focused on Telegram support
- **Persian/Farsi Support**: RTL layout with native Persian translation
- **Multilingual**: Full Persian localization for Persian-speaking users

## 🌐 Internationalization

### 🇮🇷 **Persian (Farsi) Support**
- **RTL Layout**: Complete right-to-left layout support
- **Persian Typography**: Beautiful Vazirmatn Google Font integration
- **Native Translation**: Culturally appropriate Persian content
- **Gaming Terminology**: CS:GO/CS2 terms translated for Persian gamers
- **Telegram Focus**: Persian CTAs encouraging Telegram support contact
- **Main Title**: Hero section displays "به Onlycs خوش آمدید" (Welcome to Onlycs)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/xeunp/onlycs-front.git
cd onlycs-front

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the marketplace.

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Next.js** | React Framework | 15.x |
| **TypeScript** | Type Safety | 5.x |
| **Tailwind CSS** | Styling | 3.4.x |
| **Lucide React** | Icons | Latest |
| **ESLint** | Code Quality | Latest |
| **Google Fonts** | Typography | Vazirmatn, Inter |
| **CSS Animations** | Custom Keyframes | CSS3 |

## 📁 Project Architecture

```
src/
├── app/                    # Next.js 15 App Router
│   ├── layout.tsx         # Root layout with header integration
│   ├── page.tsx           # Homepage with category cards
│   ├── about/             # About Us page with Telegram focus
│   │   └── page.tsx       # Telegram-focused support page
│   └── globals.css        # Global styles & animations
├── components/            # Reusable React components
│   ├── ui/               # Base UI components (buttons, cards, etc.)
│   ├── layout/           # Layout components
│   │   └── Header.tsx    # Navigation with search & auth
│   ├── auth/             # Authentication components
│   │   └── LoginStatus.tsx # Login/profile status component
│   └── items/            # Marketplace item components
├── lib/                  # Utility functions and configs
├── types/                # TypeScript type definitions
└── data/                 # Mock data and static content
```

## 🎨 Design System

### Color Palette
- **Primary Background**: `#06070b` (Deep Dark)
- **Card Gradients**: Blue, Purple, Red, Green, Yellow, Pink variants
- **Text Colors**: White with opacity variations (80%, 70%, 60%)
- **Accent Colors**: Blue/Cyan for Telegram branding

### Animations
- **Heartbeat**: Search bar pulsing effect
- **Hover Transforms**: Scale and rotation effects
- **Gradient Shifts**: Dynamic background transitions
- **Particle Effects**: Floating elements on About page

## 🔗 Key Pages

### 🏠 **Homepage** (`/`)
- Hero section with site introduction
- Animated category cards (AWP, Knives, Rifles, Accessories)
- Responsive grid layout with hover effects

### ℹ️ **About Us** (`/about`)
- Telegram-focused support page
- Animated call-to-action sections
- Modern contact information with `@onlycsirSupport`
- **Persian (RTL) Layout**: Complete Persian translation with right-to-left design
- **Gaming-focused Content**: Persian text tailored for CS:GO/CS2 community
- **Cultural Localization**: Appropriate Persian phrases and gaming terminology

### 🔍 **Navigation**
- Centered search bar with heartbeat animation
- About Us link and authentication status
- Responsive mobile-friendly design

## 📞 Support & Contact

### Primary Support Channel
**Telegram**: [@onlycsirSupport](https://t.me/onlycsirSupport)

- ⚡ Lightning fast responses
- 🎮 Expert CS:GO & CS2 knowledge  
- 🔒 Secure and private conversations
- 🇮🇷 Persian/Farsi support available
- 🌍 24/7 multilingual assistance

### Languages Supported
- **English**: Full marketplace interface
- **Persian (فارسی)**: Complete RTL About Us page with native translations
- **Gaming Terminology**: CS:GO/CS2 terms in both languages

## 🚦 Development Status

### ✅ Completed Features
- [x] Responsive marketplace layout
- [x] Animated category browsing
- [x] Modern search functionality
- [x] Authentication UI components
- [x] Telegram integration & support page
- [x] TypeScript implementation
- [x] Mobile-responsive design
- [x] Custom animations & effects
- [x] Persian (Farsi) RTL support
- [x] Google Fonts integration (Vazirmatn, Inter)
- [x] Multilingual About Us page
- [x] Cultural localization for Persian users

### 🔄 In Progress
- [ ] Backend API integration
- [ ] Real authentication system
- [ ] Steam API connection
- [ ] Item management system

## 📄 Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint checks
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Deploy to Vercel
vercel --prod
```

### Manual Deployment
```bash
# Build for production
npm run build

# Start production server
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary software. All rights reserved.

## 🔗 Links

- **Live Demo**: [Coming Soon]
- **GitHub**: [https://github.com/xeunp/onlycs-front](https://github.com/xeunp/onlycs-front)
- **Support**: [@onlycsirSupport](https://t.me/onlycsirSupport)

---

Built with ❤️ for the CS:GO & CS2 community

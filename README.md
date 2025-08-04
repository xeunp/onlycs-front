# CS:GO/CS2 Skin Marketplace

A modern, server-side rendered marketplace for CS:GO and CS2 weapon skins built with Next.js 15, TypeScript, and Tailwind CSS.

## 🎮 Features

- **Modern UI**: CS.MONEY-inspired design with rarity-based color coding
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **TypeScript**: Full type safety throughout the application
- **Server-Side Rendering**: SEO-optimized with Next.js App Router
- **Component Architecture**: Modular, reusable components
- **Mock Data**: Complete marketplace data structure for development

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the marketplace.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom CS:GO theme
- **Icons**: Lucide React
- **State Management**: Zustand
- **Data Fetching**: SWR
- **Components**: Custom UI components with class-variance-authority

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── items/             # Item routes
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── layout/           # Layout components
│   ├── items/            # Item-specific components
│   └── common/           # Common components
├── lib/                  # Utilities and configurations
├── types/                # TypeScript type definitions
└── data/                 # Static data and mock APIs
```

## 🎨 Features Implemented

- ✅ Responsive marketplace layout
- ✅ Weapon skin cards with rarity colors
- ✅ Navigation and search functionality
- ✅ TypeScript type definitions
- ✅ Mock data for development
- ✅ CS:GO-themed UI components
- ✅ Server-side rendering

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

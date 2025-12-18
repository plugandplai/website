# plugandpl.ai Website

This is the official website for plugandpl.ai, built with Next.js 15 and TypeScript.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Query (TanStack Query)
- **Theme**: next-themes

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install
# or
bun install
```

### Development

```bash
# Run the development server
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
# Create a production build
npm run build
# or
bun run build
```

### Start Production Server

```bash
# Start the production server
npm start
# or
bun start
```

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── components/        # React components
│   │   ├── layout/       # Layout components (Header, Footer)
│   │   ├── providers/    # Context providers
│   │   └── ui/           # UI components (shadcn/ui)
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── page.tsx          # Home page (Enterprise)
│   ├── white-label/      # White-Label page
│   ├── developers/       # Developers page
│   ├── imprint/          # Imprint page
│   ├── layout.tsx        # Root layout
│   ├── globals.css       # Global styles
│   └── not-found.tsx     # 404 page
├── public/               # Static assets
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Features

- ✅ **SEO Optimized**: Built-in metadata and Open Graph support
- ✅ **Performance**: Optimized with Next.js 15 App Router
- ✅ **Responsive**: Mobile-first design
- ✅ **Dark Mode**: Theme switching with next-themes
- ✅ **Type Safe**: Full TypeScript support
- ✅ **Accessible**: Built with Radix UI primitives

## Pages

- `/` - Enterprise Solutions
- `/white-label` - White-Label Platform
- `/developers` - Developer Resources
- `/imprint` - Legal Imprint

## Migration Notes

This project was migrated from Vite + React Router to Next.js 15:

- Removed i18n setup (previously used react-i18next)
- Migrated from React Router to Next.js App Router
- Updated all components to remove translation dependencies
- Improved SEO with Next.js metadata API
- Enhanced performance with server-side rendering

## License

© 2024 plugandpl.ai. All rights reserved.

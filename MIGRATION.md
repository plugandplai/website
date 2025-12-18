# Migration from Vite to Next.js

## Overview

This document outlines the migration of the plugandpl.ai website from Vite + React Router to Next.js 15 with the App Router.

## Key Changes

### 1. Framework Migration
- **From**: Vite + React + React Router DOM
- **To**: Next.js 15 (App Router)

### 2. Internationalization (i18n)
- **Removed**: react-i18next, i18next, i18next-browser-languagedetector, i18next-http-backend
- **Reason**: Simplified the application by removing language switching functionality
- **Impact**: All content is now in English only

### 3. Routing
- **From**: React Router DOM with client-side routing
- **To**: Next.js App Router with file-based routing
- **Changes**:
  - `/` → Home page (Enterprise)
  - `/white-label` → White-Label page
  - `/developers` → Developers page
  - `/imprint` → Imprint page
  - Language prefixes (`/:lang/...`) removed

### 4. Project Structure

#### Old Structure (Vite)
```
src/
├── App.tsx
├── main.tsx
├── pages/
├── components/
├── i18n/
└── index.css
```

#### New Structure (Next.js)
```
app/
├── layout.tsx
├── page.tsx
├── globals.css
├── components/
│   ├── layout/
│   ├── providers/
│   └── ui/
├── hooks/
├── lib/
├── developers/
│   └── page.tsx
├── white-label/
│   └── page.tsx
└── imprint/
    └── page.tsx
```

### 5. Configuration Files

#### Removed
- `vite.config.ts`
- `index.html`
- `eslint.config.js`
- `tsconfig.app.json`
- `tsconfig.node.json`
- `wrangler.json`
- `src/` directory

#### Added/Updated
- `next.config.ts` - Next.js configuration
- `.eslintrc.json` - Next.js ESLint config
- `tsconfig.json` - Updated for Next.js
- `.gitignore` - Updated for Next.js

### 6. Dependencies

#### Removed
```json
{
  "i18next": "^25.7.2",
  "i18next-browser-languagedetector": "^8.2.0",
  "i18next-http-backend": "^3.0.2",
  "react-i18next": "^16.4.0",
  "react-router-dom": "^6.30.1",
  "@vitejs/plugin-react-swc": "^3.11.0",
  "vite": "^5.4.19"
}
```

#### Added
```json
{
  "next": "^15.1.5",
  "eslint-config-next": "^15.1.5"
}
```

### 7. Component Changes

#### Header Component
- Removed `useTranslation()` hook
- Removed language parameter handling
- Replaced `Link` from react-router-dom with Next.js `Link`
- Replaced `useLocation()` with `usePathname()`
- Updated theme handling to use `next-themes`

#### Footer Component
- Removed `useTranslation()` hook
- Removed language parameter handling
- Replaced `Link` from react-router-dom with Next.js `Link`
- Hardcoded English content

#### Page Components
- All pages converted to Next.js page components
- Removed `useTranslation()` hook from all pages
- Replaced translation keys with hardcoded English content
- Added `"use client"` directive where needed
- Replaced `<img>` with Next.js `<Image>` component where appropriate

### 8. SEO Improvements

#### Metadata API
- Added comprehensive metadata in `app/layout.tsx`
- Configured Open Graph tags
- Added Twitter card metadata
- Configured favicons

#### Performance
- Static page generation for all routes
- Optimized images with Next.js Image component
- Server-side rendering capabilities

## Benefits of Migration

### 1. Performance
- ✅ Improved initial page load with SSR
- ✅ Automatic code splitting
- ✅ Optimized asset loading
- ✅ Better Core Web Vitals

### 2. SEO
- ✅ Server-side rendering for better crawlability
- ✅ Built-in metadata API
- ✅ Automatic sitemap generation capability
- ✅ Better social media preview support

### 3. Developer Experience
- ✅ File-based routing (simpler)
- ✅ Built-in TypeScript support
- ✅ Better error messages
- ✅ Integrated development tools

### 4. Maintenance
- ✅ Removed complex i18n setup
- ✅ Fewer dependencies to manage
- ✅ Cleaner codebase
- ✅ Better long-term support

## Build Output

```
Route (app)                                 Size  First Load JS
┌ ○ /                                    1.08 kB         125 kB
├ ○ /_not-found                            123 B         102 kB
├ ○ /developers                          1.86 kB         119 kB
├ ○ /imprint                               539 B         118 kB
└ ○ /white-label                         1.08 kB         125 kB
+ First Load JS shared by all             102 kB
```

All pages are statically generated (○) for optimal performance.

## Testing Checklist

- [x] Home page (Enterprise) loads correctly
- [x] White-Label page loads correctly
- [x] Developers page loads correctly
- [x] Imprint page loads correctly
- [x] 404 page works
- [x] Header navigation works
- [x] Footer links work
- [x] Theme switching works
- [x] Mobile responsive design
- [x] All images load correctly
- [x] Build completes successfully
- [x] No TypeScript errors
- [x] No linting errors

## Next Steps

1. **Deploy to Production**: Deploy the Next.js application to Vercel or your hosting platform
2. **Set up Analytics**: Add analytics tracking (Google Analytics, Plausible, etc.)
3. **Configure Redirects**: Set up redirects for old language-prefixed URLs if needed
4. **Monitor Performance**: Use Vercel Analytics or similar to monitor Core Web Vitals
5. **Add Sitemap**: Generate and submit sitemap to search engines

## Commands

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start

# Linting
npm run lint
```

## Notes

- All content is now in English only
- Language switching has been removed
- Old language-prefixed URLs will need redirects if you had them indexed
- Consider adding a language selector in the future if needed
- The migration maintains all existing functionality except i18n

## Migration Date

December 18, 2025


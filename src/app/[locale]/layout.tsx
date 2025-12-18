import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/providers/providers";
import { hasLocale } from "next-intl";
import { routing } from "../../i18n/routing";
import { notFound } from "next/navigation";
import {getMessages} from 'next-intl/server';
import {NextIntlClientProvider} from 'next-intl';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "plugandpl.ai - AI Communications Platform",
  description: "Live translations, intelligent voice agents, fully automated chatbots, telephony, WhatsApp, email and more – modular, scalable, and ready to deploy in minutes.",
  metadataBase: new URL("https://plugandpl.ai"),
  openGraph: {
    title: "plugandpl.ai - AI Communications Platform",
    description: "Live translations, intelligent voice agents, fully automated chatbots, telephony, WhatsApp, email and more – modular, scalable, and ready to deploy in minutes.",
    url: "https://plugandpl.ai",
    siteName: "plugandpl.ai",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "plugandpl.ai",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "plugandpl.ai - AI Communications Platform",
    description: "Live translations, intelligent voice agents, fully automated chatbots, telephony, WhatsApp, email and more – modular, scalable, and ready to deploy in minutes.",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export default async function RootLayout({
  children,
  params,
}: Readonly<Props>) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  
  // Get messages for the specific locale
  const messages = await getMessages({locale});
  
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Providers>
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

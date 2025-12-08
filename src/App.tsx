import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams, Outlet, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Index from "./pages/Index";
import WhiteLabel from "./pages/WhiteLabel";
import Developers from "./pages/Developers";
import Imprint from "./pages/Imprint";
import NotFound from "./pages/NotFound";
import { supportedLanguages, SupportedLanguage } from "./i18n";

const queryClient = new QueryClient();

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Component to detect browser language and redirect
const LanguageRedirect = () => {
  const browserLang = navigator.language.split('-')[0];
  const targetLang = supportedLanguages.includes(browserLang as SupportedLanguage) ? browserLang : 'en';
  return <Navigate to={`/${targetLang}/enterprise`} replace />;
};

// Layout component that sets the language based on URL
const LanguageLayout = () => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && supportedLanguages.includes(lang as SupportedLanguage) && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  // If invalid language, redirect to detected language
  if (!lang || !supportedLanguages.includes(lang as SupportedLanguage)) {
    const browserLang = navigator.language.split('-')[0];
    const targetLang = supportedLanguages.includes(browserLang as SupportedLanguage) ? browserLang : 'en';
    return <Navigate to={`/${targetLang}/enterprise`} replace />;
  }

  return <Outlet />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Redirect root to detected language */}
            <Route path="/" element={<LanguageRedirect />} />
            
            {/* Language-prefixed routes */}
            <Route path="/:lang" element={<LanguageLayout />}>
              <Route index element={<Navigate to="enterprise" replace />} />
              <Route path="enterprise" element={<Index />} />
              <Route path="white-label" element={<WhiteLabel />} />
              <Route path="developers" element={<Developers />} />
              <Route path="imprint" element={<Imprint />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

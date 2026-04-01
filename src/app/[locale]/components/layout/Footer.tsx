"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export const Footer = () => {
  const t = useTranslations();
  
  const footerLinks = {
    legal: [
      { labelKey: "footer.links.dataProcessing", path: "/Digital_Tribe_Data_Processing_EN.pdf", isExternal: true },
      { labelKey: "footer.links.processorList", path: "/Digital_Tribe_AVV_EN.pdf", isExternal: true },
      { labelKey: "footer.links.whistleblower", path: "/Digital_Tribe_Whistle_Blowing.pdf", isExternal: true },
      { labelKey: "footer.links.transparency", path: "/Digital_Tribe_Transparency.pdf", isExternal: true },
      { labelKey: "footer.links.codeOfConduct", path: "/Digital_Tribe_Codex.pdf", isExternal: true },
    ],
  };

  return (
    <footer className="border-t border-border/40">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-lg font-semibold text-foreground tracking-tight inline-block hover:opacity-80 smooth-transition">
              plugandpl<span className="text-accent">.ai</span>
            </Link>
          </div>

          {/* Empty spacer column */}
          <div className="hidden md:block" />

          {/* Legal */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.labelKey}>
                  {link.isExternal ? (
                    <a 
                      href={link.path} 
                      className="text-sm text-muted-foreground hover:text-foreground text-smooth underline-smooth"
                    >
                      {t(link.labelKey)}
                    </a>
                  ) : (
                    <Link href={link.path} className="text-sm text-muted-foreground hover:text-foreground text-smooth underline-smooth">
                      {t(link.labelKey)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
          <div className="flex gap-6">
            <Link href="/imprint" className="text-xs text-muted-foreground hover:text-foreground text-smooth underline-smooth">{t('footer.links.imprint')}</Link>
            <a href="/Digital_Tribe_Data_Privacy_EN.pdf" className="text-xs text-muted-foreground hover:text-foreground text-smooth underline-smooth">{t('footer.links.privacy')}</a>
            <a href="/Digital_Tribe_Terms_and_Conditions.pdf" className="text-xs text-muted-foreground hover:text-foreground text-smooth underline-smooth">{t('footer.links.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

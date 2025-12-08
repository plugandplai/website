import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || 'en';

  // Helper to build language-prefixed paths
  const buildPath = (path: string) => `/${currentLang}${path ? `/${path}` : ''}`;
  
  const footerLinks = {
    product: [
      { labelKey: "footer.links.enterprise", path: "enterprise" },
      { labelKey: "footer.links.whiteLabel", path: "white-label" },
      { labelKey: "footer.links.developers", path: "developers" },
    ],
    company: [
      { labelKey: "footer.links.about", path: "#" },
      { labelKey: "footer.links.careers", path: "#" },
      { labelKey: "footer.links.contact", path: "#" },
    ],
    legal: [
      { labelKey: "footer.links.dataProcessing", path: "dataProcessing", isExternal: true },
      { labelKey: "footer.links.processorList", path: "avv", isExternal: true },
      { labelKey: "footer.links.whistleblower", path: "whistleblower", isExternal: true },
      { labelKey: "footer.links.transparency", path: "transparency", isExternal: true },
      { labelKey: "footer.links.codeOfConduct", path: "codex", isExternal: true },
    ],
  };

  return (
    <footer className="border-t border-border/40">
      <div className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to={buildPath('enterprise')} className="text-lg font-semibold text-foreground tracking-tight inline-block hover:opacity-80 smooth-transition">
              plugandpl<span className="text-accent">.ai</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              {t('footer.description')}
            </p>
          </div>

          {/* Empty spacer column */}
          <div className="hidden md:block" />

          {/* Product */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">{t('footer.product')}</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.labelKey}>
                  <Link to={buildPath(link.path)} className="text-sm text-muted-foreground hover:text-foreground text-smooth underline-smooth">
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company - temporarily hidden
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">{t('footer.company')}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.labelKey}>
                  <Link to={link.path.startsWith('#') ? link.path : buildPath(link.path)} className="text-sm text-muted-foreground hover:text-foreground text-smooth underline-smooth">
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          */}

          {/* Legal */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.labelKey}>
                  {link.isExternal ? (
                    <a 
                      href={
                        link.path === 'dataProcessing'
                          ? (currentLang === 'de' ? '/Digital_Tribe_Data_Processing_DE.pdf' : '/Digital_Tribe_Data_Processing_EN.pdf')
                          : link.path === 'avv' 
                          ? (currentLang === 'de' ? '/Digital_Tribe_AVV_DE.pdf' : '/Digital_Tribe_AVV_EN.pdf')
                          : link.path === 'whistleblower'
                          ? '/Digital_Tribe_Whistle_Blowing.pdf'
                          : link.path === 'transparency'
                          ? '/Digital_Tribe_Transparency.pdf'
                          : link.path === 'codex'
                          ? '/Digital_Tribe_Codex.pdf'
                          : '#'
                      } 
                      className="text-sm text-muted-foreground hover:text-foreground text-smooth underline-smooth"
                    >
                      {t(link.labelKey)}
                    </a>
                  ) : (
                    <Link to={link.path.startsWith('#') ? link.path : buildPath(link.path)} className="text-sm text-muted-foreground hover:text-foreground text-smooth underline-smooth">
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
            <Link to={buildPath('imprint')} className="text-xs text-muted-foreground hover:text-foreground text-smooth underline-smooth">{t('footer.links.imprint')}</Link>
            <a href={currentLang === 'de' ? '/Digital_Tribe_Data_Privacy_DE.pdf' : '/Digital_Tribe_Data_Privacy_EN.pdf'} className="text-xs text-muted-foreground hover:text-foreground text-smooth underline-smooth">{t('footer.links.privacy')}</a>
            <a href={currentLang === 'de' ? '/Digital_Tribe_AGB.pdf' : '/Digital_Tribe_Terms_and_Conditions.pdf'} className="text-xs text-muted-foreground hover:text-foreground text-smooth underline-smooth">{t('footer.links.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

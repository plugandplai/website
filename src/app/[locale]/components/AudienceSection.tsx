"use client";

import { ArrowRight, Building2, Palette, Code2 } from "lucide-react";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export const AudienceSection = () => {
  const t = useTranslations();
  
  const audiences = [
    {
      icon: Building2,
      titleKey: "audience.enterprise.title",
      descKey: "audience.enterprise.description",
      href: "/",
    },
    {
      icon: Palette,
      titleKey: "audience.whiteLabel.title",
      descKey: "audience.whiteLabel.description",
      href: "/white-label",
    },
    {
      icon: Code2,
      titleKey: "audience.developers.title",
      descKey: "audience.developers.description",
      href: "/developers",
    },
  ];

  return (
    <section className="section-padding border-t border-border/40">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-4 animate-fade-up" style={{ animationDelay: '0ms' }}>
          {t('audience.title')}
        </h2>
        <p className="text-muted-foreground max-w-xl mb-12 animate-fade-up" style={{ animationDelay: '100ms' }}>
          {t('audience.description')}
        </p>

        <div className="grid md:grid-cols-3 gap-8 stagger-children">
          {audiences.map((audience) => (
            <Link
              key={audience.titleKey}
              href={audience.href}
              className="group block"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/20 bg-smooth">
                <audience.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent icon-smooth" />
              </div>
              <h3 className="font-medium text-foreground mb-1 group-hover:text-accent text-smooth">
                {t(audience.titleKey)}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">{t(audience.descKey)}</p>
              <span className="inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-accent text-smooth">
                {t('audience.learnMore')}
                <ArrowRight className="h-3 w-3 arrow-smooth" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

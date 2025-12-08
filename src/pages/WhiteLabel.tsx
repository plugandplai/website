import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AudienceSection } from "@/components/AudienceSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Globe, Mail, DollarSign, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const features = [
  { icon: Palette, titleKey: "whiteLabel.features.branding.title", descKey: "whiteLabel.features.branding.description" },
  { icon: Globe, titleKey: "whiteLabel.features.pricing.title", descKey: "whiteLabel.features.pricing.description" },
  { icon: Mail, titleKey: "whiteLabel.features.dashboard.title", descKey: "whiteLabel.features.dashboard.description" },
  { icon: DollarSign, titleKey: "whiteLabel.features.support.title", descKey: "whiteLabel.features.support.description" },
];

const WhiteLabel = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-accent text-sm font-medium mb-4 animate-fade-up" style={{ animationDelay: '0ms' }}>{t('whiteLabel.badge')}</p>
            <h1 className="text-4xl md:text-6xl font-medium text-foreground leading-[1.1] tracking-tight mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
              {t('whiteLabel.title')}
              <br />
              <span className="font-serif italic text-muted-foreground">{t('whiteLabel.subtitle')}</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl animate-fade-up" style={{ animationDelay: '200ms' }}>
              {t('whiteLabel.description')}
            </p>
            <div className="animate-fade-up" style={{ animationDelay: '300ms' }}>
              <Button size="lg" variant="accent" className="btn-scale" asChild>
                <a href="mailto:support@plugandpl.ai">
                  {t('whiteLabel.cta')}
                  <ArrowRight className="h-4 w-4 arrow-smooth" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding border-t border-border/40">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4 animate-fade-up" style={{ animationDelay: '0ms' }}>
              {t('whiteLabel.features.title')}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {features.map((feature) => (
              <div key={feature.titleKey} className="glass-card p-6 rounded-xl group hover-lift">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/20 bg-smooth">
                  <feature.icon className="h-6 w-6 text-muted-foreground group-hover:text-accent icon-smooth" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2">{t(feature.titleKey)}</h3>
                <p className="text-sm text-muted-foreground">{t(feature.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="section-padding border-t border-border/40">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="glass-card p-8 rounded-2xl order-2 md:order-1 animate-slide-left" style={{ animationDelay: '0ms' }}>
              <img src="/customer_flowvoice.png" alt="FlowVoice" className="w-full object-contain rounded-xl" />
            </div>
            <div className="order-1 md:order-2 animate-slide-right" style={{ animationDelay: '150ms' }}>
              <p className="text-accent text-sm font-medium mb-4">{t('customerStory.label')}</p>
              <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">{t('whiteLabel.customerStory.title')}</h2>
              <p className="text-muted-foreground mb-8">
                {t('whiteLabel.customerStory.description')}
              </p>
              <ul className="space-y-4 stagger-children">
                {(t('whiteLabel.customerStory.points', { returnObjects: true }) as string[]).map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 icon-smooth" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <AudienceSection />

      {/* CTA */}
      <section className="section-padding border-t border-border/40">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0ms' }}>
            {t('whiteLabel.cta2.title')}
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
            {t('whiteLabel.cta2.description')}
          </p>
          <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
            <Button size="xl" variant="accent" className="btn-scale" asChild>
              <a href="mailto:support@plugandpl.ai">
                {t('whiteLabel.cta2.button')}
                <ArrowRight className="h-4 w-4 arrow-smooth" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhiteLabel;

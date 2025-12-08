import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AudienceSection } from "@/components/AudienceSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Sparkles, Shield, Zap, Server, Lock, MessageSquare, Users, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const enterpriseFeatures = [
  { icon: Palette, titleKey: "enterpriseFeatures.customBranding.title", descKey: "enterpriseFeatures.customBranding.description" },
  { icon: Shield, titleKey: "enterpriseFeatures.enterpriseSecurity.title", descKey: "enterpriseFeatures.enterpriseSecurity.description" },
  { icon: Server, titleKey: "enterpriseFeatures.onPremDeployment.title", descKey: "enterpriseFeatures.onPremDeployment.description" },
  { icon: Lock, titleKey: "enterpriseFeatures.roleBasedAccess.title", descKey: "enterpriseFeatures.roleBasedAccess.description" },
  { icon: MessageSquare, titleKey: "enterpriseFeatures.multiChannel.title", descKey: "enterpriseFeatures.multiChannel.description" },
  { icon: Users, titleKey: "enterpriseFeatures.teamManagement.title", descKey: "enterpriseFeatures.teamManagement.description" },
];

const Index = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Primary gradient orb */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/20 rounded-full blur-[120px] animate-float-slow" />
          
          {/* Secondary gradient orbs */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 animate-float-slow" style={{ animationDelay: '-3s' }} />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2 animate-float-slow" style={{ animationDelay: '-5s' }} />
          
          {/* Subtle grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
          
          {/* Radial gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
          
          {/* Floating geometric shapes */}
          <div className="absolute top-32 left-[15%] w-3 h-3 bg-accent/40 rounded-full animate-float" style={{ animationDelay: '0s' }} />
          <div className="absolute top-48 right-[20%] w-2 h-2 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-64 left-[25%] w-4 h-4 border border-accent/30 rounded-lg animate-float rotate-45" style={{ animationDelay: '2s' }} />
          <div className="absolute top-40 right-[30%] w-2 h-2 border border-accent/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-72 right-[15%] w-3 h-3 bg-accent/20 rounded-sm animate-float rotate-12" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-56 left-[10%] w-5 h-5 border border-accent/20 rounded-full animate-float" style={{ animationDelay: '2.5s' }} />
          
          {/* Decorative lines */}
          <svg className="absolute top-20 left-[5%] w-32 h-32 text-accent/10 animate-float" style={{ animationDelay: '3s' }} viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          </svg>
          <svg className="absolute bottom-40 right-[8%] w-24 h-24 text-accent/10 animate-float" style={{ animationDelay: '1.8s' }} viewBox="0 0 100 100">
            <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="0.5" rx="8" />
          </svg>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-medium text-foreground leading-[1.1] tracking-tight mb-6 animate-fade-up"
              style={{ animationDelay: '100ms' }}
            >
              {t('hero.title')}
              <br />
              <span className="font-serif italic text-muted-foreground">{t('hero.subtitle')}</span>
            </h1>

            <p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up"
              style={{ animationDelay: '200ms' }}
            >
              {t('hero.description')}
            </p>

            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
              style={{ animationDelay: '300ms' }}
            >
              <Button size="lg" variant="accent" className="btn-scale" asChild>
                <a href="mailto:support@plugandpl.ai">
                  {t('hero.cta')}
                  <ArrowRight className="h-4 w-4 arrow-smooth" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="btn-scale">
                {t('hero.explore')}
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div 
            className="mt-20 max-w-5xl mx-auto animate-scale-in"
            style={{ animationDelay: '450ms' }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
              <div className="glass-card p-1 glow animate-pulse-glow">
                <div className="bg-card rounded-xl overflow-hidden">
                  <div className="h-8 bg-secondary/50 flex items-center px-4 gap-2 border-b border-border/30">
                    <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                    <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                    <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                  </div>
                  <div className="p-8 md:p-12">
                    <div className="flex gap-8">
                      <div className="hidden md:flex flex-col gap-3 w-48 stagger-children">
                        <div className="h-8 bg-accent/20 rounded-lg" />
                        <div className="h-6 bg-secondary rounded-lg w-3/4" />
                        <div className="h-6 bg-secondary rounded-lg w-full" />
                        <div className="h-6 bg-secondary rounded-lg w-2/3" />
                      </div>
                      <div className="flex-1 space-y-6 stagger-children">
                        <div className="h-10 bg-secondary rounded-lg w-2/3" />
                        <div className="grid grid-cols-3 gap-4">
                          <div className="h-24 bg-accent/10 rounded-xl border border-accent/20" />
                          <div className="h-24 bg-secondary rounded-xl" />
                          <div className="h-24 bg-secondary rounded-xl" />
                        </div>
                        <div className="h-40 bg-secondary rounded-xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Chat */}
              <div className="absolute -bottom-4 right-4 md:right-12 glass-card p-4 w-56 animate-float">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center animate-pulse-glow">
                    <Sparkles className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-foreground">AI Assistant</div>
                    <div className="text-[10px] text-accent">Online</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-secondary rounded-lg p-2 text-xs text-muted-foreground">
                    How can I help you?
                  </div>
                  <div className="bg-accent text-accent-foreground rounded-lg p-2 text-xs ml-6">
                    Show me pricing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features Section */}
      <section className="section-padding border-t border-border/40">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4 animate-fade-up" style={{ animationDelay: '0ms' }}>
              {t('enterpriseFeatures.title')}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {enterpriseFeatures.map((feature) => (
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

      {/* Customer Story Section */}
      <section className="section-padding border-t border-border/40">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-left" style={{ animationDelay: '0ms' }}>
              <p className="text-accent text-sm font-medium mb-4">{t('customerStory.label')}</p>
              <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">{t('customerStory.trumpf.title')}</h2>
              <p className="text-muted-foreground mb-8">
                {t('customerStory.trumpf.description')}
              </p>
              <ul className="space-y-4 stagger-children">
                {(t('customerStory.trumpf.points', { returnObjects: true }) as string[]).map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 icon-smooth" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-8 rounded-2xl animate-slide-right" style={{ animationDelay: '150ms' }}>
              <img src="/customer_dgki.png" alt="DGKI" className="aspect-video object-contain rounded-xl w-full" />
            </div>
          </div>
        </div>
      </section>

      <AudienceSection />

      {/* CTA Section */}
      <section className="section-padding border-t border-border/40">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-medium text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0ms' }}>
            {t('cta.title')}
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
            {t('cta.description')}
          </p>
          <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
            <Button size="xl" variant="accent" className="btn-scale" asChild>
              <a href="mailto:support@plugandpl.ai">
                {t('cta.button')}
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

export default Index;

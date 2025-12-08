import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AudienceSection } from "@/components/AudienceSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Webhook, Radio, Bot, FileCode, Package, CheckCircle, Zap, Shield, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const components = [
  { icon: FileCode, titleKey: "developers.components.react.title", descKey: "developers.components.react.description" },
  { icon: FileCode, titleKey: "developers.components.vue.title", descKey: "developers.components.vue.description" },
  { icon: Package, titleKey: "developers.components.wordpress.title", descKey: "developers.components.wordpress.description" },
  { icon: Package, titleKey: "developers.components.shopify.title", descKey: "developers.components.shopify.description" },
];

const apiFeatures = [
  { icon: Code2, titleKey: "developers.apiFeatures.sdks.title", descKey: "developers.apiFeatures.sdks.description" },
  { icon: Webhook, titleKey: "developers.apiFeatures.webhooks.title", descKey: "developers.apiFeatures.webhooks.description" },
  { icon: Radio, titleKey: "developers.apiFeatures.streaming.title", descKey: "developers.apiFeatures.streaming.description" },
  { icon: Bot, titleKey: "developers.apiFeatures.multiAgent.title", descKey: "developers.apiFeatures.multiAgent.description" },
];

const Developers = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-accent text-sm font-medium mb-4 animate-fade-up" style={{ animationDelay: '0ms' }}>{t('developers.badge')}</p>
            <h1 className="text-4xl md:text-6xl font-medium text-foreground leading-[1.1] tracking-tight mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
              {t('developers.title')}
              <br />
              <span className="font-serif italic text-muted-foreground">{t('developers.subtitle')}</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl animate-fade-up" style={{ animationDelay: '200ms' }}>
              {t('developers.description')}
            </p>
            <div className="animate-fade-up" style={{ animationDelay: '300ms' }}>
              <Button size="lg" variant="accent" className="btn-scale" asChild>
                <a href="mailto:support@plugandpl.ai">
                  {t('developers.requestAccess')}
                  <ArrowRight className="h-4 w-4 arrow-smooth" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="section-padding border-t border-border/40">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4 animate-fade-up" style={{ animationDelay: '0ms' }}>
              {t('developers.components.title')}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {components.map((item) => (
              <div key={item.titleKey} className="glass-card p-6 rounded-xl group hover-lift">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/20 bg-smooth">
                  <item.icon className="h-6 w-6 text-muted-foreground group-hover:text-accent icon-smooth" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2">{t(item.titleKey)}</h3>
                <p className="text-sm text-muted-foreground">{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="section-padding border-t border-border/40">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-left" style={{ animationDelay: '0ms' }}>
              <p className="text-accent text-sm font-medium mb-4">{t('customerStory.label')}</p>
              <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">{t('developers.customerStory.title')}</h2>
              <p className="text-muted-foreground mb-8">
                {t('developers.customerStory.description')}
              </p>
              <ul className="space-y-4 stagger-children">
                {(t('developers.customerStory.points', { returnObjects: true }) as string[]).map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 icon-smooth" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-8 rounded-2xl animate-slide-right" style={{ animationDelay: '150ms' }}>
              <div className="aspect-video bg-secondary rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* API Features */}
      <section className="section-padding border-t border-border/40">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4 animate-fade-up" style={{ animationDelay: '0ms' }}>
              {t('developers.apiFeatures.title')}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {apiFeatures.map((item) => (
              <div key={item.titleKey} className="glass-card p-6 rounded-xl group hover-lift">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/20 bg-smooth">
                  <item.icon className="h-6 w-6 text-muted-foreground group-hover:text-accent icon-smooth" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2">{t(item.titleKey)}</h3>
                <p className="text-sm text-muted-foreground">{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why teams choose plugandpl.ai Section */}
      <section className="section-padding border-t border-border/40">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-left" style={{ animationDelay: '0ms' }}>
              <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
                {t('developers.whyChoose.title')}
                <br />
                <span className="font-serif italic text-muted-foreground">{t('developers.whyChoose.subtitle')}</span>
              </h2>
              <div className="space-y-6 stagger-children">
                <FeatureItem
                  icon={Zap}
                  title={t('developers.whyChoose.deploy.title')}
                  description={t('developers.whyChoose.deploy.description')}
                />
                <FeatureItem
                  icon={Shield}
                  title={t('developers.whyChoose.security.title')}
                  description={t('developers.whyChoose.security.description')}
                />
                <FeatureItem
                  icon={Sparkles}
                  title={t('developers.whyChoose.models.title')}
                  description={t('developers.whyChoose.models.description')}
                />
              </div>
            </div>
            <div className="glass-card p-8 rounded-2xl animate-slide-right" style={{ animationDelay: '150ms' }}>
              <pre className="text-sm font-mono text-muted-foreground overflow-x-auto">
                <code>{`import { PlugAI } from '@plugandpl/react'

function App() {
  return (
    <PlugAI
      apiKey="pk_..."
      theme="dark"
      position="bottom-right"
    />
  )
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Code Preview */}
      <section className="py-16 border-t border-border/40">
        <div className="container-custom">
          <div className="glass-card overflow-hidden rounded-2xl animate-scale-in glow" style={{ animationDelay: '0ms' }}>
            <div className="h-10 bg-secondary/50 flex items-center px-4 gap-2 border-b border-border/30">
              <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              <span className="text-xs text-muted-foreground ml-4 font-mono">index.tsx</span>
            </div>
            <div className="p-6 bg-card overflow-x-auto">
              <pre className="text-sm font-mono text-muted-foreground">
                <code>{`import { PlugAI } from '@plugandpl/react'

function App() {
  return (
    <PlugAI
      apiKey="your-api-key"
      theme="dark"
      position="bottom-right"
      welcomeMessage="Hi! How can I help?"
      onMessage={(msg) => console.log(msg)}
    />
  )
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <AudienceSection />

      {/* CTA */}
      <section className="section-padding border-t border-border/40">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0ms' }}>
            {t('developers.cta.title')}
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
            {t('developers.cta.description')}
          </p>
          <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
            <Button size="xl" variant="accent" className="btn-scale" asChild>
              <a href="mailto:support@plugandpl.ai">
                {t('developers.cta.button')}
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

const FeatureItem = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="flex gap-4 group">
    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 bg-smooth">
      <Icon className="h-5 w-5 text-accent icon-smooth" />
    </div>
    <div>
      <h3 className="font-medium text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default Developers;

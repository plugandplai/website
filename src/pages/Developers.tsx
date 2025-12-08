import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Webhook, Radio, Bot, FileCode, Package, CheckCircle } from "lucide-react";

const components = [
  { icon: FileCode, title: "React Widget", description: "Drop-in component" },
  { icon: FileCode, title: "Vue Component", description: "Native Vue.js integration" },
  { icon: Package, title: "WordPress Plugin", description: "One-click install" },
  { icon: Package, title: "Shopify Extension", description: "Seamless integration" },
];

const apiFeatures = [
  { icon: Code2, title: "SDKs", description: "JS, Python, Go, and more" },
  { icon: Webhook, title: "Webhooks", description: "Real-time events" },
  { icon: Radio, title: "Streaming API", description: "Instant feedback" },
  { icon: Bot, title: "Multi-Agent", description: "Complex workflows" },
];

const Developers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-accent text-sm font-medium mb-4 animate-fade-up" style={{ animationDelay: '0ms' }}>Developers</p>
            <h1 className="text-4xl md:text-6xl font-medium text-foreground leading-[1.1] tracking-tight mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
              Built for developers
              <br />
              <span className="font-serif italic text-muted-foreground">API, Components & Widgets</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl animate-fade-up" style={{ animationDelay: '200ms' }}>
              Integrate into React, Vue, WordPress, Shopify, and any platform with our powerful APIs.
            </p>
            <div className="animate-fade-up" style={{ animationDelay: '300ms' }}>
              <Button size="lg" variant="accent" className="btn-scale">
                Request API Access
                <ArrowRight className="h-4 w-4 arrow-smooth" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="section-padding border-t border-border/40">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-12 animate-fade-up" style={{ animationDelay: '0ms' }}>
            Pre-built components
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {components.map((item) => (
              <div key={item.title} className="glass-card p-6 rounded-xl group hover-lift">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/20 bg-smooth">
                  <item.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent icon-smooth" />
                </div>
                <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
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
              <p className="text-accent text-sm font-medium mb-4">Customer Story</p>
              <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">Das Programm</h2>
              <p className="text-muted-foreground mb-8">
                SaaS platform that integrated AI agents for automated customer onboarding.
              </p>
              <ul className="space-y-4 stagger-children">
                {[
                  "Custom AI agent in React dashboard",
                  "Webhook integration with CRM",
                  "Real-time streaming responses",
                  "60% reduction in onboarding time",
                ].map((point) => (
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
          <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-12 animate-fade-up" style={{ animationDelay: '0ms' }}>
            API features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {apiFeatures.map((item) => (
              <div key={item.title} className="group">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/20 bg-smooth">
                  <item.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent icon-smooth" />
                </div>
                <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
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

      {/* CTA */}
      <section className="section-padding border-t border-border/40">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0ms' }}>
            Request API access
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
            Get started with our developer platform and build amazing AI experiences.
          </p>
          <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
            <Button size="xl" variant="accent" className="btn-scale">
              Get API Key
              <ArrowRight className="h-4 w-4 arrow-smooth" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Developers;

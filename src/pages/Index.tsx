import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Palette, Code2, Sparkles, Shield, Zap } from "lucide-react";

const Index = () => {
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
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border/50 text-sm text-muted-foreground mb-8 animate-fade-up"
              style={{ animationDelay: '0ms' }}
            >
              <Sparkles className="h-4 w-4 text-accent icon-smooth" />
              <span>AI Communications Platform</span>
            </div>

            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-medium text-foreground leading-[1.1] tracking-tight mb-6 animate-fade-up"
              style={{ animationDelay: '100ms' }}
            >
              Plug & Play AI
              <br />
              <span className="font-serif italic text-muted-foreground">for every business</span>
            </h1>

            <p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up"
              style={{ animationDelay: '200ms' }}
            >
              Deploy intelligent chatbots and AI assistants in minutes. 
              Enterprise-ready. White-label friendly. Developer powered.
            </p>

            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
              style={{ animationDelay: '300ms' }}
            >
              <Button size="lg" variant="accent" className="btn-scale">
                Contact Sales
                <ArrowRight className="h-4 w-4 arrow-smooth" />
              </Button>
              <Button size="lg" variant="outline" className="btn-scale">
                Explore Solutions
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

      {/* Audience Section */}
      <section className="section-padding border-t border-border/40">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4 animate-fade-up" style={{ animationDelay: '0ms' }}>
              Built for your business model
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
              Whether you're an enterprise, agency, or developer — we have the solution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 stagger-children">
            <AudienceCard
              icon={Building2}
              title="Enterprise"
              description="Security-first deployment with custom branding, SSO, and dedicated support."
              href="/enterprise"
            />
            <AudienceCard
              icon={Palette}
              title="White-Label"
              description="Launch your own AI platform with your branding, domain, and pricing."
              href="/white-label"
            />
            <AudienceCard
              icon={Code2}
              title="Developers"
              description="Powerful APIs, SDKs, and components to integrate AI anywhere."
              href="/developers"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding border-t border-border/40">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-left" style={{ animationDelay: '0ms' }}>
              <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
                Why teams choose
                <br />
                <span className="font-serif italic text-muted-foreground">plugandpl.ai</span>
              </h2>
              <div className="space-y-6 stagger-children">
                <FeatureItem
                  icon={Zap}
                  title="Deploy in minutes"
                  description="Go from zero to production with just a few lines of code."
                />
                <FeatureItem
                  icon={Shield}
                  title="Enterprise security"
                  description="SOC 2 compliant with end-to-end encryption."
                />
                <FeatureItem
                  icon={Sparkles}
                  title="Latest AI models"
                  description="Powered by GPT-4, Claude, and custom fine-tuned models."
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

      {/* CTA Section */}
      <section className="section-padding border-t border-border/40">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-medium text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0ms' }}>
            Ready to get started?
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
            Join hundreds of companies using plugandpl.ai to power their AI communications.
          </p>
          <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
            <Button size="xl" variant="accent" className="btn-scale">
              Contact Sales
              <ArrowRight className="h-4 w-4 arrow-smooth" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const AudienceCard = ({
  icon: Icon,
  title,
  description,
  href,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}) => (
  <Link
    to={href}
    className="group glass-card p-8 hover-lift block"
  >
    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/20 bg-smooth">
      <Icon className="h-6 w-6 text-muted-foreground group-hover:text-accent icon-smooth" />
    </div>
    <h3 className="text-xl font-medium text-foreground mb-2 group-hover:text-accent text-smooth">
      {title}
    </h3>
    <p className="text-sm text-muted-foreground mb-4">{description}</p>
    <span className="inline-flex items-center gap-2 text-sm text-muted-foreground group-hover:text-accent text-smooth">
      Learn more
      <ArrowRight className="h-4 w-4 arrow-smooth" />
    </span>
  </Link>
);

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

export default Index;

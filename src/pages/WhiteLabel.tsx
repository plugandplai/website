import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Palette, Globe, Mail, DollarSign, Users, Zap, CheckCircle } from "lucide-react";

const features = [
  { icon: Palette, title: "Your Branding", description: "Logos, colors, and fonts" },
  { icon: Globe, title: "Custom Domain", description: "Host on your own domain" },
  { icon: Mail, title: "Email Setup", description: "Custom templates and sender" },
  { icon: DollarSign, title: "Your Pricing", description: "Set your own pricing" },
  { icon: Users, title: "Unlimited Customers", description: "Scale without limits" },
  { icon: Zap, title: "Quick Launch", description: "Go live in days" },
];

const WhiteLabel = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-accent text-sm font-medium mb-4 animate-fade-up" style={{ animationDelay: '0ms' }}>White-Label</p>
            <h1 className="text-4xl md:text-6xl font-medium text-foreground leading-[1.1] tracking-tight mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
              Launch your own AI chatbot
              <br />
              <span className="font-serif italic text-muted-foreground">in days</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl animate-fade-up" style={{ animationDelay: '200ms' }}>
              Your logo, your domain, your pricing. Sell AI communications to your customers instantly.
            </p>
            <div className="animate-fade-up" style={{ animationDelay: '300ms' }}>
              <Button size="lg" variant="accent" className="btn-scale">
                Contact Sales
                <ArrowRight className="h-4 w-4 arrow-smooth" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding border-t border-border/40">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-12 animate-fade-up" style={{ animationDelay: '0ms' }}>
            Everything you need to launch
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {features.map((feature) => (
              <div key={feature.title} className="group">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/20 bg-smooth">
                  <feature.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent icon-smooth" />
                </div>
                <h3 className="font-medium text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
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
              <div className="aspect-video bg-secondary rounded-xl" />
            </div>
            <div className="order-1 md:order-2 animate-slide-right" style={{ animationDelay: '150ms' }}>
              <p className="text-accent text-sm font-medium mb-4">Customer Story</p>
              <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">Cows Agency</h2>
              <p className="text-muted-foreground mb-8">
                Digital agency that launched their own AI chatbot product for e-commerce clients.
              </p>
              <ul className="space-y-4 stagger-children">
                {[
                  "Fully branded platform under their domain",
                  "Custom pricing tiers for clients",
                  "White-labeled analytics dashboard",
                  "$50K MRR within 6 months",
                ].map((point) => (
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

      {/* Cross-link */}
      <section className="py-16 border-t border-border/40">
        <div className="container-custom">
          <div className="glass-card p-8 rounded-2xl text-center animate-scale-in" style={{ animationDelay: '0ms' }}>
            <p className="text-muted-foreground mb-4">Need deeper software integration?</p>
            <Button asChild variant="outline" className="btn-scale">
              <Link to="/developers">
                Visit Developer section
                <ArrowRight className="h-4 w-4 arrow-smooth" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-border/40">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0ms' }}>
            Get a white-label demo
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
            See how you can launch your own AI chatbot platform with your branding.
          </p>
          <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
            <Button size="xl" variant="accent" className="btn-scale">
              Request Demo
              <ArrowRight className="h-4 w-4 arrow-smooth" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhiteLabel;

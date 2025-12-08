import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Palette, Server, Lock, MessageSquare, Users, CheckCircle } from "lucide-react";

const features = [
  { icon: Palette, title: "Custom Branding", description: "Your logo, colors, and domain" },
  { icon: Shield, title: "Enterprise Security", description: "SOC 2 compliant, encrypted" },
  { icon: Server, title: "On-Prem Deployment", description: "Private cloud or on-premises" },
  { icon: Lock, title: "Role-Based Access", description: "SSO and granular permissions" },
  { icon: MessageSquare, title: "Multi-Channel", description: "Web, mobile, email, messaging" },
  { icon: Users, title: "Team Management", description: "Multiple teams and workflows" },
];

const Enterprise = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-accent text-sm font-medium mb-4 animate-fade-up" style={{ animationDelay: '0ms' }}>Enterprise</p>
            <h1 className="text-4xl md:text-6xl font-medium text-foreground leading-[1.1] tracking-tight mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
              Your AI communications
              <br />
              <span className="font-serif italic text-muted-foreground">platform</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl animate-fade-up" style={{ animationDelay: '200ms' }}>
              Security-first. Custom deployment. Built to fit your IT requirements and scale across your organization.
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
            Enterprise-grade features
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
            <div className="animate-slide-left" style={{ animationDelay: '0ms' }}>
              <p className="text-accent text-sm font-medium mb-4">Customer Story</p>
              <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">Trumpf</h2>
              <p className="text-muted-foreground mb-8">
                Global industrial machinery leader using AI for customer support across 40+ countries.
              </p>
              <ul className="space-y-4 stagger-children">
                {[
                  "Custom-branded AI assistant",
                  "Integrated with SAP and Salesforce",
                  "45% reduction in support tickets",
                  "99.9% uptime with dedicated support",
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

      {/* CTA */}
      <section className="section-padding border-t border-border/40">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0ms' }}>
            Talk to our enterprise team
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
            Get a personalized demo and learn how we can transform your communications.
          </p>
          <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
            <Button size="xl" variant="accent" className="btn-scale">
              Schedule a Call
              <ArrowRight className="h-4 w-4 arrow-smooth" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Enterprise;

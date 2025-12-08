import { Link } from "react-router-dom";

const footerLinks = {
  product: [
    { label: "Enterprise", href: "/enterprise" },
    { label: "White-Label", href: "/white-label" },
    { label: "Developers", href: "/developers" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  resources: [
    { label: "Docs", href: "#" },
    { label: "API", href: "#" },
    { label: "Blog", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="border-t border-border/40">
      <div className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-lg font-semibold text-foreground tracking-tight inline-block hover:opacity-80 smooth-transition">
              plugandpl<span className="text-accent">.ai</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              AI communications for every business.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground text-smooth underline-smooth">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground text-smooth underline-smooth">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground text-smooth underline-smooth">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} plugandpl.ai
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground text-smooth underline-smooth">Privacy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground text-smooth underline-smooth">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

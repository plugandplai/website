import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useTranslation } from "react-i18next";

const Imprint = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-medium text-foreground leading-[1.1] tracking-tight mb-6 animate-fade-up" style={{ animationDelay: '0ms' }}>
              {t('imprint.title')}
            </h1>
            <p className="text-sm text-muted-foreground mb-12 animate-fade-up" style={{ animationDelay: '100ms' }}>
              {t('imprint.lastUpdated')}
            </p>

            <div className="space-y-12 animate-fade-up" style={{ animationDelay: '200ms' }}>
              {/* Provider */}
              <div>
                <h2 className="text-xl font-medium text-foreground mb-4">{t('imprint.provider.title')}</h2>
                <div className="text-muted-foreground space-y-1">
                  <p>Digital Tribe GmbH</p>
                  <p>Alte Landstraße 237</p>
                  <p>22391 Hamburg</p>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-xl font-medium text-foreground mb-4">{t('imprint.contact.title')}</h2>
                <div className="text-muted-foreground">
                  <p>E-Mail: <a href="mailto:support@plugandpl.ai" className="text-accent hover:underline">support@plugandpl.ai</a></p>
                </div>
              </div>

              {/* Register Entry */}
              <div>
                <h2 className="text-xl font-medium text-foreground mb-4">{t('imprint.register.title')}</h2>
                <div className="text-muted-foreground space-y-1">
                  <p>{t('imprint.register.type')}: GmbH</p>
                  <p>{t('imprint.register.location')}: Hamburg</p>
                  <p>{t('imprint.register.founded')}: 2024</p>
                  <p>{t('imprint.register.court')}: Amtsgericht Hamburg</p>
                  <p>{t('imprint.register.number')}: HRB 189572</p>
                  <p>{t('imprint.register.vatId')}: DE452774058</p>
                </div>
              </div>

              {/* Responsible for Content */}
              <div>
                <h2 className="text-xl font-medium text-foreground mb-4">{t('imprint.responsible.title')}</h2>
                <div className="text-muted-foreground">
                  <p>Henning Wagner</p>
                </div>
              </div>

              {/* Managing Director */}
              <div>
                <h2 className="text-xl font-medium text-foreground mb-4">{t('imprint.managingDirector.title')}</h2>
                <div className="text-muted-foreground">
                  <p>Henning Wagner</p>
                </div>
              </div>

              {/* Dispute Resolution */}
              <div>
                <h2 className="text-xl font-medium text-foreground mb-4">{t('imprint.dispute.title')}</h2>
                <p className="text-muted-foreground">
                  {t('imprint.dispute.text')}
                </p>
              </div>

              {/* Data Protection */}
              <div>
                <h2 className="text-xl font-medium text-foreground mb-4">{t('imprint.dataProtection.title')}</h2>
                <p className="text-muted-foreground">
                  {t('imprint.dataProtection.text')}
                </p>
              </div>

              {/* Inclusivity Statement */}
              <div>
                <p className="text-sm text-muted-foreground">
                  {t('imprint.inclusivity')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Imprint;

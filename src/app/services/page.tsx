import { Metadata } from "next";
import { Button } from "@/components/Button";
import { ServiceCard } from "@/components/ServiceCard";
import {
  addOns,
  resetMethod,
  services,
  siteConfig,
} from "@/content/site";
import shared from "../shared.module.css";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Deep cleaning, decluttering, reorganisation, move-in and post-renovation resets in Melbourne.",
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Reset Services",
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      areaServed: siteConfig.serviceArea,
      telephone: siteConfig.phone.display,
    },
    serviceType: services.map((service) => service.name),
    areaServed: "Melbourne, Australia",
    description: siteConfig.description,
  };

  return (
    <>
      <section className={`${shared.pageHeader} container`}>
        <div className={shared.pageHeaderGrid}>
          <div>
            <span className="eyebrow">Services</span>
            <h1 className={shared.pageTitle}>
              Deep cleaning, decluttering, and reorganisation that sticks
            </h1>
            <p className={shared.pageSubtitle}>
              Choose the reset that matches your home today. Every service is
              judgment-free, detailed, and designed to restore calm.
            </p>
            <div className={shared.pageActions}>
              <Button href={siteConfig.links.quote}>{siteConfig.ctas.primary}</Button>
              <Button href="/packages" variant="outline">
                See Packages
              </Button>
            </div>
          </div>
          <div className={shared.pageImage}>
            <img src="/images/hero.png" alt="Clean, calm home reset" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={shared.sectionTitle}>
            <span className="eyebrow">Service menu</span>
            <h2>What we can reset for you</h2>
            <p className="kicker">
              Every service includes a clear scope, realistic timing, and optional
              add-ons tailored to your space.
            </p>
          </div>
          <div className={shared.cardGrid}>
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className={shared.sectionTitle}>
            <span className="eyebrow">The Total Reset Method</span>
            <h2>Our four-step signature process</h2>
          </div>
          <div className={`${shared.cardGrid} ${shared.cardGridTwo}`}>
            {resetMethod.map((step) => (
              <div key={step.title} className={shared.infoCard}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={shared.sectionTitle}>
            <span className="eyebrow">Popular add-ons</span>
            <h2>Customise your reset</h2>
          </div>
          <div className={`${shared.cardGrid} ${shared.cardGridThree}`}>
            {addOns.map((addon) => (
              <div key={addon} className={shared.infoCard}>
                <h3>{addon}</h3>
                <p>Available as an add-on during any reset package.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={shared.note}>
            If you’re unsure what you need, send a few photos and we’ll recommend
            the right reset. We also offer a quick 10-minute consult.
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card" style={{ padding: "32px" }}>
            <h2 style={{ fontFamily: "var(--font-heading)", marginBottom: "12px" }}>
              Ready to reset your space?
            </h2>
            <p className="kicker">
              Book your reset today or request a quote in minutes.
            </p>
            <div style={{ marginTop: "20px", display: "flex", gap: "12px" }}>
              <Button href={siteConfig.links.booking}>Book a Reset</Button>
              <Button href={siteConfig.links.quote} variant="outline">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

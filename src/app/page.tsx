import Link from "next/link";
import { Button } from "@/components/Button";
import {
  heroTrustBadges,
  homeAnchorNav,
  homeContactCard,
  packages,
  services,
  siteConfig,
} from "@/content/site";
import styles from "./page.module.css";

export default function HomePage() {
  const featuredServices = services.slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    areaServed: siteConfig.serviceArea,
    url: "https://totalresetservices.com",
    telephone: siteConfig.phone.display,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Melbourne",
      addressCountry: "AU",
    },
  };

  return (
    <>
      {/* Hero and one-page section navigation */}
      <section id="top" className={styles.heroSection}>
        <div className={`${styles.heroLayout} container`}>
          <nav className={styles.anchorNav} aria-label="Home section shortcuts">
            {homeAnchorNav.map((item) => (
              <a key={item.href} href={item.href} className={styles.anchorLink}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className="eyebrow">The Total Reset Method</span>
              <h1 className={styles.heroTitle}>{siteConfig.tagline}</h1>
              <p className={styles.heroSubtitle}>
                Deep cleaning, decluttering, and reorganisation that turns chaos
                into calm. We do not just clean your home. We rebuild the
                systems that keep it calm.
              </p>
              <div className={styles.heroActions}>
                <Button href={siteConfig.links.quote} size="lg">
                  {siteConfig.ctas.primary}
                </Button>
                <Button href="#packages" variant="outline" size="lg">
                  {siteConfig.ctas.secondary}
                </Button>
              </div>
              <ul className={styles.badgeList} aria-label="Trust highlights">
                {heroTrustBadges.map((badge) => (
                  <li key={badge} className={styles.badge}>
                    {badge}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.heroVisual}>
              <img
                src="/images/hero.png"
                alt="Cleaner smiling in a bright home after a reset session"
              />
              <div className={styles.heroVisualCard}>
                <p>120+ homes reset across Melbourne</p>
                <a href={siteConfig.links.googleReviews} target="_blank" rel="noreferrer">
                  Read Google reviews
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="proof" className={`section ${styles.sectionBand}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="eyebrow">Proof You Can Trust</span>
            <h2>Calm outcomes backed by consistent results.</h2>
          </div>
          <div className={styles.proofGrid}>
            <article className={styles.proofCard}>
              <span className={styles.proofValue}>{siteConfig.stats.rating}</span>
              <h3>Average rating</h3>
              <p>Local clients consistently report clarity, calm, and relief.</p>
            </article>
            <article className={styles.proofCard}>
              <span className={styles.proofValue}>{siteConfig.stats.reviewCount}</span>
              <h3>Verified experiences</h3>
              <p>Trusted by homeowners, renters, and families with full schedules.</p>
            </article>
            <article className={styles.proofCard}>
              <span className={styles.proofValue}>Response in 1 day</span>
              <h3>Fast and clear communication</h3>
              <p>
                We confirm scope quickly so you can plan your reset without delay.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="services" className={`section ${styles.sectionSoft}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="eyebrow">Services Snapshot</span>
            <h2>Support built for real homes and real schedules.</h2>
            <p className="kicker">
              Select the reset type that matches your current pressure point and
              we handle the hard part with care.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {featuredServices.map((service) => (
              <article key={service.id} className={styles.serviceCard}>
                <h3>{service.name}</h3>
                <p>{service.summary}</p>
                <ul>
                  {service.includes.slice(0, 2).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <span>{service.time}</span>
              </article>
            ))}
          </div>
          <div className={styles.sectionAction}>
            <Link href="/services" className={styles.textLink}>
              Explore all services
            </Link>
          </div>
        </div>
      </section>

      <section id="packages" className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="eyebrow">Reset Packages</span>
            <h2>Choose the pace that fits your home right now.</h2>
            <p className="kicker">
              Every package includes practical systems and calm-first guidance.
              Start where you are and scale as needed.
            </p>
          </div>
          <div className={styles.packagesGrid}>
            {packages.map((tier, index) => (
              <article
                key={tier.id}
                className={`${styles.packageCard} ${index === 1 ? styles.packageFeatured : ""}`}
              >
                <div className={styles.packageMeta}>
                  <span>{tier.time}</span>
                  <span>{tier.priceFrom}</span>
                </div>
                <h3>{tier.name}</h3>
                <p>{tier.description}</p>
                <ul>
                  {tier.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className={styles.sectionAction}>
            <Button href="/packages">Compare Packages</Button>
          </div>
        </div>
      </section>

      {/* Contact card section with linked CTAs */}
      <section id="contact" className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.contactCard}>
            <div className={styles.contactContent}>
              <span className="eyebrow">{homeContactCard.eyebrow}</span>
              <h2>{homeContactCard.title}</h2>
              <p>{homeContactCard.description}</p>
              <ul className={styles.contactHighlights}>
                {homeContactCard.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className={styles.contactActions}>
                <Button href={homeContactCard.primaryHref} size="lg">
                  {homeContactCard.primaryLabel}
                </Button>
                <Button href={homeContactCard.secondaryHref} variant="outline" size="lg">
                  {homeContactCard.secondaryLabel}
                </Button>
              </div>
              <div className={styles.contactMeta}>
                <a href={`tel:${siteConfig.phone.dial}`}>{siteConfig.phone.display}</a>
                <span aria-hidden="true">•</span>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
            </div>
            <div className={styles.contactPanel}>
              <p>Need a quick answer before booking?</p>
              <a href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer">
                Message us on WhatsApp
              </a>
              <Link href="/how-it-works">See how reset day works</Link>
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

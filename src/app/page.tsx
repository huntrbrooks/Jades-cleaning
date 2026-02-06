import Link from "next/link";
import { Button } from "@/components/Button";
import { PackageCard } from "@/components/PackageCard";
import { ReviewCard } from "@/components/ReviewCard";
import { TrustBadgeStrip } from "@/components/TrustBadgeStrip";
import {
  beforeAfterPreview,
  heroTrustBadges,
  homeSteps,
  packages,
  reviews,
  serviceAreas,
  siteConfig,
  valueProps,
} from "@/content/site";
import styles from "./page.module.css";

export default function HomePage() {
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
      <section className={`${styles.hero} container`}>
        <div className={styles.heroGrid}>
          <div>
            <span className="eyebrow">The Total Reset Method</span>
            <h1>{siteConfig.tagline}</h1>
            <p>
              Deep cleaning, decluttering, and reorganisation that turns chaos
              into calm. We don’t just clean — we restore your space.
            </p>
            <div className={styles.heroActions}>
              <Button href={siteConfig.links.quote} size="lg">
                {siteConfig.ctas.primary}
              </Button>
              <Button href="/packages" variant="outline" size="lg">
                {siteConfig.ctas.secondary}
              </Button>
            </div>
            <TrustBadgeStrip badges={heroTrustBadges} />
          </div>
            <div className={styles.heroImage}>
              <img
                src="/images/hero.png"
                alt="Clean, calm home reset transformation"
              />
            </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.sectionTitle}>
            <span className="eyebrow">The Transformation Promise</span>
            <h2>Clear. Clean. Create. Calm.</h2>
            <p className="kicker">
              We combine deep cleaning, decluttering, and reorganisation so your
              home feels brand new.
            </p>
          </div>
          <div className={styles.valueCards}>
            {valueProps.map((value) => (
              <div key={value.title} className={styles.valueCard}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className={styles.sectionTitle}>
            <span className="eyebrow">Before & After</span>
            <h2>Real resets, real results</h2>
            <p className="kicker">
              A peek at the calm we create in kitchens, wardrobes, garages, and
              whole homes.
            </p>
          </div>
          <div className={styles.previewGrid}>
            {beforeAfterPreview.map((item) => (
              <div key={item.id} className={styles.previewCard}>
                <img src={item.afterImage} alt={`${item.title} after`} />
                <span>{item.category}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "32px" }}>
            <Button href="/before-after" variant="outline">
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.sectionTitle}>
            <span className="eyebrow">Reset Packages</span>
            <h2>Packages that respect your time and energy</h2>
            <p className="kicker">
              Choose the reset that fits your home today — and scale up when you
              need the full transformation.
            </p>
          </div>
          <div className={styles.packagesGrid}>
            {packages.map((tier, index) => (
              <PackageCard key={tier.id} tier={tier} highlight={index === 1} />
            ))}
          </div>
          <div style={{ marginTop: "32px" }}>
            <Button href="/packages">Compare Packages</Button>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className={styles.sectionTitle}>
            <span className="eyebrow">How it works</span>
            <h2>Three simple steps to calm</h2>
          </div>
          <div className={styles.steps}>
            {homeSteps.map((step) => (
              <div key={step.title} className={styles.step}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "24px" }}>
            <Link href="/how-it-works">What to expect on the day →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.sectionTitle}>
            <span className="eyebrow">Social Proof</span>
            <h2>Reviews that capture the reset feeling</h2>
          </div>
          <div className={styles.reviewsRow}>
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div>
              <span className="eyebrow">Meet Jade</span>
              <h2>Judgment-free, calm authority</h2>
              <p className="kicker">
                Jade built Total Reset Services to help overwhelmed people feel
                proud of their homes again. Every reset is personal, respectful,
                and designed to make daily life easier.
              </p>
              <div style={{ marginTop: "24px" }}>
                <Button href="/about" variant="outline">
                  Meet Jade
                </Button>
              </div>
            </div>
            <div className={styles.aboutImage}>
              <img
                src="/images/jade-headshot.png"
                alt="Jade smiling in a bright, clean home"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.sectionTitle}>
            <span className="eyebrow">Service Areas</span>
            <h2>Melbourne resets with local care</h2>
            <p className="kicker">
              We serve inner Melbourne suburbs with flexible scheduling and
              trusted local knowledge.
            </p>
          </div>
          <div className={styles.areaGrid}>
            {serviceAreas.map((area) => (
              <div key={area.area} className={styles.areaCard}>
                <h3>{area.area}</h3>
                <p>{area.blurb}</p>
                <p>
                  <strong>Suburbs:</strong> {area.suburbs.join(", ")}
                </p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "24px" }}>
            <Button href="/service-areas" variant="outline">
              Check My Area
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.ctaBanner}>
            <div>
              <span className="eyebrow">Ready for your reset?</span>
              <h2>Let’s bring calm back to your home.</h2>
            </div>
            <Button href={siteConfig.links.booking} size="lg">
              Book a Reset
            </Button>
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

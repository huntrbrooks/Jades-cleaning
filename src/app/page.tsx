import Link from "next/link";
import { Button } from "@/components/Button";
import { LeadForm } from "@/components/LeadForm";
import { ReviewCarousel } from "@/components/ReviewCarousel";
import {
  founderData,
  guaranteeData,
  homeSteps,
  homepageValueProps,
  packages,
  promoData,
  referralData,
  reviews,
  serviceAreas,
  serviceForGrid,
  siteConfig,
  statMetrics,
  trustBadges,
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
      {/* ── 1. Hero with Lead Capture Form ───────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`${styles.heroInner} container`}>
          <h1 className={styles.heroTitle}>
            Melbourne&rsquo;s Most Trusted Reset Service
          </h1>
          <p className={styles.heroSubtitle}>
            {siteConfig.description} Book early to reserve yourself a service
            with the best in Melbourne!
          </p>

          <div className={styles.heroTestimonial}>
            <div className={styles.testimonialAvatar}>
              {reviews[0].name.charAt(0)}
            </div>
            <div>
              <p className={styles.testimonialQuote}>
                {reviews[0].quote} -{" "}
                <strong>
                  {reviews[0].name} from {reviews[0].suburb}
                </strong>
              </p>
              <span className={styles.testimonialStars}>★★★★★</span>
            </div>
          </div>

          <LeadForm />

          <ul className={styles.trustRow}>
            {trustBadges.map((badge) => (
              <li key={badge} className={styles.trustBadge}>
                <span className={styles.trustIcon}>✓</span>
                {badge}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 2. About / Not Your Average ──────────────────── */}
      <section className={`section ${styles.aboutSection}`}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <h2 className={styles.aboutTitle}>
                Not your average cleaning company
              </h2>
              <p>
                We were born to reset homes. We&rsquo;re just wired that way.
                There&rsquo;s nothing we love more than walking into a
                cluttered, overwhelming space and transforming it into
                something calm and functional.
              </p>
              <p>
                In fact, we love what we do so much we built a complete reset
                method — combining deep cleaning, decluttering, and
                reorganisation into one seamless service. We know what
                we&rsquo;re doing and we&rsquo;re always looking to improve.
              </p>
              <div className={styles.aboutActions}>
                <Button href="/packages" variant="outline" size="lg">
                  See our pricing
                </Button>
                <Button href={siteConfig.links.booking} size="lg">
                  Book My Reset
                </Button>
              </div>
            </div>
            <div className={styles.aboutImage}>
              <img
                src="/images/hero.png"
                alt="Professional cleaner in a bright, organised home"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Promotional Banner ────────────────────────── */}
      <section className={styles.promoBanner}>
        <div className="container">
          <h2 className={styles.promoTitle}>{promoData.headline}</h2>
          <p className={styles.promoText}>{promoData.description}</p>
          <Button href={promoData.ctaHref} variant="outline" size="lg">
            {promoData.ctaLabel}
          </Button>
        </div>
      </section>

      {/* ── 4. Pricing Cards ─────────────────────────────── */}
      <section className={`section ${styles.pricingSection}`}>
        <div className="container">
          <div className={styles.packagesGrid}>
            {packages.map((tier, index) => (
              <article
                key={tier.id}
                className={`${styles.packageCard} ${index === 1 ? styles.packageFeatured : ""}`}
              >
                {index === 1 && (
                  <span className={styles.popularBadge}>MOST POPULAR</span>
                )}
                <div className={styles.packageIcon}>
                  {index === 0 && "✦"}
                  {index === 1 && "✦✦"}
                  {index === 2 && "✦✦✦"}
                </div>
                <h3 className={styles.packageName}>{tier.name}</h3>
                <p className={styles.packageFrom}>FROM</p>
                <p className={styles.packagePrice}>{tier.priceFrom.replace("From ", "")}</p>
                <Button href={siteConfig.links.booking} size="md">
                  Book Now
                </Button>
                <p className={styles.packageDesc}>{tier.description}</p>
                <ul className={styles.packageFeatures}>
                  {tier.includes.map((item) => (
                    <li key={item}>
                      <span className={styles.checkIcon}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Stats / Metrics ───────────────────────────── */}
      <section className={`section ${styles.statsSection}`}>
        <div className="container">
          <div className={styles.statsGrid}>
            {statMetrics.map((stat) => (
              <article key={stat.label} className={styles.statCard}>
                <span className={styles.statValue}>{stat.value}</span>
                <h3 className={styles.statLabel}>{stat.label}</h3>
                <p>{stat.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Service Area + Referral ───────────────────── */}
      <section className={styles.areaBanner}>
        <div className="container">
          <h2 className={styles.areaTitle}>
            Serving Melbourne&rsquo;s Inner North, East &amp; Bayside
          </h2>
          <p className={styles.areaText}>
            We cover {serviceAreas.map((a) => a.area).join(", ")} and
            surrounding suburbs. Limited spots available — we recommend
            getting in early to secure your preferred time.
          </p>
          <p className={styles.referralHeadline}>
            <strong>{referralData.headline}</strong>
          </p>
          <p className={styles.areaText}>{referralData.description}</p>
          <div className={styles.areaActions}>
            <Button href="/service-areas" variant="outline" size="lg">
              View Service Areas
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* ── 7. Trust Logos ───────────────────────────────── */}
      <section className={`section ${styles.trustLogos}`}>
        <div className="container">
          <p className={styles.trustLogosTitle}>
            <em>As featured on</em>
          </p>
          <div className={styles.logosRow}>
            <span className={styles.logoPlaceholder}>Google ★★★★★</span>
            <span className={styles.logoPlaceholder}>Product Review</span>
            <span className={styles.logoPlaceholder}>Three Best Rated</span>
            <span className={styles.logoPlaceholder}>Local Search</span>
          </div>
        </div>
      </section>

      {/* ── 8. How to Book (3-Step) ──────────────────────── */}
      <section className={styles.howSection}>
        <div className="container">
          <h2 className={styles.howTitle}>
            How to reset your home in under a minute
          </h2>
          <div className={styles.howGrid}>
            {homeSteps.map((step, i) => (
              <article key={step.title} className={styles.howCard}>
                <div className={styles.howNumber}>{i + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Reviews Carousel ──────────────────────────── */}
      <section className={`section ${styles.reviewsSection}`}>
        <div className="container">
          <ReviewCarousel />
        </div>
      </section>

      {/* ── 10. Satisfaction Guarantee ────────────────────── */}
      <section className={styles.guaranteeSection}>
        <div className="container">
          <div className={styles.guaranteeGrid}>
            <div>
              <h2 className={styles.guaranteeTitle}>
                {guaranteeData.headline}
              </h2>
              <p className={styles.guaranteeText}>
                {guaranteeData.description}
              </p>
              <p className={styles.guaranteeNote}>{guaranteeData.note}</p>
            </div>
            <div className={styles.guaranteeBadge}>
              <span className={styles.guaranteePercent}>100%</span>
              <span className={styles.guaranteePledge}>OUR PLEDGE</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. Services Grid ────────────────────────────── */}
      <section className={`section ${styles.servicesGridSection}`}>
        <div className="container">
          <h2 className={styles.servicesGridTitle}>
            A Range Of Reset Services Across Melbourne
          </h2>
          <div className={styles.divider} />
          <div className={styles.servicesGrid}>
            {serviceForGrid.map((service) => (
              <article key={service.id} className={styles.serviceGridCard}>
                <h3 className={styles.serviceGridName}>{service.name}</h3>
                <p>{service.summary}</p>
                <Button href="/services" size="md">
                  Learn More
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. Value Props ──────────────────────────────── */}
      <section className={`section ${styles.valueSection}`}>
        <div className="container">
          <div className={styles.valueGrid}>
            {homepageValueProps.map((prop) => (
              <article key={prop.title} className={styles.valueCard}>
                <h3 className={styles.valueTitle}>{prop.title}</h3>
                <p>{prop.description}</p>
                <Button href={prop.ctaHref} size="md">
                  {prop.ctaLabel}
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 13. Founder Section ──────────────────────────── */}
      <section className={`section ${styles.founderSection}`}>
        <div className="container">
          <div className={styles.founderGrid}>
            <div className={styles.founderImage}>
              <img
                src={founderData.image}
                alt={`${founderData.name}, founder of ${siteConfig.name}`}
              />
            </div>
            <div className={styles.founderContent}>
              <h2 className={styles.founderTitle}>{founderData.heading}</h2>
              {founderData.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
              <Button href="/about" variant="outline" size="lg">
                Read our story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 14. Final CTA Banner ─────────────────────────── */}
      <section className={styles.finalCta}>
        <div className="container">
          <p className={styles.finalCtaText}>
            Melbourne&rsquo;s Premium Home Reset Service
          </p>
          <Button href={siteConfig.links.booking} variant="outline" size="lg">
            Book My Reset
          </Button>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

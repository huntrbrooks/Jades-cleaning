import { Metadata } from "next";
import { Button } from "@/components/Button";
import { PackageCard } from "@/components/PackageCard";
import { addOns, packages, siteConfig } from "@/content/site";
import shared from "../shared.module.css";

export const metadata: Metadata = {
  title: "Packages & Pricing",
  description:
    "Reset packages designed to deliver calm: Mini, Total, and Ultimate resets with transparent ranges.",
};

export default function PackagesPage() {
  return (
    <>
      <section className={`${shared.pageHeader} container`}>
        <div>
          <span className="eyebrow">Packages & Pricing</span>
          <h1 className={shared.pageTitle}>Packages that protect your time</h1>
          <p className={shared.pageSubtitle}>
            Reset packages help you avoid hourly overwhelm. Each tier includes a
            clear scope, real results, and flexible add-ons.
          </p>
          <div className={shared.pageActions}>
            <Button href={siteConfig.links.quote}>{siteConfig.ctas.primary}</Button>
            <Button href={siteConfig.links.consult} variant="outline">
              {siteConfig.ctas.consult}
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={`${shared.cardGrid} ${shared.cardGridThree}`}>
            {packages.map((tier, index) => (
              <PackageCard key={tier.id} tier={tier} highlight={index === 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className={shared.sectionTitle}>
            <span className="eyebrow">Pricing notes</span>
            <h2>How pricing works</h2>
          </div>
          <div className={`${shared.cardGrid} ${shared.cardGridTwo}`}>
            <div className={shared.infoCard}>
              <h3>Ranges, not surprises</h3>
              <p>
                We quote based on size, clutter level, and the type of reset.
                You’ll always know the range before we begin.
              </p>
            </div>
            <div className={shared.infoCard}>
              <h3>Photo or on-site quotes</h3>
              <p>
                Send a few photos or book a quick consult so we can tailor your
                reset package.
              </p>
            </div>
            <div className={shared.infoCard}>
              <h3>Guarantee</h3>
              <p>
                If you’re not happy, we fix it. It’s simple and confident.
              </p>
            </div>
            <div className={shared.infoCard}>
              <h3>Flexible add-ons</h3>
              <ul className={shared.list}>
                {addOns.map((addon) => (
                  <li key={addon}>{addon}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card" style={{ padding: "32px" }}>
            <h2 style={{ fontFamily: "var(--font-heading)", marginBottom: "12px" }}>
              Not sure which package fits?
            </h2>
            <p className="kicker">
              We’ll recommend the best reset based on your space and timeline.
            </p>
            <div style={{ marginTop: "20px", display: "flex", gap: "12px" }}>
              <Button href={siteConfig.links.consult}>Book a Consult</Button>
              <Button href="/contact" variant="outline">
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

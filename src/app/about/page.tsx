import { Metadata } from "next";
import { Button } from "@/components/Button";
import { resetMethod, siteConfig } from "@/content/site";
import shared from "../shared.module.css";

export const metadata: Metadata = {
  title: "About Jade",
  description:
    "Meet Jade and the judgment-free Total Reset Services approach to cleaning, decluttering, and organising.",
};

export default function AboutPage() {
  return (
    <>
      <section className={`${shared.pageHeader} container`}>
        <div className={shared.pageHeaderGrid}>
          <div>
            <span className="eyebrow">About Jade</span>
            <h1 className={shared.pageTitle}>A trusted presence in your home</h1>
            <p className={shared.pageSubtitle}>
              Jade created Total Reset Services to help overwhelmed people feel
              calm, confident, and proud of their homes again. Every reset is
              personal, respectful, and results-focused.
            </p>
            <div className={shared.pageActions}>
              <Button href={siteConfig.links.consult}>{siteConfig.ctas.consult}</Button>
              <Button href={siteConfig.links.quote} variant="outline">
                Request a Quote
              </Button>
            </div>
          </div>
          <div className={shared.pageImage}>
            <img
              src="/images/jade-headshot.png"
              alt="Jade, founder of Total Reset Services"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={shared.sectionTitle}>
            <span className="eyebrow">Philosophy</span>
            <h2>Judgment-free, calm authority</h2>
          </div>
          <div className={shared.split}>
            <div className={shared.infoCard}>
              <h3>Why Jade does resets</h3>
              <p>
                Overwhelm doesn’t happen overnight. Jade specialises in helping
                people feel safe, supported, and fully in control of their space
                again.
              </p>
              <ul className={shared.list}>
                <li>Respectful, private, and discreet service</li>
                <li>Clear scopes and transparent pricing</li>
                <li>Friendly energy with calm authority</li>
              </ul>
            </div>
            <div className={shared.infoCard}>
              <h3>Values you can trust</h3>
              <ul className={shared.list}>
                <li>Trust, reliability, and confidentiality</li>
                <li>Fully insured and safety-focused</li>
                <li>Eco products available on request</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className={shared.sectionTitle}>
            <span className="eyebrow">The Total Reset Method</span>
            <h2>The reset is a full experience</h2>
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
          <div className="card" style={{ padding: "32px" }}>
            <h2 style={{ fontFamily: "var(--font-heading)", marginBottom: "12px" }}>
              Ready to meet Jade?
            </h2>
            <p className="kicker">
              Book a reset consult and we’ll tailor a plan for your home.
            </p>
            <div style={{ marginTop: "20px", display: "flex", gap: "12px" }}>
              <Button href={siteConfig.links.consult}>Book a Reset Consult</Button>
              <Button href="/contact" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

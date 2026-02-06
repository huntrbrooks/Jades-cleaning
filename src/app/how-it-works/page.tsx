import { Metadata } from "next";
import { Button } from "@/components/Button";
import { howItWorksSteps, siteConfig } from "@/content/site";
import shared from "../shared.module.css";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Our step-by-step process to go from chaos to calm with deep cleaning, decluttering, and reorganisation.",
};

export default function HowItWorksPage() {
  return (
    <>
      <section className={`${shared.pageHeader} container`}>
        <div>
          <span className="eyebrow">How it works</span>
          <h1 className={shared.pageTitle}>A reset that feels simple</h1>
          <p className={shared.pageSubtitle}>
            From the first quote to the final walkthrough, we make the experience
            calm, supportive, and crystal clear.
          </p>
          <div className={shared.pageActions}>
            <Button href={siteConfig.links.consult}>{siteConfig.ctas.consult}</Button>
            <Button href={siteConfig.links.quote} variant="outline">
              Request a Quote
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={shared.sectionTitle}>
            <span className="eyebrow">Step by step</span>
            <h2>Your reset journey</h2>
          </div>
          <div className={`${shared.cardGrid} ${shared.cardGridThree}`}>
            {howItWorksSteps.map((step, index) => (
              <div key={step.title} className={shared.infoCard}>
                <span className="badge">Step {index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className={shared.sectionTitle}>
            <span className="eyebrow">Before we arrive</span>
            <h2>What you can do to prepare</h2>
          </div>
          <div className={shared.split}>
            <div className={shared.infoCard}>
              <h3>Quick prep checklist</h3>
              <ul className={shared.list}>
                <li>Share photos or a quick walkthrough video.</li>
                <li>Identify any areas that are off-limits.</li>
                <li>Let us know about pets, access, or parking.</li>
              </ul>
            </div>
            <div className={shared.infoCard}>
              <h3>During the reset</h3>
              <ul className={shared.list}>
                <li>We bring all supplies (eco options on request).</li>
                <li>We check in if decisions are needed.</li>
                <li>You’ll get a walkthrough before we leave.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={shared.sectionTitle}>
            <span className="eyebrow">Policies</span>
            <h2>Payments and cancellations</h2>
          </div>
          <div className={shared.split}>
            <div className={shared.infoCard}>
              <h3>Payment</h3>
              <p>
                We accept card transfer or invoice. Full details are confirmed
                during your consult.
              </p>
            </div>
            <div className={shared.infoCard}>
              <h3>Cancellation policy</h3>
              <p>
                We ask for 24 hours’ notice for changes. We’ll always do our best
                to reschedule.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

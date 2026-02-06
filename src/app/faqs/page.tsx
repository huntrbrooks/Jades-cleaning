import { Metadata } from "next";
import { Button } from "@/components/Button";
import { FaqAccordion } from "@/components/FaqAccordion";
import { faqs, siteConfig } from "@/content/site";
import shared from "../shared.module.css";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to common questions about resets, pricing, timing, and what to expect.",
};

export default function FaqPage() {
  return (
    <>
      <section className={`${shared.pageHeader} container`}>
        <div>
          <span className="eyebrow">FAQs</span>
          <h1 className={shared.pageTitle}>Questions? We’ve got you.</h1>
          <p className={shared.pageSubtitle}>
            We want you to feel confident before we arrive. Here are the most
            common questions about resets.
          </p>
          <div className={shared.pageActions}>
            <Button href={siteConfig.links.consult}>{siteConfig.ctas.consult}</Button>
            <Button href="/contact" variant="outline">
              Ask Another Question
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FaqAccordion faqs={faqs} />
        </div>
      </section>
    </>
  );
}

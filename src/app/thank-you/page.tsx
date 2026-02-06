import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { siteConfig } from "@/content/site";
import shared from "../shared.module.css";

export const metadata: Metadata = {
  title: "Thank You",
};

export default function ThankYouPage() {
  return (
    <section className={`${shared.pageHeader} container`}>
      <div>
        <span className="eyebrow">Thank you</span>
        <h1 className={shared.pageTitle}>We’ve received your request</h1>
        <p className={shared.pageSubtitle}>
          We’ll be in touch shortly to confirm details and recommend the right
          reset.
        </p>
        <div className={`${shared.cardGrid} ${shared.cardGridTwo}`}>
          <div className={shared.infoCard}>
            <h3>Next steps</h3>
            <ul className={shared.list}>
              <li>We’ll respond within 1 business day.</li>
              <li>Have photos ready if you haven’t sent them yet.</li>
              <li>We’ll confirm scope and available dates.</li>
            </ul>
          </div>
          <div className={shared.infoCard}>
            <h3>Stay connected</h3>
            <p>
              Follow along for reset tips, before/after stories, and quick
              routines.
            </p>
            <div style={{ marginTop: "16px" }}>
              <Button href={siteConfig.links.instagram}>Follow on Instagram</Button>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "24px" }}>
          <Link href="/">Return to home →</Link>
        </div>
      </div>
    </section>
  );
}

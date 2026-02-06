import { Metadata } from "next";
import { Button } from "@/components/Button";
import { serviceAreas, siteConfig } from "@/content/site";
import shared from "../shared.module.css";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Local Melbourne reset services across the inner north, inner east, and bayside suburbs.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className={`${shared.pageHeader} container`}>
        <div>
          <span className="eyebrow">Service Areas</span>
          <h1 className={shared.pageTitle}>Local resets across Melbourne</h1>
          <p className={shared.pageSubtitle}>
            We focus on inner Melbourne suburbs so we can deliver fast, flexible,
            and reliable resets.
          </p>
          <div className={shared.pageActions}>
            <Button href={siteConfig.links.quote}>{siteConfig.ctas.primary}</Button>
            <Button href="/contact" variant="outline">
              Check Availability
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={`${shared.cardGrid} ${shared.cardGridThree}`}>
            {serviceAreas.map((area) => (
              <div key={area.area} className={shared.infoCard}>
                <h3>{area.area}</h3>
                <p>{area.blurb}</p>
                <p>
                  <strong>Suburbs:</strong> {area.suburbs.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className={shared.sectionTitle}>
            <span className="eyebrow">Travel notes</span>
            <h2>Outside these areas?</h2>
          </div>
          <div className={shared.note}>
            We can often accommodate nearby suburbs with a small travel fee. Let
            us know your location and we’ll confirm availability quickly.
          </div>
        </div>
      </section>
    </>
  );
}

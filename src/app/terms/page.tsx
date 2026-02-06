import { Metadata } from "next";
import shared from "../shared.module.css";

export const metadata: Metadata = {
  title: "Terms",
};

export default function TermsPage() {
  return (
    <section className={`${shared.pageHeader} container`}>
      <div>
        <span className="eyebrow">Terms</span>
        <h1 className={shared.pageTitle}>Terms & Conditions</h1>
        <p className={shared.pageSubtitle}>
          This is placeholder content. Replace it with your official terms
          before launch.
        </p>
        <div className={shared.infoCard}>
          <h3>Bookings</h3>
          <p>
            Bookings are confirmed in writing and may require a deposit for larger
            resets.
          </p>
          <h3>Cancellations</h3>
          <p>
            Please provide at least 24 hours’ notice for reschedules or
            cancellations.
          </p>
          <h3>Service scope</h3>
          <p>
            We reserve the right to decline work outside the agreed scope, such as
            hazardous materials or specialised remediation.
          </p>
        </div>
      </div>
    </section>
  );
}

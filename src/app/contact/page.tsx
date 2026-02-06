import { Metadata } from "next";
import { Button } from "@/components/Button";
import { siteConfig } from "@/content/site";
import shared from "../shared.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact & Book",
  description:
    "Request a reset quote or book a consult with Total Reset Services in Melbourne.",
};

export default function ContactPage() {
  return (
    <>
      <section className={`${shared.pageHeader} container`}>
        <div>
          <span className="eyebrow">Contact & Book</span>
          <h1 className={shared.pageTitle}>Let’s plan your reset</h1>
          <p className={shared.pageSubtitle}>
            Send a quick estimate request or book a consult slot. We respond fast
            and keep everything judgment-free.
          </p>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.contactGrid}`}>
          <div className={styles.formCard}>
            <h2>Quick estimate request</h2>
            <p className="kicker">
              Share the essentials and we’ll follow up with a tailored quote.
            </p>
            <form className={styles.form} action="/thank-you" method="get">
              <label>
                Name
                <input name="name" type="text" placeholder="Your name" required />
              </label>
              <label>
                Phone
                <input name="phone" type="tel" placeholder="Phone number" required />
              </label>
              <label>
                Email
                <input name="email" type="email" placeholder="Email address" required />
              </label>
              <label>
                Suburb
                <input name="suburb" type="text" placeholder="Your suburb" required />
              </label>
              <label>
                What do you need reset?
                <select name="service" defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="Deep Cleaning">Deep Cleaning</option>
                  <option value="Decluttering">Decluttering</option>
                  <option value="Reorganisation">Reorganisation</option>
                  <option value="Move Reset">Move-in / Move-out</option>
                  <option value="Post Renovation">Post-renovation</option>
                </select>
              </label>
              <label>
                Preferred date window
                <input name="dates" type="text" placeholder="e.g., next week" />
              </label>
              <label>
                Upload photos (optional)
                <input name="photos" type="file" />
              </label>
              <label>
                Anything we should know?
                <textarea
                  name="notes"
                  rows={4}
                  placeholder="Pets, access, parking, or goals"
                />
              </label>
              <Button>{siteConfig.ctas.primary}</Button>
              <p className={styles.formNote}>
                This form is a placeholder. Connect a form provider (e.g.,
                Formspree, TidyCal, or Zapier) before launch.
              </p>
            </form>
          </div>
          <div className={styles.bookingCard}>
            <h2>Book a consult</h2>
            <p className="kicker">
              Prefer to talk first? Book a 10-minute reset consult.
            </p>
            <Button href={siteConfig.links.consult} size="lg">
              {siteConfig.ctas.consult}
            </Button>
            <div className={styles.contactDetails}>
              <h3>Contact details</h3>
              <a href={`tel:${siteConfig.phone.dial}`}>{siteConfig.phone.display}</a>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <a href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp message
              </a>
              <p>{siteConfig.location}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

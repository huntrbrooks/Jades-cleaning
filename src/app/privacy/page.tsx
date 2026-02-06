import { Metadata } from "next";
import shared from "../shared.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <section className={`${shared.pageHeader} container`}>
      <div>
        <span className="eyebrow">Privacy</span>
        <h1 className={shared.pageTitle}>Privacy Policy</h1>
        <p className={shared.pageSubtitle}>
          This is a template privacy policy. Replace this text with your official
          policy before launch.
        </p>
        <div className={shared.infoCard}>
          <h3>What we collect</h3>
          <p>
            We collect the information you submit through our forms, including
            contact details, service preferences, and photos if provided.
          </p>
          <h3>How we use it</h3>
          <p>
            We use your information to provide quotes, schedule services, and
            deliver your reset. We never sell your data.
          </p>
          <h3>Questions</h3>
          <p>Email us at hello@totalresetservices.com.</p>
        </div>
      </div>
    </section>
  );
}

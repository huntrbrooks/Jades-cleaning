import { siteConfig } from "@/content/site";
import styles from "./MobileStickyCTA.module.css";

export function MobileStickyCTA() {
  return (
    <div className={styles.sticky}>
      <a href={`tel:${siteConfig.phone.dial}`}>Call</a>
      <a href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer">
        Text
      </a>
      <a href={siteConfig.links.booking} className={styles.book}>
        Book
      </a>
    </div>
  );
}

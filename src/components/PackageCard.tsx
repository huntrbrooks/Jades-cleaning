import { PackageTier } from "@/content/site";
import styles from "./PackageCard.module.css";

type PackageCardProps = {
  tier: PackageTier;
  highlight?: boolean;
};

export function PackageCard({ tier, highlight = false }: PackageCardProps) {
  return (
    <div className={`${styles.card} ${highlight ? styles.highlight : ""}`}>
      <div className={styles.top}>
        <h3>{tier.name}</h3>
        <span className={styles.price}>{tier.priceFrom}</span>
        <span className={styles.time}>{tier.time}</span>
      </div>
      <p className={styles.description}>{tier.description}</p>
      <div className={styles.section}>
        <h4>Best for</h4>
        <ul>
          {tier.bestFor.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.section}>
        <h4>Includes</h4>
        <ul>
          {tier.includes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

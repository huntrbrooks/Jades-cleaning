import styles from "./TrustBadgeStrip.module.css";

type TrustBadgeStripProps = {
  badges: string[];
};

export function TrustBadgeStrip({ badges }: TrustBadgeStripProps) {
  return (
    <div className={styles.strip}>
      {badges.map((badge) => (
        <span key={badge} className={styles.badge}>
          {badge}
        </span>
      ))}
    </div>
  );
}

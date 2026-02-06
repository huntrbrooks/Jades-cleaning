import { Review } from "@/content/site";
import styles from "./ReviewCard.module.css";

type ReviewCardProps = {
  review: Review;
};

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.stars} aria-label="Five star review">
        ★★★★★
      </div>
      <p className={styles.quote}>“{review.quote}”</p>
      <div className={styles.meta}>
        <span className={styles.name}>{review.name}</span>
        <span className={styles.suburb}>{review.suburb}</span>
      </div>
      <span className={styles.outcome}>{review.outcome}</span>
    </div>
  );
}

import { GalleryItem } from "@/content/site";
import styles from "./GalleryCard.module.css";

type GalleryCardProps = {
  item: GalleryItem;
};

export function GalleryCard({ item }: GalleryCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.images}>
        <div>
          <img src={item.beforeImage} alt={`${item.title} before`} />
          <span>Before</span>
        </div>
        <div>
          <img src={item.afterImage} alt={`${item.title} after`} />
          <span>After</span>
        </div>
      </div>
      <div className={styles.content}>
        <h3>{item.title}</h3>
        <p>{item.summary}</p>
        <div className={styles.meta}>
          <span>{item.time}</span>
          <span>Biggest win: {item.win}</span>
        </div>
      </div>
    </div>
  );
}

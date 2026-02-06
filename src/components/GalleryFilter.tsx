"use client";

import { useMemo, useState } from "react";
import { GalleryItem } from "@/content/site";
import { GalleryCard } from "./GalleryCard";
import styles from "./GalleryFilter.module.css";

type GalleryFilterProps = {
  items: GalleryItem[];
};

export function GalleryFilter({ items }: GalleryFilterProps) {
  const categories = useMemo(() => {
    return Array.from(new Set(items.map((item) => item.category)));
  }, [items]);
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? items
      : items.filter((item) => item.category === active);

  return (
    <div className={styles.wrapper}>
      <div className={styles.filters}>
        {["All", ...categories].map((category) => (
          <button
            key={category}
            type="button"
            className={`${styles.filter} ${
              active === category ? styles.active : ""
            }`}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className={styles.grid}>
        {filtered.map((item) => (
          <GalleryCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

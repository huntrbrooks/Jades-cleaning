"use client";

import { useState } from "react";
import styles from "./BeforeAfterSlider.module.css";

type BeforeAfterSliderProps = {
  beforeImage: string;
  afterImage: string;
  label?: string;
};

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  label = "Before and after",
}: BeforeAfterSliderProps) {
  const [value, setValue] = useState(50);

  return (
    <div className={styles.wrapper} aria-label={label}>
      <div className={styles.imageWrap}>
        <img src={afterImage} alt="After" className={styles.image} />
        <div className={styles.before} style={{ width: `${value}%` }}>
          <img src={beforeImage} alt="Before" className={styles.image} />
        </div>
        <div className={styles.handle} style={{ left: `${value}%` }} />
      </div>
      <input
        className={styles.range}
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
        aria-label="Slide to compare before and after"
      />
    </div>
  );
}

"use client";

import { useRef } from "react";
import { reviews, siteConfig } from "@/content/site";
import styles from "./ReviewCarousel.module.css";

function Stars() {
  return (
    <span className={styles.stars} aria-label="5 stars">
      {"★★★★★"}
    </span>
  );
}

export function ReviewCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(direction: "left" | "right") {
    if (!trackRef.current) return;
    const amount = trackRef.current.offsetWidth * 0.6;
    trackRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.ratingBar}>
          <span className={styles.googleLogo}>Google</span>
          <span className={styles.ratingLabel}>Excellent</span>
          <Stars />
          <span className={styles.ratingText}>
            {siteConfig.stats.rating} | {siteConfig.stats.reviewCount}
          </span>
        </div>
        <a
          href={siteConfig.links.googleReviews}
          target="_blank"
          rel="noreferrer"
          className={styles.writeReview}
        >
          Write a review
        </a>
      </div>
      <div className={styles.carousel}>
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={() => scroll("left")}
          aria-label="Previous reviews"
        >
          &#8249;
        </button>
        <div className={styles.track} ref={trackRef}>
          {reviews.map((review) => (
            <article key={review.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.avatar}>{review.name.charAt(0)}</div>
                <div>
                  <p className={styles.name}>{review.name}</p>
                  <p className={styles.suburb}>{review.suburb}</p>
                </div>
              </div>
              <Stars />
              <p className={styles.quote}>{review.quote}</p>
            </article>
          ))}
        </div>
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={() => scroll("right")}
          aria-label="Next reviews"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}

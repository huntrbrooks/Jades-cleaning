import { Metadata } from "next";
import { Button } from "@/components/Button";
import { ReviewCard } from "@/components/ReviewCard";
import { reviews, siteConfig } from "@/content/site";
import shared from "../shared.module.css";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Featured reviews from Melbourne clients who experienced the Total Reset.",
};

export default function ReviewsPage() {
  return (
    <>
      <section className={`${shared.pageHeader} container`}>
        <div>
          <span className="eyebrow">Reviews</span>
          <h1 className={shared.pageTitle}>Clients who felt the calm</h1>
          <p className={shared.pageSubtitle}>
            We collect real feedback after every reset. Here are some of the
            moments that made the biggest impact.
          </p>
          <div className={shared.pageActions}>
            <Button href={siteConfig.links.booking}>Book a Reset</Button>
            <Button href={siteConfig.links.googleReviews} variant="outline">
              Leave a Review
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={`${shared.cardGrid} ${shared.cardGridThree}`}>
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

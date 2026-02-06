import { Metadata } from "next";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Button } from "@/components/Button";
import { GalleryFilter } from "@/components/GalleryFilter";
import { galleryItems, siteConfig } from "@/content/site";
import shared from "../shared.module.css";

export const metadata: Metadata = {
  title: "Before & After",
  description:
    "Before and after transformations of kitchens, pantries, wardrobes, bathrooms, and whole-home resets.",
};

export default function BeforeAfterPage() {
  const highlight = galleryItems[0];

  return (
    <>
      <section className={`${shared.pageHeader} container`}>
        <div>
          <span className="eyebrow">Before & After</span>
          <h1 className={shared.pageTitle}>Proof that the reset works</h1>
          <p className={shared.pageSubtitle}>
            Each project includes deep cleaning, decluttering, and systems that
            keep the calm going long after we leave.
          </p>
          <div className={shared.pageActions}>
            <Button href={siteConfig.links.quote}>{siteConfig.ctas.primary}</Button>
            <Button href="/packages" variant="outline">
              See Packages
            </Button>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className={shared.sectionTitle}>
            <span className="eyebrow">Featured reset</span>
            <h2>{highlight.title}</h2>
            <p className="kicker">{highlight.summary}</p>
          </div>
          <BeforeAfterSlider
            beforeImage={highlight.beforeImage}
            afterImage={highlight.afterImage}
            label={highlight.title}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={shared.sectionTitle}>
            <span className="eyebrow">Gallery</span>
            <h2>Filter by room or project type</h2>
          </div>
          <GalleryFilter items={galleryItems} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={shared.note}>
            Want to see a gallery tailored to your space? Book a quick consult
            and we’ll share similar resets.
          </div>
        </div>
      </section>
    </>
  );
}

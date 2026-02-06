import { Metadata } from "next";
import Link from "next/link";
import { blogPosts, siteConfig } from "@/content/site";
import { Button } from "@/components/Button";
import shared from "../shared.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Reset tips, decluttering guides, and home organisation strategies.",
};

export default function BlogPage() {
  return (
    <>
      <section className={`${shared.pageHeader} container`}>
        <div>
          <span className="eyebrow">Blog</span>
          <h1 className={shared.pageTitle}>Reset guides and calm routines</h1>
          <p className={shared.pageSubtitle}>
            Practical guidance for keeping your home calm, organised, and easy to
            maintain.
          </p>
          <div className={shared.pageActions}>
            <Button href={siteConfig.links.consult}>{siteConfig.ctas.consult}</Button>
            <Button href="/contact" variant="outline">
              Request a Quote
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.grid}`}>
          {blogPosts.map((post) => (
            <article key={post.slug} className={styles.card}>
              <span className="badge">Reset Tips</span>
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
              <Link href={`/blog/${post.slug}`}>Read article →</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

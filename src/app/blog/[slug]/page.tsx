import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { blogPosts, siteConfig } from "@/content/site";
import shared from "../../shared.module.css";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug);

  return {
    title: post?.title ?? "Blog",
    description: post?.summary ?? siteConfig.description,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    return (
      <section className={`${shared.pageHeader} container`}>
        <div>
          <span className="eyebrow">Blog</span>
          <h1 className={shared.pageTitle}>Post not found</h1>
          <p className={shared.pageSubtitle}>
            We’re still drafting this article. Check back soon.
          </p>
          <div className={shared.pageActions}>
            <Button href="/blog">Back to blog</Button>
            <Link href="/contact">Request a reset →</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`${shared.pageHeader} container`}>
      <div>
        <span className="eyebrow">Reset Tips</span>
        <h1 className={shared.pageTitle}>{post.title}</h1>
        <p className={shared.pageSubtitle}>{post.summary}</p>
        <div className={shared.infoCard}>
          <p>
            This is a placeholder article outline. Use this space to share your
            reset process, checklists, and tips for keeping calm at home.
          </p>
          <ul className={shared.list}>
            <li>Why this reset matters</li>
            <li>Step-by-step checklist</li>
            <li>Common mistakes to avoid</li>
            <li>How to keep it going</li>
          </ul>
          <div style={{ marginTop: "16px" }}>
            <Button href={siteConfig.links.consult}>Book a Consult</Button>
          </div>
        </div>
        <div style={{ marginTop: "24px" }}>
          <Link href="/blog">← Back to blog</Link>
        </div>
      </div>
    </section>
  );
}

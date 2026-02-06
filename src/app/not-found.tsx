import Link from "next/link";
import { Button } from "@/components/Button";
import shared from "./shared.module.css";

export default function NotFound() {
  return (
    <section className={`${shared.pageHeader} container`}>
      <div>
        <span className="eyebrow">404</span>
        <h1 className={shared.pageTitle}>This page has been reset</h1>
        <p className={shared.pageSubtitle}>
          The page you’re looking for doesn’t exist. Let’s get you back to calm.
        </p>
        <div className={shared.pageActions}>
          <Button href="/">Go home</Button>
          <Link href="/contact">Contact us →</Link>
        </div>
      </div>
    </section>
  );
}

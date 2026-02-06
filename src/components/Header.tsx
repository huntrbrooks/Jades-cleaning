import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Button } from "./Button";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.inner} container`}>
        <Link className={styles.logo} href="/">
          <img
            src="/images/logo.png"
            alt={`${siteConfig.name} logo`}
            className={styles.logoImage}
          />
          <span>{siteConfig.name}</span>
        </Link>
        <nav className={styles.nav} aria-label="Main">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={styles.actions}>
          <Button href={siteConfig.links.consult} variant="ghost" size="sm">
            {siteConfig.ctas.consult}
          </Button>
          <Button href={siteConfig.links.booking} size="sm">
            Book a Reset
          </Button>
        </div>
      </div>
    </header>
  );
}

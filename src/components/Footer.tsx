import Link from "next/link";
import { siteConfig } from "@/content/site";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <div className={styles.brand}>
          <div className={styles.logo}>{siteConfig.name}</div>
          <p className={styles.tagline}>{siteConfig.description}</p>
          <div className={styles.contact}>
            <a href={`tel:${siteConfig.phone.dial}`}>{siteConfig.phone.display}</a>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <span>{siteConfig.serviceArea}</span>
          </div>
        </div>
        <div className={styles.links}>
          <div>
            <h4>Explore</h4>
            <ul>
              {siteConfig.footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Social</h4>
            <ul>
              {siteConfig.social.map((item) => (
                <li key={item.href}>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container">
          <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

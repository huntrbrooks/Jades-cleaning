"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Button } from "./Button";
import styles from "./Header.module.css";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`${styles.inner} container`}>
        <Link className={styles.logo} href="/" aria-label="Total Reset Services home">
          <img
            src="/Logo.png"
            alt={`${siteConfig.name} logo`}
            className={styles.logoImage}
          />
        </Link>

        <nav className={styles.nav} aria-label="Main">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href={`tel:${siteConfig.phone.dial}`} className={styles.phoneLink}>
            CALL {siteConfig.phone.display}
          </a>
          <Button href={siteConfig.links.booking} size="sm">
            BOOK NOW
          </Button>
        </div>

        <button
          className={`${styles.burger} ${mobileOpen ? styles.burgerOpen : ""}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {mobileOpen && (
        <div className={styles.mobileMenu} role="dialog" aria-label="Mobile navigation">
          <nav className={styles.mobileNav}>
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.mobileNavLink}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className={styles.mobileActions}>
            <Button href={siteConfig.links.consult} variant="outline" size="lg">
              {siteConfig.ctas.consult}
            </Button>
            <Button href={siteConfig.links.booking} size="lg">
              Book a Reset
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

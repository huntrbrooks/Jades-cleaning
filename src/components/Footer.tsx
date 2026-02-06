import Link from "next/link";
import { serviceAreas, services, siteConfig } from "@/content/site";
import styles from "./Footer.module.css";

export function Footer() {
  const allSuburbs = serviceAreas.flatMap((a) => a.suburbs).slice(0, 10);

  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        {/* Col 1: Brand + contact */}
        <div className={styles.brand}>
          <div className={styles.logo}>{siteConfig.name}</div>
          <p className={styles.tagline}>{siteConfig.description}</p>
          <div className={styles.contact}>
            <p>
              <strong>Phone:</strong>{" "}
              <a href={`tel:${siteConfig.phone.dial}`}>{siteConfig.phone.display}</a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>
            <p>{siteConfig.serviceArea}</p>
          </div>
        </div>

        {/* Col 2: Popular Areas */}
        <div>
          <h4>Popular Areas Served</h4>
          <ul>
            {allSuburbs.map((suburb) => (
              <li key={suburb}>
                <Link href="/service-areas">{suburb}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Service Information */}
        <div>
          <h4>Service Information</h4>
          <ul>
            {services.slice(0, 5).map((service) => (
              <li key={service.id}>
                <Link href="/services">{service.name}</Link>
              </li>
            ))}
            {siteConfig.footerNav.slice(0, 3).map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Social + Quick Links */}
        <div>
          <h4>Connect</h4>
          <ul>
            {siteConfig.social.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <h4 className={styles.secondHeading}>Explore</h4>
          <ul>
            {siteConfig.footerNav.slice(3).map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className={`${styles.bottomInner} container`}>
          <div className={styles.bottomLinks}>
            <Link href="/terms">Terms &amp; Conditions</Link>
            <span aria-hidden="true">|</span>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
          <span>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

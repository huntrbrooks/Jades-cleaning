import Link from "next/link";
import styles from "./Button.module.css";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
}: ButtonProps) {
  const classes = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  if (href) {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    const isSpecial = href.startsWith("mailto:") || href.startsWith("tel:");
    if (!isInternal && !isSpecial) {
      return (
        <a
          className={classes}
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      );
    }

    if (isSpecial) {
      return (
        <a className={classes} href={href}>
          {children}
        </a>
      );
    }

    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type="button">
      {children}
    </button>
  );
}

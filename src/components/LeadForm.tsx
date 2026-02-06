"use client";

import { useState } from "react";
import styles from "./LeadForm.module.css";

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;

    // Redirect to Calendly with prefilled data
    const params = new URLSearchParams({ name, email, a1: phone });
    window.open(
      `https://calendly.com/total-reset-services/reset-consult?${params.toString()}`,
      "_blank",
    );
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={styles.form}>
        <p className={styles.thanks}>
          Thanks! Your booking page has opened. We will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.fields}>
        <input
          type="text"
          name="name"
          placeholder="First name*"
          required
          className={styles.input}
          autoComplete="given-name"
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          required
          className={styles.input}
          autoComplete="email"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone*"
          required
          className={styles.input}
          autoComplete="tel"
        />
      </div>
      <button type="submit" className={styles.submit}>
        Book My Reset
      </button>
    </form>
  );
}

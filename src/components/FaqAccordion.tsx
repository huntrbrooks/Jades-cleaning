import { Faq } from "@/content/site";
import styles from "./FaqAccordion.module.css";

type FaqAccordionProps = {
  faqs: Faq[];
};

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  return (
    <div className={styles.accordion}>
      {faqs.map((faq) => (
        <details key={faq.question} className={styles.item}>
          <summary>{faq.question}</summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

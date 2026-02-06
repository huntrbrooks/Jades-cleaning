import { Service } from "@/content/site";
import styles from "./ServiceCard.module.css";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className={styles.card}>
      <div>
        <h3>{service.name}</h3>
        <p className={styles.summary}>{service.summary}</p>
      </div>
      <div className={styles.meta}>
        <div>
          <h4>Who it’s for</h4>
          <ul>
            {service.forWho.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>What’s included</h4>
          <ul>
            {service.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>What’s not included</h4>
          <ul>
            {service.excludes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Time expectations</h4>
          <p>{service.time}</p>
        </div>
        <div>
          <h4>Add-ons</h4>
          <ul>
            {service.addons.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

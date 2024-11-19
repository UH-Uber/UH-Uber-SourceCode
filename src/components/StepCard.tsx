// src/components/StepCard.tsx
import styles from './StepCard.module.css';

interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

const StepCard = ({ number, title, description }: StepCardProps) => (
  <div className={styles.stepContainer}>
    <div className={styles.number}>{number}</div>
    <div className={styles.content}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  </div>
);

export default StepCard;

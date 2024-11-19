// src/components/StatCard.tsx
import styles from './StatCard.module.css';

interface StatCardProps {
  number: string;
  label: string;
}

const StatCard = ({ number, label }: StatCardProps) => (
  <div className={styles.card}>
    <div className={styles.number}>{number}</div>
    <div className={styles.label}>{label}</div>
  </div>
);

export default StatCard;

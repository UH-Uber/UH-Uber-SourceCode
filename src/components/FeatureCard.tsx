// src/components/FeatureCard.tsx
import { ElementType } from 'react';
import styles from './FeatureCard.module.css';

interface FeatureCardProps {
  icon: ElementType;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <div className={styles.card}>
    <div className={styles.iconWrapper}>
      <Icon className={styles.icon} />
    </div>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
  </div>
);

export default FeatureCard;

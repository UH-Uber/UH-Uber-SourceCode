import React from 'react';
import {
  UserCircle2,
  Car,
  Calendar,
  MapPin,
  Shield,
  CreditCard,
  MessageSquare,
} from 'lucide-react';
import styles from './page.module.css';

export default function HowItWorksPage() {
  const steps = [
    {
      icon: UserCircle2,
      title: 'Create Your Profile',
      description: `Sign up with your UH credentials and set up your profile with your preferences,
        schedule, and verification details.`,
      details: [
        'Use your @hawaii.edu email',
        'Add your profile photo and bio',
        'Set your commute preferences',
        'Complete safety verification',
      ],
    },
    {
      icon: Calendar,
      title: 'Set Your Schedule',
      description:
        'Input your regular commute times or one-time trips to find the perfect ride matches.',
      details: [
        'Add your class schedule',
        'Set recurring commute times',
        'Specify flexibility windows',
        'Update as needed',
      ],
    },
    {
      icon: MapPin,
      title: 'Define Your Route',
      description:
        'Enter your start and end points to find riders along your route.',
      details: [
        'Save favorite locations',
        'Set pickup/dropoff preferences',
        'View suggested routes',
        'Adjust for traffic patterns',
      ],
    },
    {
      icon: Car,
      title: 'Find or Offer Rides',
      description:
        'Browse available rides or post your own to share your commute.',
      details: [
        'Search available rides',
        'Post your own rides',
        'Set seat availability',
        'Specify vehicle details',
      ],
    },
    {
      icon: MessageSquare,
      title: 'Connect & Coordinate',
      description: 'Chat with potential ride matches and confirm trip details.',
      details: [
        'In-app messaging',
        'Confirm pickup times',
        'Share trip updates',
        'Rate your experience',
      ],
    },
    {
      icon: CreditCard,
      title: 'Share Costs',
      description: 'Split travel expenses fairly and easily through the app.',
      details: [
        'Automated cost splitting',
        'Transparent pricing',
        'Multiple payment options',
        'Trip cost estimates',
      ],
    },
  ];

  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>How UH Ride Share Works</h1>
          <p className={styles.heroText}>
            Simple, safe, and efficient campus commuting in six easy steps
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className={styles.stepsSection}>
        <div className={styles.container}>
          {steps.map((step, index) => (
            <div key={step.title} className={styles.stepCard}>
              <div className={styles.stepNumber}>{index + 1}</div>
              <div className={styles.stepIcon}>
                <step.icon size={32} />
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
                <ul className={styles.stepDetails}>
                  {step.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety Note Section */}
      <section className={styles.safetySection}>
        <div className={styles.container}>
          <div className={styles.safetyContent}>
            <Shield className={styles.safetyIcon} />
            <h2 className={styles.safetyTitle}>Your Safety is Our Priority</h2>
            <p className={styles.safetyText}>
              Every ride is backed by our comprehensive safety features,
              including user verification, real-time tracking, and our trusted
              contact system.
            </p>
            <a href="/safety" className={styles.safetyLink}>
              Learn More About Safety Features
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
          <p className={styles.ctaText}>
            Join our growing community of UH Manoa commuters and start sharing
            rides today!
          </p>
          <div className={styles.ctaButtons}>
            <a href="/auth/signup" className={styles.primaryButton}>
              Sign Up Now
            </a>
            <a href="/contact" className={styles.secondaryButton}>
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { Shield, UserCheck, Bell, MapPin, Phone, Clock, Users, Lock } from 'lucide-react';
import styles from './page.module.css';

export default function SafetyPage() {
  const safetyFeatures = [
    {
      icon: UserCheck,
      title: 'User Verification',
      description: 'All users must verify their UH Manoa student status using their .edu email and student ID.',
    },
    {
      icon: Bell,
      title: 'Real-Time Alerts',
      description: 'Instant notifications for ride updates, delays, or changes to keep everyone informed.',
    },
    {
      icon: MapPin,
      title: 'Location Sharing',
      description: 'Optional real-time location sharing during rides with trusted contacts.',
    },
    {
      icon: Phone,
      title: 'Emergency Assistance',
      description: 'One-tap access to emergency services and campus security contacts.',
    },
  ];

  const guidelines = [
    {
      icon: Clock,
      title: 'Punctuality',
      points: [
        'Arrive 5 minutes early to pickup locations',
        'Notify riders of any delays immediately',
        'Wait up to 5 minutes at pickup locations',
      ],
    },
    {
      icon: Users,
      title: 'Communication',
      points: [
        'Use in-app messaging for all communication',
        'Share trip updates proactively',
        'Maintain professional and respectful interaction',
      ],
    },
    {
      icon: Lock,
      title: 'Personal Safety',
      points: [
        'Meet in well-lit, public locations',
        'Share trip details with trusted contacts',
        'Trust your instincts and report concerns',
      ],
    },
  ];

  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Shield className={styles.heroIcon} />
          <h1 className={styles.heroTitle}>Your Safety is Our Priority</h1>
          <p className={styles.heroText}>
            UH Ride Share is built with comprehensive safety features to ensure secure and reliable campus commuting
          </p>
        </div>
      </section>

      {/* Safety Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Safety Features</h2>
          <div className={styles.featuresGrid}>
            {safetyFeatures.map((feature) => (
              <div key={feature.title} className={styles.featureCard}>
                <feature.icon className={styles.featureIcon} />
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Guidelines Section */}
      <section className={styles.guidelinesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Safety Guidelines</h2>
          <div className={styles.guidelinesGrid}>
            {guidelines.map((guideline) => (
              <div key={guideline.title} className={styles.guidelineCard}>
                <guideline.icon className={styles.guidelineIcon} />
                <h3 className={styles.guidelineTitle}>{guideline.title}</h3>
                <ul className={styles.guidelinePoints}>
                  {guideline.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts Section */}
      <section className={styles.emergencySection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Emergency Contacts</h2>
          <div className={styles.emergencyContent}>
            <div className={styles.emergencyCard}>
              <h3>Campus Security</h3>
              <p>Available 24/7</p>
              <a href="tel:808-956-6911" className={styles.emergencyPhone}>(808) 956-6911</a>
            </div>
            <div className={styles.emergencyCard}>
              <h3>Emergency Services</h3>
              <p>Police, Fire, Medical</p>
              <a href="tel:911" className={styles.emergencyPhone}>911</a>
            </div>
            <div className={styles.emergencyCard}>
              <h3>Support Team</h3>
              <p>App-Related Issues</p>
              <a href="mailto:lyonws@hawaii.edu" className={styles.emergencyEmail}>
                lyonws@hawaii.edu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Report Section */}
      <section className={styles.reportSection}>
        <div className={styles.container}>
          <h2 className={styles.reportTitle}>Need to Report an Issue?</h2>
          <p className={styles.reportText}>
            If you experience any safety concerns or incidents, please report them immediately.
            Your safety and security are our top priority.
          </p>
          <div className={styles.reportButtons}>
            <a href="/contact" className={styles.primaryButton}>Contact Support</a>
            <button type="button" className={styles.secondaryButton}>Emergency Services</button>
          </div>
        </div>
      </section>
    </div>
  );
}

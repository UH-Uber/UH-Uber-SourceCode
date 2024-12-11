'use client';

import React from 'react';
import { Car, Users, Leaf, Shield } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import FeatureCard from '@/components/FeatureCard';
import StatCard from '@/components/StatCard';
import StepCard from '@/components/StepCard';
import styles from './page.module.css';

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <div className={styles.pageWrapper}>
      {/* Navigation */}
      <nav className={styles.navigation}>
        <div className={styles.container}>
          <div className={styles.navContent}>
            <div className={styles.logo} />

            {/* Desktop Navigation */}
            <div className={styles.navLinks}>
              <a href="#how-it-works">How It Works</a>
              <a href="#features">Features</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>UH Manoa Ride Share</h1>
            <p className={styles.heroText}>
              Connect with fellow students for sustainable and affordable campus commuting
            </p>
            <div className={styles.buttonContainer}>
              <button type="button" className={styles.primaryButton}>Get Started</button>
              <button type="button" className={styles.secondaryButton}>Learn More</button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>Key Features</h2>
        <div className={styles.featuresGrid}>
          <FeatureCard
            icon={Car}
            title="Easy Ride Matching"
            description="Find and coordinate rides with students sharing similar routes and schedules"
          />
          <FeatureCard
            icon={Users}
            title="Community Building"
            description="Connect with fellow students and build lasting relationships"
          />
          <FeatureCard
            icon={Leaf}
            title="Eco-Friendly"
            description="Reduce your carbon footprint through shared transportation"
          />
          <FeatureCard
            icon={Shield}
            title="Safe & Secure"
            description="Verified university users and safety features for peace of mind"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <StatCard number="500+" label="Active Users" />
          <StatCard number="1,000+" label="Rides Shared" />
          <StatCard number="5,000+" label="Pounds of CO₂ Saved" />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className={styles.stepsSection}>
        <h2 className={styles.sectionTitle}>How It Works</h2>
        <div className={styles.stepsContainer}>
          <StepCard
            number="1"
            title="Create Your Profile"
            description="Sign up with your UH credentials and set your preferences"
          />
          <StepCard
            number="2"
            title="Find or Offer Rides"
            description="Post your commute or search for available rides"
          />
          <StepCard
            number="3"
            title="Connect & Ride"
            description="Coordinate with matches and share your commute"
          />
        </div>
      </section>

      {/* CTA Section */}

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
          <p className={styles.ctaText}>Join our growing community of UH Manoa commuters today!</p>
          {!session && (
          <div className={styles.buttonContainer}>
            <Link href="/auth/signup">
              <button type="button" className={styles.ctaButton}>Sign Up Now</button>
            </Link>
            <Link href="/auth/signin">
              <button type="button" className={styles.ctaButtonSecondary}>Sign In</button>
            </Link>
          </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerBottom}>
            <p>&copy; 2024 UH Manoa Ride Share. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

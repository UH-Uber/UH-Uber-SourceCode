import Link from 'next/link';
import React from 'react';
import RequestForm from '@/components/request-ride/RequestForm';
import { Car, Calendar, Clock, MapPin } from 'lucide-react';
import styles from './page.module.css';

export default function RequestRidePage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Navigation - You might want to make this a shared component */}
      <nav className={styles.navigation}>
        <div className={styles.container}>
          <div className={styles.navContent}>
            <div className={styles.logo} />
            <div className={styles.navLinks}>
              <Link href="/my-ride">My Ride</Link>
              <Link href="/request-ride">Request a Ride</Link>
              <Link href="/find-ride">Find a Ride</Link>
              <Link href="/profile">Account</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.headerSection}>
            <h1 className={styles.pageTitle}>Request a Ride</h1>
            <p className={styles.subtitle}>
              Fill in the details below to request a ride
            </p>
          </div>

          <div className={styles.contentGrid}>
            <div className={styles.formSection}>
              <RequestForm />
            </div>

            <div className={styles.infoSection}>
              <div className={styles.infoCard}>
                <h3>Request Guidelines</h3>
                <ul className={styles.guidelinesList}>
                  <li>
                    <Clock className={styles.icon} />
                    <span>Request at least 24 hours in advance</span>
                  </li>
                  <li>
                    <MapPin className={styles.icon} />
                    <span>Provide accurate pickup/dropoff locations</span>
                  </li>
                  <li>
                    <Calendar className={styles.icon} />
                    <span>Include preferred time and date</span>
                  </li>
                  <li>
                    <Car className={styles.icon} />
                    <span>Mention any special requirements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';
import SearchFilters from '@/components/find-ride/SearchFilters';
import RideCard from '@/components/find-ride/RideCard';
import { Car } from 'lucide-react';
import styles from './page.module.css';

// Temporary dummy data - replace with real data later
const availableRides = [
  {
    id: 1,
    driver: {
      name: 'Sarah Chen',
      rating: 4.8,
      image: '/photosample.jpeg',
    },
    pickup: 'Pearl City',
    dropoff: 'UH Manoa Campus',
    date: '2024-12-02',
    time: '08:30',
    seats: 3,
    price: 5,
    recurring: true,
  },
  {
    id: 2,
    driver: {
      name: 'David Kim',
      rating: 4.9,
      image: '/photosample.jpeg',
    },
    pickup: 'Kapolei',
    dropoff: 'UH Manoa Campus',
    date: '2024-12-02',
    time: '09:00',
    seats: 2,
    price: 7,
    recurring: false,
  },
];

export default function FindRidePage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Navigation */}
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
            <h1 className={styles.pageTitle}>Find a Ride</h1>
            <p className={styles.subtitle}>
              Browse available rides from UH Manoa students
            </p>
          </div>

          <div className={styles.contentGrid}>
            {/* Search Filters Section */}
            <aside className={styles.filtersSection}>
              <SearchFilters />
            </aside>

            {/* Ride Listings Section */}
            <div className={styles.ridesSection}>
              {availableRides.map((ride) => (
                <RideCard key={ride.id} ride={ride} />
              ))}

              {availableRides.length === 0 && (
                <div className={styles.noRides}>
                  <Car size={48} />
                  <h3>No rides available</h3>
                  <p>Try adjusting your filters or request a ride instead</p>
                  <Link href="/request-ride" className={styles.requestButton}>
                    Request a Ride
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

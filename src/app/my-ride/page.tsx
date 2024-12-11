'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import RideDetails from '@/components/my-ride/RideDetails';
import RideActions from '@/components/my-ride/RideActions';
import styles from './page.module.css';

// Dynamically import the map component to avoid SSR issues
const RideMap = dynamic(() => import('@/components/my-ride/RideMap'), {
  ssr: false,
  loading: () => <div className={styles.mapPlaceholder}>Loading map...</div>,
});

export default function MyRidePage() {
  const rideDetails = {
    driver: {
      name: 'Sarah Johnson',
      phone: '(808) 555-5678',
      rating: 4.8,
      image: '/photosample.jpeg',
    },
    vehicle: {
      make: 'Toyota',
      model: 'Camry',
      color: 'Silver',
      licensePlate: 'ABC 123',
      year: '2020',
    },
    ride: {
      pickup: 'UH Mānoa Campus Center',
      destination: 'Ala Moana Center',
      estimatedArrival: '10:45 AM',
      status: 'en-route',
    },
  };

  const handleChangeDestination = () => {
    // Implement destination change logic
    console.log('Changing destination...');
  };

  const handleCancelRide = () => {
    // Implement ride cancellation logic
    console.log('Cancelling ride...');
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Navigation */}
      <nav className={styles.navigation}>
        <div className={styles.container}>
          <div className={styles.navContent}>
            <div className={styles.logo}>
              <Link href="/" className={styles.logoLink} />
            </div>
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
          <div className={styles.rideGrid}>
            {/* Left Column - Map */}
            <div className={styles.mapSection}>
              <RideMap />
            </div>

            {/* Right Column - Ride Details */}
            <div className={styles.detailsSection}>
              <RideDetails
                driver={rideDetails.driver}
                vehicle={rideDetails.vehicle}
                ride={rideDetails.ride}
              />
              <RideActions
                onChangeDestination={handleChangeDestination}
                onCancelRide={handleCancelRide}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

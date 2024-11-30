'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import styles from './page.module.css';
import RideDetails from '@/components/my-ride/RideDetails';
import RideActions from '@/components/my-ride/RideActions';

// Dynamically import the map component to avoid SSR issues
const RideMap = dynamic(() => import('@/components/my-ride/RideMap'), {
  ssr: false,
  loading: () => <div className={styles.mapPlaceholder}>Loading map...</div>
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
      year: '2020'
    },
    ride: {
      pickup: 'UH Mānoa Campus Center',
      destination: 'Ala Moana Center',
      estimatedArrival: '10:45 AM',
      status: 'en-route'
    }
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
'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Calendar, Clock, Users, Repeat, Star } from 'lucide-react';
import styles from './RideCard.module.css';

interface Driver {
  name: string;
  rating: number;
  image: string;
}

interface RideProps {
  ride: {
    id: number;
    driver: Driver;
    pickup: string;
    dropoff: string;
    date: string;
    time: string;
    seats: number;
    price: number;
    recurring: boolean;
  };
}

export default function RideCard({ ride }: RideProps) {
  const formatDate = (dateStr: string) => new Date(dateStr).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });

  const formatTime = (timeStr: string) => new Date(`2000/01/01 ${timeStr}`).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  });

  return (
    <div className={styles.card}>
      <div className={styles.driverInfo}>
        <div className={styles.driverProfile}>
          <Image
            src={ride.driver.image}
            alt={ride.driver.name}
            width={60}
            height={60}
            className={styles.driverImage}
          />
          <div className={styles.driverDetails}>
            <h3>{ride.driver.name}</h3>
            <div className={styles.rating}>
              <Star size={16} className={styles.starIcon} />
              <span>{ride.driver.rating}</span>
            </div>
          </div>
        </div>
        {ride.recurring && (
          <div className={styles.recurringBadge}>
            <Repeat size={14} />
            <span>Recurring</span>
          </div>
        )}
      </div>

      <div className={styles.rideDetails}>
        <div className={styles.locationInfo}>
          <div className={styles.location}>
            <MapPin size={18} />
            <div>
              <label htmlFor="pickup">
                Pickup
                <input id="pickup" type="text" value={ride.pickup} readOnly />
              </label>
              <div className={styles.location}>
                <MapPin size={18} />
                <div>
                  <label htmlFor="dropoff">
                    Dropoff
                    <input id="dropoff" type="text" value={ride.dropoff} readOnly />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.tripInfo}>
          <div className={styles.infoItem}>
            <Calendar size={18} />
            <span>{formatDate(ride.date)}</span>
          </div>
          <div className={styles.infoItem}>
            <Clock size={18} />
            <span>{formatTime(ride.time)}</span>
          </div>
          <div className={styles.infoItem}>
            <Users size={18} />
            <span>
              {ride.seats}
              {' '}
              seats available
            </span>
          </div>
        </div>
      </div>

      <div className={styles.cardFooter}>
        <div className={styles.price}>
          <span className={styles.priceAmount}>
            $
            {ride.price}
          </span>
          <span className={styles.priceLabel}> per person</span>
        </div>
        <button type="button" className={styles.requestButton}>
          Request Ride
        </button>
      </div>
    </div>
  );
}

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Car, MapPin, Clock } from 'lucide-react';
import styles from '../../app/my-ride/page.module.css';

interface Driver {
  name: string;
  phone: string;
  rating: number;
  image: string;
}

interface Vehicle {
  make: string;
  model: string;
  color: string;
  licensePlate: string;
  year: string;
}

interface RideInfo {
  pickup: string;
  destination: string;
  estimatedArrival: string;
  status: string;
}

interface RideDetailsProps {
  driver: Driver;
  vehicle: Vehicle;
  ride: RideInfo;
}

const RideDetails: React.FC<RideDetailsProps> = ({ driver, vehicle, ride }) => {
  return (
    <div className={styles.rideCard}>
      <h2 className={styles.cardTitle}>Current Ride</h2>
      
      {/* Driver Info */}
      <div className={styles.driverInfo}>
        <div className={styles.driverProfile}>
          <Image 
            src={driver.image}
            alt={driver.name}
            width={60}
            height={60}
            className={styles.driverImage}
          />
          <div>
            <h3>{driver.name}</h3>
            <div className={styles.rating}>★ {driver.rating}</div>
          </div>
        </div>
        <Link href={`tel:${driver.phone}`} className={styles.phoneButton}>
          <Phone size={20} />
          Call Driver
        </Link>
      </div>

      {/* Vehicle Info */}
      <div className={styles.vehicleInfo}>
        <Car className={styles.icon} />
        <div>
          <h4>Vehicle Details</h4>
          <p>{vehicle.color} {vehicle.year} {vehicle.make} {vehicle.model}</p>
          <p className={styles.licensePlate}>License: {vehicle.licensePlate}</p>
        </div>
      </div>

      {/* Ride Details */}
      <div className={styles.rideDetails}>
        <div className={styles.locationInfo}>
          <MapPin className={styles.icon} />
          <div>
            <h4>Pickup</h4>
            <p>{ride.pickup}</p>
          </div>
        </div>
        <div className={styles.locationInfo}>
          <MapPin className={styles.icon} />
          <div>
            <h4>Destination</h4>
            <p>{ride.destination}</p>
          </div>
        </div>
        <div className={styles.timeInfo}>
          <Clock className={styles.icon} />
          <div>
            <h4>Estimated Arrival</h4>
            <p>{ride.estimatedArrival}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideDetails;
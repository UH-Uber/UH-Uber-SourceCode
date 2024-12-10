'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, User, Clock } from 'lucide-react';
import styles from '@/app/profile/ProfilePage.module.css';

interface Ride {
  id: number;
  startLocation: string;
  endLocation: string;
  departureTime: Date;
  availableSeats: number;
  status: 'PENDING' | 'ACTIVE' | 'COMPLETED' | 'CANCELLED';
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
  driverId: number;
}

interface User {
  id: number;
  name: string;
  email: string;
  avatarUrl: string | null;
  pronouns: string | null;
  bio: string | null;
  campusLocation: string | null;
  phone: string | null;
  offeredRides: Ride[];
}

interface ProfilePageProps {
  user: User;
  isOwnProfile: boolean;
}

export default function ProfilePage({ user, isOwnProfile }: ProfilePageProps) {
  return (
    <div className={styles.pageWrapper}>
      <nav className={styles.navigation}>
        <div className={styles.container}>
          <div className={styles.navContent}>
            <div className={styles.logo}></div>
            <div className={styles.navLinks}>
              <Link href="/my-ride">My Ride</Link>
              <Link href="/request-ride">Request a Ride</Link>
              <Link href="/find-ride">Find a Ride</Link>
              <Link href={`/profile/${user.id}`}>Profile</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className={styles.mainContent}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>
            {isOwnProfile ? 'My Profile' : `${user.name}'s Profile`}
          </h1>
          
          <div className={styles.profileGrid}>
            <div className={styles.profileCard}>
              <div className={styles.profileImageWrapper}>
                <Image 
                  src={user.avatarUrl || '/images/default-avatar.png'}
                  alt={`${user.name}'s profile`}
                  width={200}
                  height={200}
                  className={styles.profileImage}
                />
              </div>
              <h2 className={styles.profileName}>{user.name}</h2>
              {user.pronouns && (
                <p className={styles.profilePronouns}>{user.pronouns}</p>
              )}
              {user.bio && (
                <p className={styles.profileBio}>{user.bio}</p>
              )}
              {user.campusLocation && (
                <div className={styles.infoBox}>
                  <div className={styles.infoRow}>
                    <MapPin className={styles.icon} size={20} />
                    <span>{user.campusLocation}</span>
                  </div>
                </div>
              )}
            </div>

            <div className={styles.contactCard}>
              <h3 className={styles.contactTitle}>Contact Information</h3>
              
              <div className={styles.contactInfo}>
                {user.phone && (
                  <div className={styles.contactRow}>
                    <Phone className={styles.icon} />
                    <div className={styles.contactDetail}>
                      <label>Phone Number</label>
                      <p>{user.phone}</p>
                    </div>
                  </div>
                )}
                
                <div className={styles.contactRow}>
                  <Mail className={styles.icon} />
                  <div className={styles.contactDetail}>
                    <label>Email Address</label>
                    <p>{user.email}</p>
                  </div>
                </div>
              </div>

              {isOwnProfile && (
                <div className={styles.buttonGroup}>
                  <Link href={`/profile/${user.id}/edit`} className={styles.primaryButton}>
                    Edit Profile
                  </Link>
                  <Link href="/auth/change-password" className={styles.secondaryButton}>
                    Change Password
                  </Link>
                </div>
              )}
            </div>

            {user.offeredRides.length > 0 && (
              <div className={`${styles.contactCard} ${styles.fullWidth}`}>
                <h3 className={styles.contactTitle}>Active Rides</h3>
                <div className={styles.ridesGrid}>
                  {user.offeredRides.map((ride) => (
                    <div key={ride.id} className={styles.rideCard}>
                      <div className={styles.rideInfo}>
                        <div className={styles.locations}>
                          <p>{ride.startLocation} → {ride.endLocation}</p>
                        </div>
                        <div className={styles.rideDetails}>
                          <Clock className={styles.icon} size={16} />
                          <span>{new Date(ride.departureTime).toLocaleString()}</span>
                        </div>
                        <div className={styles.seats}>
                          <User className={styles.icon} size={16} />
                          <span>{ride.availableSeats} seats available</span>
                        </div>
                      </div>
                      <Link href={`/ride/${ride.id}`} className={styles.viewRideButton}>
                        View Details
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
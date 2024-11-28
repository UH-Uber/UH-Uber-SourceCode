import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, User, MapPin } from 'lucide-react';
import styles from './ProfilePage.module.css';

export default function ProfilePage() {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '(808) 555-1234',
    image: '/photosample.jpeg',
    campusLocation: 'Manoa Campus',
    pronouns: 'she/her', 
  }

  return (
    <div className={styles.pageWrapper}>
      {/* Navigation */}
      <nav className={styles.navigation}>
        <div className={styles.container}>
          <div className={styles.navContent}>
            <div className={styles.logo}>
              <span>UH Ride Share</span>
            </div>
            <div className={styles.navLinks}>
              <Link href="">My Ride</Link>
              <Link href="">Request a Ride</Link>
              <Link href="">Find a Ride</Link>
              <Link href="">Account</Link>

            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>My Account</h1>
          
          <div className={styles.profileGrid}>
            {/* Left Column - Profile Overview */}
            <div className={styles.profileCard}>
              <div className={styles.profileImageWrapper}>
                <Image 
                  src={user.image}
                  alt={`${user.name}'s profile`}
                  width={200}
                  height={200}
                  className={styles.profileImage}
                />
              </div>
              <h2 className={styles.profileName}>{user.name}</h2>
              <p className={styles.profilePronouns}>{user.pronouns}</p>
              <div className={styles.infoBox}>
                <div className={styles.infoRow}>
                  <MapPin className={styles.icon} size={20} />
                  <span>{user.campusLocation}</span>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Details */}
            <div className={styles.contactCard}>
              <h3 className={styles.contactTitle}>Basic Info</h3>
              
              <div className={styles.contactInfo}>
                <div className={styles.contactRow}>
                  <Phone className={styles.icon} />
                  <div className={styles.contactDetail}>
                    <label>Phone Number</label>
                    <p>{user.phone}</p>
                  </div>
                </div>
                
                <div className={styles.contactRow}>
                  <Mail className={styles.icon} />
                  <div className={styles.contactDetail}>
                    <label>Email Address</label>
                    <p>{user.email}</p>
                  </div>
                </div>
              </div>

              <div className={styles.buttonGroup}>
                <button className={styles.primaryButton}>
                  Edit Profile
                </button>
                <button className={styles.secondaryButton}>
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
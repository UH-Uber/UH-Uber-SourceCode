import React from 'react';
import Image from 'next/image';
import styles from './ProfileHeader.module.css';

interface User {
  name: string;
  email: string;
  image: string;
  phone?: string; // Optional phone number
}

interface ProfileHeaderProps {
  user: User;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user }) => (
  <div className={styles.profileContainer}>
    {/* Left Column: User Photo and Name */}
    <div className={styles.leftColumn}>
      <div className={styles.avatarContainer}>
        <Image
          src={user.image}
          alt={`${user.name}'s profile`}
          width={150}
          height={150}
          className={styles.avatar}
        />
      </div>
      <div className={styles.userNameContainer}>
        <h2 className={styles.userName}>{user.name}</h2>
        <p className={styles.userEmail}>{user.email}</p>
      </div>
    </div>

    {/* Right Column: Contact Information */}
    <div className={styles.rightColumn}>
      <h3 className={styles.contactTitle}>Contact Information</h3>
      <div className={styles.contactDetails}>
        <div className={styles.contactItem}>
          <strong>Phone Number:</strong>
          <span>{user.phone || 'Not provided'}</span>
        </div>
        <div className={styles.contactItem}>
          <strong>Email:</strong>
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileHeader;

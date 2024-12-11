import Image from 'next/image';
import styles from './ProfilePage.module.css';

interface ProfileDetailsProps {
  user: {
    name: string;
    email: string;
    image?: string;
  };
}

const ProfileDetails = ({ user }: ProfileDetailsProps) => (
  <div className={styles.container}>
    {user.image && (
      <Image
        src={user.image}
        alt={`${user.name}'s profile`}
        className={styles.profileImage}
        width={100}
        height={100}
      />
    )}
    <h2 className={styles.name}>{user.name}</h2>
    <p className={styles.email}>{user.email}</p>
  </div>
);

export default ProfileDetails;

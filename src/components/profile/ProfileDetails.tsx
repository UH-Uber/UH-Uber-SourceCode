import styles from './ProfilePage.module.css';

interface ProfileDetailsProps {
  user: {
    name: string;
    email: string;
    image?: string;
  };
}

export function ProfileDetails({ user }: ProfileDetailsProps) {
  return (
    <div className={styles.container}>
      {user.image && (
        <img
          src={user.image}
          alt={`${user.name}'s profile`}
          className={styles.profileImage}
        />
      )}
      <h2 className={styles.name}>{user.name}</h2>
      <p className={styles.email}>{user.email}</p>
    </div>
  );
}
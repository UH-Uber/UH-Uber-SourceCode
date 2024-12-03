import styles from './ProfilePage.module.css';
interface ProfileHeaderProps {
    user: {
      name: string
      image?: string
    }
  }
  
  export function ProfileHeader({ user }: ProfileHeaderProps) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
        {user.image && (
          <img
            src={user.image}
            alt={`${user.name}'s profile`}
            className="w-16 h-16 rounded-full mr-4"
          />
        )}
        <h3 className="text-2xl font-bold text-red-500">{user.name}</h3>
      </div>
    )
  }
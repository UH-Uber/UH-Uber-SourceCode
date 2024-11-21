// components/profile/ProfileDetails.tsx
interface ProfileDetailsProps {
    user: {
      name: string
      email: string
      image?: string
    }
  }
  
  export function ProfileDetails({ user }: ProfileDetailsProps) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 mt-4">
        {user.image && (
          <img
            src={user.image}
            alt={`${user.name}'s profile`}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
        )}
        <h2 className="text-xl font-semibold text-center">{user.name}</h2>
        <p className="text-gray-600 text-center">{user.email}</p>
      </div>
    )
  }
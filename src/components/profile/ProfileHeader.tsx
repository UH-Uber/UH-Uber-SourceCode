import Image from 'next/image';

interface ProfileHeaderProps {
  user: {
    name: string
    image?: string
  }
}

function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
      {user.image && (
      <Image
        src={user.image}
        alt={`${user.name}'s profile`}
        width={64}
        height={64}
        className="rounded-full mr-4"
      />
      )}
      <h3 className="text-2xl font-bold text-red-500">{user.name}</h3>
    </div>
  );
}

export default ProfileHeader;

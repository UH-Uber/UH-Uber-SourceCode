import { ProfileHeader } from '@/components/profile/ProfileHeader'
import { ProfileDetails } from '@/components/profile/ProfileDetails'
import { ProfileEditForm } from '@/components/profile/ProfileEditForm'

export default function ProfilePage() {
  // Placeholder user data
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    image: 'https://via.placeholder.com/150',
  }

  return (
    <div className="container mx-auto p-4">
        <h1>Account Info</h1>
      <ProfileHeader user={user} />
    </div>
  )
}
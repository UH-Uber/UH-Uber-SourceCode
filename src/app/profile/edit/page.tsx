import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import authOptions from '@/lib/authOptions';
import { ProfileEditForm } from '@/components/profile/ProfileEditForm';

export default async function EditProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect('/auth/signin');
  }

  const user = await prisma.user.findUnique({
    where: { 
      email: session.user.email 
    },
    select: {
      id: true,
      name: true,
      email: true,
      avatarUrl: true,
      bio: true,
      phone: true,
      pronouns: true,
      campusLocation: true,
      offeredRides: true,
    }
  });

  if (!user) {
    redirect('/auth/signin');
  }

  return (
    <div className="container mt-4">
      <ProfileEditForm user={user} />
    </div>
  );
}
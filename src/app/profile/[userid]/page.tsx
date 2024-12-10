import { getServerSession } from 'next-auth/next';
import { notFound, redirect } from 'next/navigation';
import authOptions from '@/lib/authOptions';
import { prisma } from '@/lib/prisma';
import ProfilePage from '@/components/profile/ProfilePage';

export default async function UserProfilePage({
  params: { userId },
}: {
  params: { userId: string };
}) {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect('/auth/signin');
  }

  // Validate userId
  if (!userId || isNaN(parseInt(userId))) {
    notFound();
  }

  const parsedUserId = parseInt(userId);

  const user = await prisma.user.findUnique({
    where: { id: parsedUserId },
    include: {
      offeredRides: {
        where: {
          status: 'ACTIVE',
        },
        take: 5,
        orderBy: {
          departureTime: 'asc',
        },
      },
    },
  });

  if (!user) {
    notFound();
  }

  // Compare the numeric values
  const isOwnProfile = session.user.id === parsedUserId;

  const safeUser = {
    id: user.id,
    name: user.name ?? '',
    email: user.email,
    avatarUrl: user.avatarUrl,
    bio: user.bio,
    phone: user.phone,
    pronouns: user.pronouns,
    campusLocation: user.campusLocation,
    offeredRides: user.offeredRides,
  };

  return <ProfilePage user={safeUser} isOwnProfile={isOwnProfile} />;
}
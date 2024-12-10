import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import authOptions from '@/lib/authOptions';
import { ProfileEditForm } from '@/components/profile/ProfileEditForm';
import ProfilePage from '@/components/profile/ProfilePage';
import type { User } from '@/types/user';

export default async function ProfileRoute() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      redirect('/auth/signin');
    }

    const userFromDB = await prisma.user.findUnique({
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

    if (!userFromDB) {
      redirect('/auth/signin');
    }

    const user: User = {
      id: userFromDB.id,
      email: session.user.email,
      name: userFromDB.name,
      avatarUrl: userFromDB.avatarUrl,
      bio: userFromDB.bio ?? null,
      phone: userFromDB.phone ?? null,
      pronouns: userFromDB.pronouns ?? null,
      campusLocation: userFromDB.campusLocation ?? null,
      offeredRides: userFromDB.offeredRides,
    };

    const isNewProfile = !user.name || !user.phone;

    if (isNewProfile) {
      return (
        <div className="container mt-4">
          <ProfileEditForm user={user} />
        </div>
      );
    }

    return <ProfilePage user={{ ...user, name: user.name || '', avatarUrl: user.avatarUrl || null, offeredRides: user.offeredRides || [] }} isOwnProfile={true} />;

  } catch (error) {
    console.error('Error in ProfileRoute:', error);
    redirect('/auth/signin');
  }
}
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import authOptions from '@/lib/authOptions';
import ProfileEditForm from '@/components/profile/ProfileEditForm';
import ProfilePage from '@/components/profile/ProfilePage';
import type { User } from '@/types/user';

export default async function ProfileRoute() {
  const session = await getServerSession(authOptions);

  // If no session, redirect to sign in
  if (!session?.user?.email) {
    return redirect('/auth/signin');
  }

  try {
    const userFromDB = await prisma.user.findUnique({
      where: {
        email: session.user.email,
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
      },
    });

    // If no user in DB, redirect to sign in
    if (!userFromDB) {
      return redirect('/auth/signin');
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

    // Check if profile is incomplete
    const isNewProfile = !user.name || !user.phone;

    // If profile is incomplete, show edit form
    if (isNewProfile) {
      return (
        <div className="container mt-4">
          <ProfileEditForm user={user} />
        </div>
      );
    }

    // Show complete profile
    return (
      <ProfilePage
        user={{
          ...user,
          name: user.name || '',
          avatarUrl: user.avatarUrl || null,
          offeredRides: user.offeredRides || [],
        }}
        isOwnProfile
      />
    );
  } catch (error) {
    console.error('Error in ProfileRoute:', error);
    // Instead of redirecting on error, show an error message
    return (
      <div className="container mt-4">
        <div className="alert alert-danger">
          An error occurred while loading your profile. Please try again later.
        </div>
      </div>
    );
  }
}

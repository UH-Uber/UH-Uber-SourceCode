import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import authOptions from '@/lib/authOptions';

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return new NextResponse(JSON.stringify({ error: 'Not authenticated' }), {
      status: 401,
    });
  }

  try {
    const body = await request.json();
    const { name, phone, pronouns, campusLocation, bio, avatarUrl } = body;

    const updatedUser = await prisma.user.update({
      where: {
        email: session.user.email, // Use email instead of ID for more reliable lookup
      },
      data: {
        name,
        phone,
        pronouns,
        campusLocation,
        bio,
        avatarUrl,
      },
    });

    return new NextResponse(JSON.stringify({
      user: updatedUser,
      redirect: '/profile', // Add redirect instruction
    }), {
      status: 200,
    });
  } catch (error) {
    console.error('Profile update error:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Error updating profile' }),
      { status: 500 },
    );
  }
}

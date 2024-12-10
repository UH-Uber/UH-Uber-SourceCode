import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import authOptions from '@/lib/authOptions';

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse(JSON.stringify({ error: 'Not authenticated' }), {
      status: 401,
    });
  }

  try {
    const body = await request.json();
    const { name, phone, pronouns, campusLocation, bio, avatarUrl } = body;

    const updatedUser = await prisma.user.update({
      where: { id: parseInt(session.user.id) },
      data: {
        name,
        phone,
        pronouns,
        campusLocation,
        bio,
        avatarUrl,
      },
    });

    return new NextResponse(JSON.stringify(updatedUser), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: 'Error updating profile' }),
      { status: 500 }
    );
  }
}
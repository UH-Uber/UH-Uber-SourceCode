export interface User {
    id: number;
    email: string;
    name: string | null;
    avatarUrl: string | null;
    bio: string | null;
    phone: string | null;
    pronouns: string | null;
    campusLocation: string | null;
    offeredRides?: {
      id: number;
      startLocation: string;
      endLocation: string;
      departureTime: Date;
      availableSeats: number;
      status: 'PENDING' | 'ACTIVE' | 'COMPLETED' | 'CANCELLED';
      description: string | null;
      createdAt: Date;
      updatedAt: Date;
      driverId: number;
    }[];
  }
  
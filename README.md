# UH-Uber Project

A ride-sharing application specifically designed for University of Hawaii students.

## Prerequisites

- Node.js 18+ installed
- PostgreSQL database
- Google Cloud Console account (for authentication)

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone [your-repository-url]
   cd [project-folder]
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```env
   # Your PostgreSQL database URL (from your database provider)
   DATABASE_URL="postgresql://username:password@host:port/database"
   
   # Local development URL
   NEXTAUTH_URL="http://localhost:3000"
   
   # Generate using: openssl rand -base64 32
   NEXTAUTH_SECRET="your_generated_secret_key"
   
   # From Google Cloud Console OAuth setup
   GOOGLE_CLIENT_ID="your_google_client_id"
   GOOGLE_CLIENT_SECRET="your_google_client_secret"
   ```

4. Set up the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Enable the Google+ API
4. Create OAuth credentials (OAuth 2.0 Client ID)
5. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
6. Copy the Client ID and Client Secret to your `.env` file



## Tech Stack

- Next.js 14
- TypeScript
- Prisma
- NextAuth.js
- PostgreSQL

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # React components
│   ├── ui/          # Basic UI components
│   ├── layouts/     # Layout components
│   └── shared/      # Shared components
├── lib/             # Library configurations
├── utils/           # Utility functions
├── hooks/           # Custom React hooks
├── types/           # TypeScript types
└── styles/          # Custom styles
```

## Important Notes

- Only @hawaii.edu email addresses can be used for authentication
- UH Duo 2FA will automatically trigger for @hawaii.edu accounts
- Never commit your `.env` file
- Make sure to run `npm run dev` for development
- Keep your Google OAuth credentials secure

## Authentication Flow

1. User clicks "Sign in with Google"
2. They select their @hawaii.edu account
3. If it's their first time or new session, UH's Duo 2FA will automatically trigger
4. After successful Duo authentication, they'll be logged into the app
5. Future sessions may require Duo again based on UH's security policies

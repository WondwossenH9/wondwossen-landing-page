import { NextResponse } from 'next/server';

export async function GET() {
  const googleConfig = {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET ? 'Set' : 'Missing',
    redirectUri: `${process.env.NEXTAUTH_URL}/api/auth/callback/google`,
    authUrl: `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${encodeURIComponent(`${process.env.NEXTAUTH_URL}/api/auth/callback/google`)}&response_type=code&scope=openid%20email%20profile`
  };

  return NextResponse.json({
    message: 'Google OAuth Debug Info',
    config: googleConfig,
    environment: {
      NEXTAUTH_URL: process.env.NEXTAUTH_URL,
      NODE_ENV: process.env.NODE_ENV
    }
  });
}

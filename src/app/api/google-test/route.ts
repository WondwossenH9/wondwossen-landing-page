import { NextResponse } from 'next/server';

export async function GET() {
  const testUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${encodeURIComponent('https://wondwossendev.com/api/auth/callback/google')}&response_type=code&scope=openid%20email%20profile&access_type=offline&prompt=consent`;

  return NextResponse.json({
    message: 'Google OAuth Test URL',
    testUrl,
    instructions: [
      '1. Copy the testUrl above',
      '2. Paste it in your browser',
      '3. See if Google shows the consent screen',
      '4. If it works, the issue is with NextAuth',
      '5. If it fails, the issue is with Google OAuth config'
    ],
    config: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      redirectUri: 'https://wondwossendev.com/api/auth/callback/google',
      scopes: 'openid email profile'
    }
  });
}

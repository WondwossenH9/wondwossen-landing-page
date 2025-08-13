import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    message: 'NextAuth test',
    providers: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID ? 'Set' : 'Missing',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ? 'Set' : 'Missing',
      },
      github: {
        clientId: process.env.GITHUB_CLIENT_ID ? 'Set' : 'Missing',
        clientSecret: process.env.GITHUB_CLIENT_SECRET ? 'Set' : 'Missing',
      }
    },
    nextAuth: {
      secret: process.env.NEXTAUTH_SECRET ? 'Set' : 'Missing',
      url: process.env.NEXTAUTH_URL || 'Not set',
    },
    callbackUrls: {
      google: `${process.env.NEXTAUTH_URL}/api/auth/callback/google`,
      github: `${process.env.NEXTAUTH_URL}/api/auth/callback/github`,
    }
  });
}

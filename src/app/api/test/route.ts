import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    message: 'API is working!',
    timestamp: new Date().toISOString(),
    env: {
      hasGoogleId: !!process.env.GOOGLE_CLIENT_ID,
      hasGoogleSecret: !!process.env.GOOGLE_CLIENT_SECRET,
      hasGithubId: !!process.env.GITHUB_CLIENT_ID,
      hasGithubSecret: !!process.env.GITHUB_CLIENT_SECRET,
      hasNextAuthSecret: !!process.env.NEXTAUTH_SECRET,
      hasNextAuthUrl: !!process.env.NEXTAUTH_URL,
    }
  });
}

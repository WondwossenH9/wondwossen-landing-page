# AWS Amplify Deployment Guide for wondwossendev.com

## Prerequisites

1. **AWS Account** with free tier access
2. **Domain**: wondwossendev.com (already owned)
3. **GitHub Repository**: https://github.com/WondwossenH9/wondwossen-landing-page
4. **AWS CLI** (optional, for advanced configuration)

## Step 1: Prepare Your Repository

### 1.1 Push Your Code to GitHub
```bash
git add .
git commit -m "Prepare for AWS Amplify deployment"
git push origin main
```

### 1.2 Environment Variables
Create these environment variables in AWS Amplify Console:
- `NODE_ENV=production`
- `NEXT_TELEMETRY_DISABLED=1`
- `NEXTAUTH_URL=https://wondwossendev.com`
- `NEXTAUTH_SECRET=your-secure-secret-key`

## Step 2: Deploy to AWS Amplify

### 2.1 Create Amplify App
1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click "New app" → "Host web app"
3. Choose "GitHub" as your repository source
4. Connect your GitHub account
5. Select repository: `WondwossenH9/wondwossen-landing-page`
6. Choose "main" branch

### 2.2 Configure Build Settings
The `amplify.yml` file is already configured for your Next.js app.

### 2.3 Deploy
1. Click "Save and deploy"
2. Amplify will automatically build and deploy your app
3. Wait for the build to complete (usually 5-10 minutes)

## Step 3: Configure Custom Domain

### 3.1 Add Domain in Amplify
1. In your Amplify app, go to "Domain management"
2. Click "Add domain"
3. Enter: `wondwossendev.com`
4. Click "Configure domain"

### 3.2 Configure Subdomains
- Main domain: `wondwossendev.com`
- www subdomain: `www.wondwossendev.com` (optional)

### 3.3 Update DNS Records
You'll need to update your domain's DNS settings with the provided CNAME records from Amplify.

## Step 4: SSL Certificate
AWS Amplify automatically provisions SSL certificates for your domain.

## Step 5: Authentication Setup (NextAuth.js)

### 5.1 Generate Secure Secret
Generate a secure secret for NextAuth:
```bash
openssl rand -base64 32
```
Or use an online generator: https://generate-secret.vercel.app/32

### 5.2 Configure OAuth Providers (Optional)
For Google/GitHub authentication, you'll need to set up OAuth apps:

**Google OAuth:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `https://wondwossendev.com/api/auth/callback/google`

**GitHub OAuth:**
1. Go to [GitHub Settings → OAuth Apps](https://github.com/settings/developers)
2. Create new OAuth App
3. Add callback URL: `https://wondwossendev.com/api/auth/callback/github`

## Step 6: Google Analytics Setup (Free)

### 6.1 Create Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new account (free)
3. Create a new property for `wondwossendev.com`
4. Get your Measurement ID (format: G-XXXXXXXXXX)

### 6.2 Add Analytics to Your Site
The analytics are already configured in your app. Just add your Measurement ID to environment variables.

## Step 7: Environment Variables Setup

In AWS Amplify Console → App settings → Environment variables:

```
# Basic Configuration
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
NEXT_PUBLIC_SITE_URL=https://wondwossendev.com

# Authentication (NextAuth.js)
NEXTAUTH_URL=https://wondwossendev.com
NEXTAUTH_SECRET=your-generated-secret-key-here

# OAuth Providers (Optional - add if you set up OAuth)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret

# Google Analytics (Free)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Feature Flags
NEXT_PUBLIC_ENABLE_CHAT=false
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_PWA=true
```

## Step 8: Custom Headers (Optional)

Add these headers in Amplify Console → App settings → Custom headers:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: origin-when-cross-origin
```

## Cost Optimization (Free Tier)

### AWS Amplify Free Tier Includes:
- 1,000 build minutes per month
- 15 GB storage per month
- 15 GB data transfer per month
- Perfect for personal portfolio sites

### Monitoring Usage:
- Check usage in AWS Amplify Console
- Monitor build minutes and data transfer
- Set up billing alerts

## Troubleshooting

### Common Issues:

1. **Build Failures**
   - Check build logs in Amplify Console
   - Verify all dependencies are in package.json
   - Ensure Node.js version compatibility

2. **Domain Issues**
   - Verify DNS records are correctly configured
   - Wait 24-48 hours for DNS propagation
   - Check SSL certificate status

3. **Performance Issues**
   - Enable Next.js optimizations
   - Use CDN for static assets
   - Optimize images and fonts

## Next Steps

1. **Set up monitoring** with CloudWatch
2. **Configure backups** for your domain
3. **Set up CI/CD** for automatic deployments
4. **Add analytics** (Google Analytics)
5. **Optimize performance** with CloudFront

## Support Resources

- [AWS Amplify Documentation](https://docs.aws.amazon.com/amplify/)
- [Next.js Documentation](https://nextjs.org/docs)
- [AWS Support](https://aws.amazon.com/support/)

## Estimated Costs (Free Tier)

- **AWS Amplify**: $0 (within free tier limits)
- **Route 53**: $0.50/month for hosted zone
- **SSL Certificate**: $0 (provided by Amplify)
- **Google Analytics**: $0 (free tier)
- **Total**: ~$0.50/month

## Quick Deployment Checklist

### ✅ Pre-Deployment
- [ ] Code pushed to GitHub: `WondwossenH9/wondwossen-landing-page`
- [ ] Environment variables prepared
- [ ] Google Analytics account created
- [ ] OAuth apps configured (optional)

### ✅ AWS Amplify Setup
- [ ] Amplify app created
- [ ] GitHub repository connected
- [ ] Build settings configured
- [ ] Environment variables added
- [ ] Custom domain configured

### ✅ Post-Deployment
- [ ] SSL certificate verified
- [ ] Google Analytics tracking confirmed
- [ ] Authentication tested
- [ ] Performance optimized

Your app will be accessible at: https://wondwossendev.com

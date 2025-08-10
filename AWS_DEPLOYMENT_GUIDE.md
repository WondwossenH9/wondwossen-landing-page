# AWS Deployment Guide for Wende App

This guide provides step-by-step instructions for deploying your Next.js application to AWS using different services.

## Prerequisites

1. **AWS CLI** installed and configured
2. **Docker** installed (for containerized deployments)
3. **Node.js 18+** installed
4. **AWS Account** with appropriate permissions

## Deployment Options

### Option 1: AWS Amplify (Recommended for Frontend)

AWS Amplify is the easiest way to deploy Next.js applications with automatic CI/CD.

#### Steps:
1. **Connect Repository**
   - Go to AWS Amplify Console
   - Click "New app" → "Host web app"
   - Connect your GitHub repository
   - Select the `wende` repository

2. **Configure Build Settings**
   - The `amplify.yml` file is already configured
   - Build settings will be automatically detected

3. **Deploy**
   - Click "Save and deploy"
   - Amplify will build and deploy your app automatically

#### Benefits:
- Automatic deployments on git push
- Built-in CDN and SSL
- Easy rollbacks
- Preview deployments for PRs

### Option 2: AWS ECS with ECR (Containerized)

For more control and scalability, deploy using ECS with ECR.

#### Steps:

1. **Create ECR Repository**
   ```bash
   aws ecr create-repository --repository-name wende-app --region us-east-1
   ```

2. **Create ECS Cluster**
   ```bash
   aws ecs create-cluster --cluster-name wende-cluster --region us-east-1
   ```

3. **Create IAM Roles**
   - Create `ecsTaskExecutionRole` with `AmazonECSTaskExecutionRolePolicy`
   - Create `ecsTaskRole` for your application permissions

4. **Update Task Definition**
   - Edit `ecs-task-definition.json`
   - Replace `YOUR_ACCOUNT_ID` with your actual AWS account ID
   - Update role ARNs

5. **Register Task Definition**
   ```bash
   aws ecs register-task-definition --cli-input-json file://ecs-task-definition.json
   ```

6. **Deploy**
   ```bash
   chmod +x aws-deploy.sh
   ./aws-deploy.sh
   ```

### Option 3: AWS Elastic Beanstalk

For traditional server deployments.

#### Steps:

1. **Install EB CLI**
   ```bash
   pip install awsebcli
   ```

2. **Initialize EB Application**
   ```bash
   eb init wende-app --platform node.js --region us-east-1
   ```

3. **Create Environment**
   ```bash
   eb create wende-production --instance-type t3.small
   ```

4. **Deploy**
   ```bash
   eb deploy
   ```

## Environment Variables

Create a `.env.production` file with your production environment variables:

```env
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
# Add your other environment variables here
```

## Security Considerations

1. **Environment Variables**: Never commit sensitive data to git
2. **IAM Roles**: Use least privilege principle
3. **HTTPS**: Always use HTTPS in production
4. **Security Groups**: Configure appropriate firewall rules

## Monitoring and Logging

1. **CloudWatch Logs**: Automatically configured for ECS
2. **Health Checks**: Use `/api/health` endpoint
3. **Metrics**: Monitor CPU, memory, and request metrics

## Cost Optimization

1. **Use Spot Instances** for non-critical workloads
2. **Right-size instances** based on actual usage
3. **Enable auto-scaling** for traffic spikes
4. **Use CloudFront** for global CDN

## Troubleshooting

### Common Issues:

1. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are in package.json

2. **Runtime Errors**
   - Check CloudWatch logs
   - Verify environment variables

3. **Performance Issues**
   - Enable Next.js optimizations
   - Use CDN for static assets

## Next Steps

1. Set up custom domain with Route 53
2. Configure SSL certificates
3. Set up monitoring and alerting
4. Implement CI/CD pipeline
5. Configure backup strategies

## Support

For issues specific to your deployment, check:
- AWS Documentation
- Next.js Documentation
- AWS Support (if you have a support plan) 
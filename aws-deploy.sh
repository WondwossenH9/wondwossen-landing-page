#!/bin/bash

# AWS ECS Deployment Script
# Make sure you have AWS CLI configured and Docker installed

set -e

# Configuration
AWS_REGION="us-east-1"
ECR_REPOSITORY_NAME="wende-app"
ECS_CLUSTER_NAME="wende-cluster"
ECS_SERVICE_NAME="wende-service"
ECS_TASK_DEFINITION_NAME="wende-task"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 Starting AWS deployment...${NC}"

# Get AWS account ID
AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
ECR_REPOSITORY_URI="${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPOSITORY_NAME}"

echo -e "${YELLOW}📦 Building Docker image...${NC}"
docker build -t ${ECR_REPOSITORY_NAME} .

echo -e "${YELLOW}🔐 Logging into ECR...${NC}"
aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${ECR_REPOSITORY_URI}

echo -e "${YELLOW}🏷️  Tagging image...${NC}"
docker tag ${ECR_REPOSITORY_NAME}:latest ${ECR_REPOSITORY_URI}:latest

echo -e "${YELLOW}📤 Pushing image to ECR...${NC}"
docker push ${ECR_REPOSITORY_URI}:latest

echo -e "${YELLOW}🔄 Updating ECS service...${NC}"
aws ecs update-service \
    --cluster ${ECS_CLUSTER_NAME} \
    --service ${ECS_SERVICE_NAME} \
    --force-new-deployment \
    --region ${AWS_REGION}

echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
echo -e "${YELLOW}🔍 Check your ECS service status in the AWS Console${NC}" 
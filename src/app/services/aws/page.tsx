import React from 'react';
import Link from 'next/link';

export default function AWSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-10 border border-white/20">
        <h1 className="text-4xl font-bold text-white mb-6">AWS Architecture Services</h1>
        <p className="text-lg text-gray-300 mb-6">
          As a certified AWS Solutions Architect, I design and implement secure, scalable, and cost-effective cloud solutions on AWS. My expertise covers a wide range of AWS services, ensuring your applications are robust, high-performing, and future-proof.
        </p>
        <h2 className="text-2xl font-semibold text-white mb-4">AWS Services Offered</h2>
        <ul className="list-disc list-inside text-gray-200 mb-6 space-y-2">
          <li>Cloud architecture design and best practices</li>
          <li>Serverless solutions (Lambda, API Gateway, DynamoDB)</li>
          <li>Microservices and container orchestration (ECS, EKS, Fargate)</li>
          <li>Networking, VPC, and security architecture</li>
          <li>Cost optimization and resource management</li>
          <li>Disaster recovery and high availability planning</li>
          <li>CI/CD and DevOps automation on AWS</li>
          <li>Migration to AWS and hybrid cloud solutions</li>
        </ul>
        <div className="mt-8">
          <Link href="/contact">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
              Contact Me for AWS Consulting
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
} 
import React from 'react';
import Link from 'next/link';

export default function DevOpsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-10 border border-white/20">
        <h1 className="text-4xl font-bold text-white mb-6">DevOps Consulting Services</h1>
        <p className="text-lg text-gray-300 mb-6">
          As an experienced Software Engineer and AWS Solutions Architect, I help organizations accelerate their software delivery, improve reliability, and scale efficiently through modern DevOps practices. My approach bridges the gap between development and operations, enabling continuous integration, deployment, and monitoring.
        </p>
        <h2 className="text-2xl font-semibold text-white mb-4">DevOps Services Offered</h2>
        <ul className="list-disc list-inside text-gray-200 mb-6 space-y-2">
          <li>CI/CD pipeline design and implementation</li>
          <li>Infrastructure as Code (IaC) with tools like Terraform and AWS CloudFormation</li>
          <li>Automated testing and deployment strategies</li>
          <li>Containerization and orchestration (Docker, Kubernetes, ECS)</li>
          <li>Cloud infrastructure automation (AWS expert)</li>
          <li>Monitoring, logging, and alerting solutions</li>
          <li>Security and compliance automation</li>
          <li>DevOps culture and process consulting</li>
        </ul>
        <div className="mt-8">
          <Link href="/contact">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
              Contact Me for DevOps Consulting
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
} 
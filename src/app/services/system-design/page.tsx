import React from 'react';
import Link from 'next/link';

export default function SystemDesignPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-10 border border-white/20">
        <h1 className="text-4xl font-bold text-white mb-6">System Design Services</h1>
        <p className="text-lg text-gray-300 mb-6">
          As a seasoned Software Engineer and AWS Solutions Architect, I specialize in designing scalable, robust, and efficient systems tailored to your business needs. My approach combines deep technical expertise with a focus on reliability, performance, and future growth.
        </p>
        <h2 className="text-2xl font-semibold text-white mb-4">What I Offer</h2>
        <ul className="list-disc list-inside text-gray-200 mb-6 space-y-2">
          <li>End-to-end system architecture for web, cloud, and enterprise applications</li>
          <li>Microservices and distributed systems design</li>
          <li>Scalability and high-availability planning</li>
          <li>API and integration strategy</li>
          <li>Database and data flow design</li>
          <li>Security, compliance, and best practices</li>
          <li>Cloud-native and hybrid infrastructure solutions (AWS expert)</li>
          <li>Technical documentation and architecture diagrams</li>
        </ul>
        <div className="mt-8">
          <Link href="/contact">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
              Contact Me for a Consultation
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
} 
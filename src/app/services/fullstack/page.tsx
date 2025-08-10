import React from 'react';
import Link from 'next/link';

export default function FullStackPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-10 border border-white/20">
        <h1 className="text-4xl font-bold text-white mb-6">Full-Stack Development Services</h1>
        <p className="text-lg text-gray-300 mb-6">
          As a skilled Software Engineer, I specialize in building complete web applications from frontend to backend. My expertise spans modern JavaScript frameworks, cloud infrastructure, and scalable architectures, delivering end-to-end solutions that drive business growth.
        </p>
        <h2 className="text-2xl font-semibold text-white mb-4">Full-Stack Services Offered</h2>
        <ul className="list-disc list-inside text-gray-200 mb-6 space-y-2">
          <li>Frontend development with React, Next.js, and modern frameworks</li>
          <li>Backend development with Node.js, Python, and cloud services</li>
          <li>Database design and management (SQL and NoSQL)</li>
          <li>API development and integration</li>
          <li>Cloud deployment and infrastructure management</li>
          <li>Performance optimization and scalability</li>
          <li>Security implementation and best practices</li>
          <li>Testing, CI/CD, and DevOps integration</li>
        </ul>
        <div className="mt-8">
          <Link href="/contact">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
              Contact Me for Full-Stack Development
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
} 
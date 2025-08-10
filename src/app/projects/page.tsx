'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ExternalLink, 
  Github, 
  Globe, 
  Code, 
  Cloud, 
  Database,
  Shield,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and AWS. Features include user authentication, payment processing, inventory management, and real-time analytics.',
    image: '/projects/ecommerce.jpg',
    technologies: ['React', 'Node.js', 'AWS', 'Stripe', 'MongoDB'],
    category: 'Full-Stack',
    github: 'https://github.com/yourusername/ecommerce-platform',
    live: 'https://ecommerce-demo.com',
    featured: true
  },
  {
    id: 2,
    title: 'Cloud-Native Microservices',
    description: 'Scalable microservices architecture using AWS ECS, API Gateway, and Lambda. Implements event-driven architecture with SQS and SNS for reliable message processing.',
    image: '/projects/microservices.jpg',
    technologies: ['AWS ECS', 'Lambda', 'API Gateway', 'SQS', 'DynamoDB'],
    category: 'Cloud Architecture',
    github: 'https://github.com/yourusername/microservices',
    live: 'https://api-demo.com',
    featured: true
  },
  {
    id: 3,
    title: 'Real-Time Dashboard',
    description: 'Interactive dashboard for monitoring system performance and user analytics. Built with React, WebSocket connections, and real-time data visualization.',
    image: '/projects/dashboard.jpg',
    technologies: ['React', 'WebSocket', 'Chart.js', 'Node.js', 'Redis'],
    category: 'Frontend',
    github: 'https://github.com/yourusername/dashboard',
    live: 'https://dashboard-demo.com',
    featured: false
  },
  {
    id: 4,
    title: 'Serverless API',
    description: 'RESTful API built with AWS Lambda and API Gateway. Features authentication, rate limiting, and automatic scaling based on demand.',
    image: '/projects/api.jpg',
    technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Cognito', 'CloudWatch'],
    category: 'Backend',
    github: 'https://github.com/yourusername/serverless-api',
    live: 'https://api-docs.com',
    featured: false
  },
  {
    id: 5,
    title: 'DevOps Pipeline',
    description: 'Complete CI/CD pipeline using GitHub Actions, Docker, and AWS. Automated testing, building, and deployment to multiple environments.',
    image: '/projects/devops.jpg',
    technologies: ['GitHub Actions', 'Docker', 'AWS ECS', 'Terraform', 'CloudWatch'],
    category: 'DevOps',
    github: 'https://github.com/yourusername/devops-pipeline',
    live: null,
    featured: false
  },
  {
    id: 6,
    title: 'Mobile PWA',
    description: 'Progressive Web App with offline capabilities and push notifications. Optimized for mobile devices with responsive design.',
    image: '/projects/pwa.jpg',
    technologies: ['React', 'PWA', 'Service Workers', 'IndexedDB', 'Push API'],
    category: 'Mobile',
    github: 'https://github.com/yourusername/mobile-pwa',
    live: 'https://pwa-demo.com',
    featured: false
  }
];

const categories = ['All', 'Full-Stack', 'Cloud Architecture', 'Frontend', 'Backend', 'DevOps', 'Mobile'];

export default function ProjectsPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-secondary-50 dark:bg-secondary-900">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              My Projects
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              A showcase of my work, featuring full-stack applications, 
              cloud-native solutions, and innovative web experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              Highlighted work that demonstrates my expertise in modern web development 
              and cloud architecture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-secondary-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 flex items-center justify-center">
                  <div className="text-center">
                    <Code className="w-16 h-16 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                    <p className="text-secondary-600 dark:text-secondary-400 font-medium">
                      {project.title}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <div className="flex space-x-2">
                      {project.github && (
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="sm" className="p-2">
                            <Github className="w-4 h-4" />
                          </Button>
                        </Link>
                      )}
                      {project.live && (
                        <Link href={project.live} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="sm" className="p-2">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-16 bg-white dark:bg-secondary-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              All Projects
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              A comprehensive collection of my work across different technologies and domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-secondary-50 dark:bg-secondary-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-32 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 flex items-center justify-center">
                  <div className="text-center">
                    <Code className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                    <p className="text-secondary-600 dark:text-secondary-400 text-sm font-medium">
                      {project.title}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                    <div className="flex space-x-1">
                      {project.github && (
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="sm" className="p-1">
                            <Github className="w-3 h-3" />
                          </Button>
                        </Link>
                      )}
                      {project.live && (
                        <Link href={project.live} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="sm" className="p-1">
                            <ExternalLink className="w-3 h-3" />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-400 text-sm mb-3 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white dark:bg-secondary-600 text-secondary-700 dark:text-secondary-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-white dark:bg-secondary-600 text-secondary-700 dark:text-secondary-300 rounded text-xs font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life with cutting-edge 
              technology and innovative solutions.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-primary-50">
                Start a Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 
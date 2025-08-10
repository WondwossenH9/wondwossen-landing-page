'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Cloud, 
  Database, 
  Shield, 
  Zap, 
  Globe, 
  Server, 
  Cpu,
  GitBranch,
  Lock,
  BarChart3,
  Smartphone
} from 'lucide-react';

const skills = [
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Expert in React, Node.js, TypeScript, and modern web technologies. Building responsive, performant applications with clean, maintainable code.',
    technologies: ['React', 'Node.js', 'TypeScript', 'Next.js', 'Python', 'Java']
  },
  {
    icon: Cloud,
    title: 'AWS Solutions Architecture',
    description: 'Certified AWS Solutions Architect designing scalable, secure, and cost-effective cloud infrastructure. Expert in serverless, containers, and microservices.',
    technologies: ['EC2', 'Lambda', 'S3', 'RDS', 'ECS', 'CloudFormation']
  },
  {
    icon: Database,
    title: 'Database Design & Management',
    description: 'Designing and optimizing both SQL and NoSQL databases. Implementing data modeling, migrations, and ensuring data integrity and performance.',
    technologies: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'Redis', 'MySQL']
  },
  {
    icon: Shield,
    title: 'Security & DevOps',
    description: 'Implementing security best practices, CI/CD pipelines, and infrastructure as code. Ensuring applications are secure, scalable, and maintainable.',
    technologies: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'AWS IAM']
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Optimizing application performance, database queries, and cloud resources. Implementing caching strategies and monitoring solutions.',
    technologies: ['Redis', 'CDN', 'CloudWatch', 'New Relic', 'Load Balancing']
  },
  {
    icon: Globe,
    title: 'Microservices Architecture',
    description: 'Designing and implementing scalable microservices architectures. Building distributed systems with proper service communication and data consistency.',
    technologies: ['API Gateway', 'Message Queues', 'Service Mesh', 'Event-Driven']
  },
  {
    icon: Server,
    title: 'Serverless Development',
    description: 'Building serverless applications using AWS Lambda, API Gateway, and related services. Creating event-driven architectures for cost efficiency.',
    technologies: ['Lambda', 'API Gateway', 'SQS', 'SNS', 'Step Functions']
  },
  {
    icon: Cpu,
    title: 'System Design',
    description: 'Architecting large-scale distributed systems. Designing for scalability, reliability, and performance while considering trade-offs and constraints.',
    technologies: ['Load Balancing', 'Caching', 'Database Sharding', 'CDN']
  },
  {
    icon: GitBranch,
    title: 'Version Control & Collaboration',
    description: 'Expert in Git workflows, code review processes, and team collaboration. Maintaining clean, well-documented codebases with proper branching strategies.',
    technologies: ['Git', 'GitHub', 'GitLab', 'Code Review', 'Documentation']
  },
  {
    icon: Lock,
    title: 'Security Implementation',
    description: 'Implementing comprehensive security measures including authentication, authorization, data encryption, and compliance with security standards.',
    technologies: ['OAuth', 'JWT', 'SSL/TLS', 'Encryption', 'GDPR Compliance']
  },
  {
    icon: BarChart3,
    title: 'Monitoring & Analytics',
    description: 'Setting up comprehensive monitoring, logging, and analytics solutions. Implementing observability practices for production systems.',
    technologies: ['CloudWatch', 'ELK Stack', 'Prometheus', 'Grafana', 'Sentry']
  },
  {
    icon: Smartphone,
    title: 'Mobile & PWA Development',
    description: 'Building progressive web applications and mobile-responsive solutions. Ensuring optimal user experience across all devices and platforms.',
    technologies: ['PWA', 'React Native', 'Responsive Design', 'Mobile-First']
  }
];

export function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section bg-secondary-50 dark:bg-secondary-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
            Comprehensive full-stack development and AWS architecture skills, 
            delivering robust, scalable solutions for modern applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              skill={skill}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  skill: typeof skills[0];
  index: number;
  inView: boolean;
}

function SkillCard({ skill, index, inView }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <skill.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
      </div>
      
      <h3 className="text-xl font-bold text-foreground mb-4">{skill.title}</h3>
      <p className="text-secondary-600 dark:text-secondary-400 mb-6 leading-relaxed">
        {skill.description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {skill.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
} 
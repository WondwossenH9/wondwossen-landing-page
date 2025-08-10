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
  Award,
  Clock,
  Star,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function AboutPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { icon: Code, name: 'Full-Stack Development', level: 95 },
    { icon: Cloud, name: 'AWS Architecture', level: 90 },
    { icon: Database, name: 'Database Design', level: 85 },
    { icon: Shield, name: 'Security & DevOps', level: 88 },
    { icon: Zap, name: 'Performance Optimization', level: 82 },
    { icon: Globe, name: 'Microservices', level: 87 },
  ];

  const experience = [
    {
      year: '2023 - Present',
      title: 'Senior Software Engineer',
      company: 'Tech Company',
      description: 'Leading full-stack development initiatives, architecting scalable solutions, and mentoring junior developers.',
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes']
    },
    {
      year: '2021 - 2023',
      title: 'AWS Solutions Architect',
      company: 'Cloud Solutions Inc.',
      description: 'Designed and implemented cloud-native applications, managed infrastructure, and optimized costs.',
      technologies: ['AWS', 'Lambda', 'ECS', 'RDS', 'CloudFormation']
    },
    {
      year: '2019 - 2021',
      title: 'Full-Stack Developer',
      company: 'Startup XYZ',
      description: 'Built responsive web applications, implemented CI/CD pipelines, and collaborated with cross-functional teams.',
      technologies: ['JavaScript', 'Python', 'PostgreSQL', 'Redis', 'Git']
    },
  ];

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
              About Me
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Passionate software engineer and AWS solutions architect with a focus on 
              building scalable, cloud-native applications that drive business value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                My Journey in Software Engineering
              </h2>
              <div className="space-y-4 text-secondary-600 dark:text-secondary-400">
                <p>
                  With over 5 years of experience in software development, I've had the privilege 
                  of working on diverse projects that have shaped my expertise in full-stack 
                  development and cloud architecture.
                </p>
                <p>
                  My passion lies in creating robust, scalable solutions that not only meet 
                  current requirements but also anticipate future growth. I specialize in 
                  AWS cloud services, microservices architecture, and modern web technologies.
                </p>
                <p>
                  Throughout my career, I've collaborated with cross-functional teams, 
                  mentored junior developers, and delivered solutions that have positively 
                  impacted thousands of users.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-primary-600" />
                  <span className="text-secondary-600 dark:text-secondary-400">
                    <strong>15+ AWS Certifications</strong> including Solutions Architect
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary-600" />
                  <span className="text-secondary-600 dark:text-secondary-400">
                    <strong>5+ Years</strong> of professional experience
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-primary-600" />
                  <span className="text-secondary-600 dark:text-secondary-400">
                    <strong>50+ Projects</strong> successfully delivered
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-primary-600" />
                  <span className="text-secondary-600 dark:text-secondary-400">
                    <strong>25+ Happy Clients</strong> across various industries
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
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
              Technical Expertise
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              My skills span across the full software development lifecycle, 
              from frontend development to cloud infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-secondary-50 dark:bg-secondary-700 rounded-xl p-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <skill.icon className="w-6 h-6 text-primary-600" />
                  <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                </div>
                <div className="w-full bg-secondary-200 dark:bg-secondary-600 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full"
                  />
                </div>
                <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-2">
                  {skill.level}% proficiency
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Professional Experience
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              A timeline of my career progression and key achievements.
            </p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
                    <p className="text-primary-600 font-medium">{job.company}</p>
                  </div>
                  <span className="text-secondary-600 dark:text-secondary-400 font-medium">
                    {job.year}
                  </span>
                </div>
                <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
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
              Ready to Work Together?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life with 
              cutting-edge technology and scalable solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-primary-50">
                  Get In Touch
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                  View My Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 
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
  Smartphone,
  React,
  Node,
  Aws,
  Docker,
  Kubernetes,
  Typescript,
  Python,
  Java
} from 'lucide-react';

const skillCategories = [
  {
    name: 'Frontend Development',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React', level: 95, icon: React },
      { name: 'TypeScript', level: 90, icon: Typescript },
      { name: 'Next.js', level: 88, icon: Code },
      { name: 'HTML/CSS', level: 92, icon: Code },
      { name: 'Tailwind CSS', level: 85, icon: Code },
      { name: 'JavaScript', level: 93, icon: Code },
    ]
  },
  {
    name: 'Backend Development',
    icon: Server,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js', level: 90, icon: Node },
      { name: 'Python', level: 85, icon: Python },
      { name: 'Java', level: 80, icon: Java },
      { name: 'Express.js', level: 88, icon: Server },
      { name: 'REST APIs', level: 92, icon: Server },
      { name: 'GraphQL', level: 75, icon: Server },
    ]
  },
  {
    name: 'Cloud & AWS',
    icon: Cloud,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'AWS EC2', level: 90, icon: Aws },
      { name: 'AWS Lambda', level: 88, icon: Aws },
      { name: 'AWS S3', level: 92, icon: Aws },
      { name: 'AWS RDS', level: 85, icon: Aws },
      { name: 'AWS ECS', level: 87, icon: Aws },
      { name: 'CloudFormation', level: 82, icon: Aws },
    ]
  },
  {
    name: 'Database & Storage',
    icon: Database,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'PostgreSQL', level: 88, icon: Database },
      { name: 'MongoDB', level: 85, icon: Database },
      { name: 'DynamoDB', level: 80, icon: Database },
      { name: 'Redis', level: 82, icon: Database },
      { name: 'MySQL', level: 85, icon: Database },
      { name: 'Data Modeling', level: 90, icon: Database },
    ]
  },
  {
    name: 'DevOps & Tools',
    icon: Shield,
    color: 'from-indigo-500 to-purple-500',
    skills: [
      { name: 'Docker', level: 88, icon: Docker },
      { name: 'Kubernetes', level: 75, icon: Kubernetes },
      { name: 'Git', level: 92, icon: GitBranch },
      { name: 'CI/CD', level: 85, icon: Shield },
      { name: 'Terraform', level: 80, icon: Shield },
      { name: 'Monitoring', level: 83, icon: BarChart3 },
    ]
  },
  {
    name: 'Architecture & Design',
    icon: Cpu,
    color: 'from-teal-500 to-cyan-500',
    skills: [
      { name: 'Microservices', level: 87, icon: Globe },
      { name: 'System Design', level: 85, icon: Cpu },
      { name: 'API Design', level: 90, icon: Server },
      { name: 'Scalability', level: 88, icon: Zap },
      { name: 'Security', level: 85, icon: Lock },
      { name: 'Performance', level: 82, icon: Zap },
    ]
  }
];

const certifications = [
  {
    name: 'AWS Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    year: '2023',
    badge: 'AWS'
  },
  {
    name: 'AWS Developer - Associate',
    issuer: 'Amazon Web Services',
    year: '2023',
    badge: 'AWS'
  },
  {
    name: 'AWS DevOps Engineer - Professional',
    issuer: 'Amazon Web Services',
    year: '2022',
    badge: 'AWS'
  },
  {
    name: 'React Developer Certification',
    issuer: 'Meta',
    year: '2023',
    badge: 'React'
  },
  {
    name: 'Node.js Developer Certification',
    issuer: 'OpenJS Foundation',
    year: '2022',
    badge: 'Node'
  }
];

export default function SkillsPage() {
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
              Technical Skills
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Comprehensive expertise across the full software development stack, 
              from frontend frameworks to cloud infrastructure and DevOps practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Skills Overview
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              My technical expertise spans across multiple domains, enabling me to 
              deliver end-to-end solutions for complex business requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-6">{category.name}</h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-secondary-600 dark:text-secondary-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary-200 dark:bg-secondary-600 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.1 }}
                          className={`bg-gradient-to-r ${category.color} h-2 rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
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
              Certifications & Achievements
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              Industry-recognized certifications that validate my expertise 
              in cloud computing and modern development practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-secondary-50 dark:bg-secondary-700 rounded-xl p-6 border border-secondary-200 dark:border-secondary-600"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                    <span className="text-primary-600 dark:text-primary-400 font-bold text-lg">
                      {cert.badge}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{cert.name}</h3>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400">{cert.issuer}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600 dark:text-secondary-400">
                    Issued {cert.year}
                  </span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                    Active
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Skills */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Additional Skills & Tools
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              A comprehensive toolkit of technologies and methodologies I use 
              to deliver exceptional software solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'GitHub', 'GitLab', 'Bitbucket', 'Jira', 'Confluence', 'Slack',
              'Postman', 'Insomnia', 'VS Code', 'IntelliJ', 'Eclipse', 'WebStorm',
              'Chrome DevTools', 'Firebase', 'Vercel', 'Netlify', 'Heroku',
              'Jenkins', 'CircleCI', 'Travis CI', 'SonarQube', 'Sentry',
              'Grafana', 'Prometheus', 'ELK Stack', 'New Relic', 'Datadog',
              'Swagger', 'OpenAPI', 'Jest', 'Cypress', 'Selenium', 'Postman'
            ].map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white dark:bg-secondary-800 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-sm font-medium text-foreground">{tool}</span>
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
              Ready to Leverage These Skills?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how my technical expertise can help solve 
              your business challenges and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="/contact" className="btn btn-primary bg-white text-primary-600 hover:bg-primary-50">
                Start a Project
              </a>
              <a href="/projects" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                View My Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 
'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, Award } from 'lucide-react';

const experienceData = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'TechCorp Solutions',
    location: 'Addis Ababa, Ethiopia',
    period: '2022 - Present',
    description: 'Leading development of cloud-native applications using AWS services. Architected and implemented microservices infrastructure serving 1M+ users.',
    achievements: [
      'Designed and deployed scalable microservices architecture on AWS ECS',
      'Reduced infrastructure costs by 40% through AWS optimization',
      'Led team of 8 developers in agile development process',
      'Implemented CI/CD pipelines using AWS CodePipeline and GitHub Actions'
    ],
    technologies: ['AWS', 'React', 'Node.js', 'Docker', 'Kubernetes', 'TypeScript']
  },
  {
    id: 2,
    title: 'Cloud Solutions Architect',
    company: 'InnovateTech Inc.',
    location: 'Austin, TX',
    period: '2020 - 2022',
    description: 'Specialized in designing and implementing cloud solutions for enterprise clients. Focused on AWS architecture and DevOps practices.',
    achievements: [
      'Architected multi-region AWS infrastructure for high availability',
      'Implemented serverless solutions using AWS Lambda and API Gateway',
      'Designed disaster recovery strategies with 99.9% uptime SLA',
      'Mentored junior developers in cloud best practices'
    ],
    technologies: ['AWS', 'Serverless', 'Terraform', 'Python', 'DynamoDB', 'CloudFormation']
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'Digital Dynamics',
    location: 'Addis Ababa, Ethiopia',
    period: '2018 - 2020',
    description: 'Developed full-stack web applications with focus on performance and user experience. Collaborated with cross-functional teams.',
    achievements: [
      'Built responsive web applications using React and Node.js',
      'Optimized database queries improving performance by 60%',
      'Implemented real-time features using WebSocket technology',
      'Contributed to open-source projects and technical blog'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'WebSocket', 'JavaScript']
  },
  {
    id: 4,
    title: 'Software Engineer',
    company: 'StartupHub',
    location: 'Boston, MA',
    period: '2016 - 2018',
    description: 'Early-stage startup experience building MVP products and scaling applications. Wore multiple hats in a fast-paced environment.',
    achievements: [
      'Developed MVP products from concept to production',
      'Implemented user authentication and authorization systems',
      'Integrated third-party APIs and payment gateways',
      'Participated in product strategy and user research'
    ],
    technologies: ['JavaScript', 'Python', 'MongoDB', 'Express.js', 'Stripe API', 'AWS']
  }
];

const certifications = [
  {
    name: 'AWS Solutions Architect - Professional',
    issuer: 'Amazon Web Services',
    year: '2023',
    credential: 'AWS-SAP-2023'
  },
  {
    name: 'AWS Developer Associate',
    issuer: 'Amazon Web Services',
    year: '2022',
    credential: 'AWS-DVA-2022'
  },
  {
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2021',
    credential: 'AWS-CP-2021'
  },
  {
    name: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    year: '2022',
    credential: 'CKA-2022-001234'
  }
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Professional Experience
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A journey through my career in software engineering and cloud architecture, 
            building scalable solutions and leading technical teams.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experienceData.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-12 relative"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {experience.title}
                    </h3>
                    <div className="flex items-center gap-4 text-gray-300 mb-4">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        <span>{experience.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {experience.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Certifications & Credentials
            </h2>
            <p className="text-xl text-gray-300">
              Professional certifications that validate my expertise in cloud technologies
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <Award className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-gray-300 mb-2">{cert.issuer}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-purple-300">{cert.year}</span>
                      <span className="text-xs text-gray-400 font-mono">
                        {cert.credential}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
              <a
                href="/projects"
                className="px-8 py-3 border border-purple-500 text-purple-300 rounded-lg font-semibold hover:bg-purple-500/20 transition-all duration-300"
              >
                View Projects
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 
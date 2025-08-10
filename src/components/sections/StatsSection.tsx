'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Users, Globe, Zap, Shield, Code, Award, Clock, Star } from 'lucide-react';

const stats = [
  {
    icon: Code,
    number: 500000,
    suffix: '+',
    label: 'Lines of Code',
    description: 'Clean, maintainable code across multiple projects',
  },
  {
    icon: Award,
    number: 15,
    suffix: '+',
    label: 'AWS Certifications',
    description: 'Solutions Architect, Developer, and DevOps certified',
  },
  {
    icon: Zap,
    number: 99.9,
    suffix: '%',
    label: 'System Uptime',
    description: 'Reliable infrastructure and monitoring',
  },
  {
    icon: Clock,
    number: 2000,
    suffix: '+',
    label: 'Hours of Development',
    description: 'Dedicated to building exceptional solutions',
  },
  {
    icon: Star,
    number: 50,
    suffix: '+',
    label: 'Projects Completed',
    description: 'From startups to enterprise solutions',
  },
  {
    icon: Users,
    number: 25,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Satisfied with delivered solutions',
  },
];

export function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section bg-gradient-to-r from-primary-600 to-accent-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            My Journey in Numbers
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Quantifying the impact and experience gained through years of 
            software engineering and AWS architecture work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  stat: typeof stats[0];
  index: number;
  inView: boolean;
}

function StatCard({ stat, index, inView }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center group"
    >
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
          <stat.icon className="w-8 h-8 text-white" />
        </div>
        
        <div className="text-4xl lg:text-5xl font-bold mb-2">
          {inView && (
            <CountUp
              end={stat.number}
              start={0}
              duration={2}
              decimals={stat.number % 1 === 0 ? 0 : 1}
              suffix={stat.suffix}
            />
          )}
          {!inView && `0${stat.suffix}`}
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
        <p className="text-primary-100 text-sm">{stat.description}</p>
      </div>
    </motion.div>
  );
} 
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechFlow Inc.',
    image: '/api/placeholder/60/60',
    content: 'TechCorp has transformed our entire infrastructure. The AI-powered analytics have given us insights we never had before, and the performance is incredible.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'VP of Engineering',
    company: 'InnovateCorp',
    image: '/api/placeholder/60/60',
    content: 'The scalability and security features are exactly what we needed. Our team can focus on building great products instead of managing infrastructure.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Product',
    company: 'FutureTech',
    image: '/api/placeholder/60/60',
    content: 'The developer experience is unmatched. The APIs are intuitive, documentation is comprehensive, and the support team is incredibly responsive.',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'CEO',
    company: 'StartupXYZ',
    image: '/api/placeholder/60/60',
    content: 'We went from zero to production in record time thanks to TechCorp. The platform handles our growth seamlessly without any performance issues.',
    rating: 5,
  },
  {
    name: 'Lisa Thompson',
    role: 'Director of Operations',
    company: 'Enterprise Solutions',
    image: '/api/placeholder/60/60',
    content: 'The enterprise-grade security and compliance features give us peace of mind. We can trust TechCorp with our most sensitive data.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'Lead Developer',
    company: 'Digital Dynamics',
    image: '/api/placeholder/60/60',
    content: 'The real-time monitoring and alerting system has saved us countless hours. We can proactively address issues before they impact our users.',
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section bg-secondary-50 dark:bg-secondary-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders and innovators 
            have to say about their experience with TechCorp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-secondary-600 dark:text-secondary-400 mb-8">
            Trusted by companies of all sizes
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Company logos would go here */}
            <div className="h-8 w-24 bg-secondary-300 dark:bg-secondary-600 rounded"></div>
            <div className="h-8 w-24 bg-secondary-300 dark:bg-secondary-600 rounded"></div>
            <div className="h-8 w-24 bg-secondary-300 dark:bg-secondary-600 rounded"></div>
            <div className="h-8 w-24 bg-secondary-300 dark:bg-secondary-600 rounded"></div>
            <div className="h-8 w-24 bg-secondary-300 dark:bg-secondary-600 rounded"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: typeof testimonials[0];
  index: number;
  inView: boolean;
}

function TestimonialCard({ testimonial, index, inView }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="testimonial-card group"
    >
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 text-primary-200 dark:text-primary-800">
        <Quote className="w-8 h-8" />
      </div>

      {/* Rating */}
      <div className="flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
        ))}
      </div>

      {/* Content */}
      <p className="text-secondary-700 dark:text-secondary-300 mb-6 leading-relaxed">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center">
        <div className="w-12 h-12 bg-secondary-300 dark:bg-secondary-600 rounded-full mr-4"></div>
        <div>
          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
          <p className="text-sm text-secondary-600 dark:text-secondary-400">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
} 
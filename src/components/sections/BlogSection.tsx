'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    title: 'The Future of Enterprise AI: Trends to Watch in 2024',
    excerpt: 'Discover the key artificial intelligence trends that will shape enterprise technology in the coming year.',
    author: 'Dr. Sarah Chen',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'AI & Machine Learning',
    image: '/api/placeholder/400/250',
    slug: 'future-enterprise-ai-2024',
  },
  {
    id: '2',
    title: 'Building Scalable Microservices Architecture',
    excerpt: 'Learn best practices for designing and implementing microservices that can scale with your business.',
    author: 'Michael Rodriguez',
    date: '2024-01-12',
    readTime: '8 min read',
    category: 'Architecture',
    image: '/api/placeholder/400/250',
    slug: 'scalable-microservices-architecture',
  },
  {
    id: '3',
    title: 'Zero-Trust Security: A Complete Implementation Guide',
    excerpt: 'Implement zero-trust security principles to protect your organization from modern cyber threats.',
    author: 'Lisa Thompson',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Security',
    image: '/api/placeholder/400/250',
    slug: 'zero-trust-security-implementation',
  },
];

export function BlogSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section bg-white dark:bg-secondary-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Latest Insights & Updates
          </h2>
          <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
            Stay ahead of the curve with our latest articles, tutorials, and industry insights 
            from our team of experts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold group"
          >
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

interface BlogCardProps {
  post: typeof blogPosts[0];
  index: number;
  inView: boolean;
}

function BlogCard({ post, index, inView }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="blog-card group"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <div className="blog-image bg-secondary-200 dark:bg-secondary-700"></div>
        <div className="absolute top-4 left-4">
          <span className="badge badge-primary text-xs">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="blog-content">
        {/* Meta */}
        <div className="blog-meta">
          <div className="flex items-center text-secondary-500 dark:text-secondary-400">
            <User className="w-4 h-4 mr-1" />
            <span className="text-sm">{post.author}</span>
          </div>
          <div className="flex items-center text-secondary-500 dark:text-secondary-400">
            <Calendar className="w-4 h-4 mr-1" />
            <span className="text-sm">{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center text-secondary-500 dark:text-secondary-400">
            <Clock className="w-4 h-4 mr-1" />
            <span className="text-sm">{post.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-secondary-600 dark:text-secondary-400 mb-4 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Read More */}
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium group"
        >
          Read More
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  );
} 
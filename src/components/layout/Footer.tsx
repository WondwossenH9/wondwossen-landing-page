'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Twitter,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from 'lucide-react';

const footerLinks = {
  portfolio: [
    { name: 'About Me', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Experience', href: '/experience' },
    { name: 'Resume', href: '/resume' },
  ],
  services: [
    { name: 'Full-Stack Development', href: '/services/fullstack' },
    { name: 'AWS Architecture', href: '/services/aws' },
    { name: 'Cloud Migration', href: '/services/migration' },
    { name: 'DevOps Consulting', href: '/services/devops' },
    { name: 'System Design', href: '/services/system-design' },
  ],
  resources: [
    { name: 'GitHub', href: 'https://github.com/yourusername', external: true },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', external: true },
    { name: 'AWS Certifications', href: '/certifications' },
    { name: 'Contact', href: '/contact' },
  ],

};

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/yourusername', icon: Github },
  { name: 'Twitter', href: 'https://twitter.com/yourusername', icon: Twitter },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Personal Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">W</span>
                </div>
                <span className="text-xl font-bold">Wondwossen Hailu</span>
              </Link>
              <p className="text-secondary-300 mb-6 max-w-md">
                Software Engineer & AWS Solutions Architect specializing in cloud-native applications, 
                microservices architecture, and scalable solutions.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-secondary-300">
                  <Mail className="w-4 h-4" />
                  <span>wondwossenhailu7@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-secondary-300">
                  <Phone className="w-4 h-4" />
                  <span>+251913266990</span>
                </div>
                <div className="flex items-center space-x-3 text-secondary-300">
                  <MapPin className="w-4 h-4" />
                  <span>Addis Ababa, Ethiopia</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Portfolio Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Portfolio</h3>
            <ul className="space-y-2">
              {footerLinks.portfolio.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="footer-link text-secondary-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="footer-link text-secondary-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="footer-link text-secondary-300 hover:text-white transition-colors flex items-center"
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                  >
                    {link.name}
                    {link.external && <ExternalLink className="w-3 h-3 ml-1" />}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-700 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center space-x-4"
            >
              <span className="text-secondary-300 text-sm">Connect with me:</span>
              <div className="flex items-center space-x-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="social-icon hover:text-primary-400 transition-colors"
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center space-x-3"
            >
              <span className="text-secondary-300 text-sm">Available for hire:</span>
              <Link
                href="/contact"
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
              >
                Get In Touch
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-secondary-400 text-sm"
          >
            © {currentYear} Wondwossen Hailu. All rights reserved.
          </motion.div>


        </div>
      </div>
    </footer>
  );
} 
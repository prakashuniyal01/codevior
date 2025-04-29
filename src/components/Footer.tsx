'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Codevior</h3>
            <p className="text-gray-400 mb-4">
              Your trusted technology partner for innovative solutions and digital transformation.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} className="flex items-center">
                  <ArrowRight size={16} className="mr-2 text-purple-500" />
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} className="flex items-center">
                  <ArrowRight size={16} className="mr-2 text-purple-500" />
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-purple-500 mt-1" />
                <span className="text-gray-400">123 Tech Street, Digital City, 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-purple-500" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-purple-500" />
                <span className="text-gray-400">contact@codevior.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Codevior. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' },
];

const services = [
  { label: 'App Development', href: '/services#app-development' },
  { label: 'Web Development', href: '/services#web-development' },
  { label: 'Web Design', href: '/services#web-design' },
  { label: 'Graphic Design', href: '/services#graphic-design' },
  { label: 'LLM Solutions', href: '/services#llm-solutions' },
];

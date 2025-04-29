'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Smartphone,
  Code2,
  Palette,
  Brush,
  Bot,
  RefreshCw,
  Star,
  Zap,
  Shield,
  ArrowRight,
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Services() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Comprehensive technology solutions to help your business thrive in the digital age
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="text-purple-600 mb-4">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href={`/services/${service.link}`}
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12"
          >
            Why Choose Us
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-md"
              >
                <div className="text-purple-600 mb-3 sm:mb-4">
                  <benefit.icon className="w-10 h-10" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let&apos;s discuss how we can help your business grow
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description:
      'Custom web applications built with modern technologies to meet your specific needs.',
    link: 'web-development',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    link: 'app-development',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that enhance user experience.',
    link: 'web-design',
  },
  {
    icon: Brush,
    title: 'Graphic Design',
    description:
      'Creative visual solutions that help your brand stand out and communicate effectively.',
    link: 'graphic-design',
  },
  {
    icon: Bot,
    title: 'LLM Solutions',
    description: 'Leverage the power of Large Language Models to enhance your business operations.',
    link: 'llm-solutions',
  },
  {
    icon: RefreshCw,
    title: 'Digital Transformation',
    description:
      'Transform your business with cutting-edge digital solutions that drive growth and efficiency.',
    link: 'digital-transformation',
  },
];

const benefits = [
  {
    icon: Star,
    title: 'Expert Team',
    description:
      'Our team consists of experienced professionals with expertise in various technologies.',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description:
      'We prioritize efficient development processes to deliver projects on time and within budget.',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description:
      'Rigorous testing and quality control ensure that our solutions meet the highest standards.',
  },
];

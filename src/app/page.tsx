'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Palette, Brush, Bot, RefreshCw, ArrowRight } from 'lucide-react';
import heroBg from '../assets/images/hero-bg.jpg';
import aboutUsImage from '../assets/images/about-us.png';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat text-white" 
      style={{ backgroundImage: `url(${heroBg.src})` }}>
        <div className="absolute inset-0 bg-black/50 " />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Your Technology Partner
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8"
          >
            Building innovative solutions for your business needs
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 ">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <motion.div whileHover={{ scale: 1.1 }} className="text-purple-600 mb-6">
                  <service.icon className="w-12 h-12" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={`/services/${service.link}`}
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">About Us</h2>
              <p className="text-gray-600 mb-6">
                We are a team of passionate developers and designers dedicated to creating
                innovative solutions that help businesses grow and succeed in the digital world.
              </p>
              <motion.div whileHover={{ x: 10 }}>
                <Link href="/about" className="text-purple-600 font-semibold hover:text-purple-700">
                  Learn More →
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96"
            >
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <img 
                  src={aboutUsImage.src} 
                  alt="About Us" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s discuss how we can help your business grow
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
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

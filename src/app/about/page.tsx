'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Lightbulb, Target, Users, Code2 } from 'lucide-react';
import aboutUsImage from '../../assets/images/about-us.png';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-6"
          >
            <Code2 className="w-16 h-16" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl max-w-3xl mx-auto"
          >
            We&apos;re a team of passionate developers and designers dedicated to creating
            innovative solutions.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded with a vision to transform businesses through technology, we&apos;ve grown
                into a team of experts who are passionate about creating innovative solutions that
                drive growth and success.
              </p>
              <p className="text-gray-600 mb-6">
                We believe in the power of technology to solve complex problems and create
                opportunities. Our team combines technical expertise with creative thinking to
                deliver solutions that make a difference.
              </p>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96"
            >
              {/* <div className="absolute inset-0 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Team Image</span>
              </div> */}
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

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-purple-600 mb-4">
                  <value.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let&apos;s discuss how we can help your business grow
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We constantly explore new technologies and approaches to deliver cutting-edge solutions.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description:
      'We strive for excellence in everything we do, from code quality to user experience.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and close collaboration with our clients.',
  },
];

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-xl sm:text-2xl font-bold text-purple-600">
              Codevior
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-4 lg:space-x-8"
          >
            <Link href="/" className="text-gray-600 hover:text-purple-600 text-sm lg:text-base">
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-600 hover:text-purple-600 text-sm lg:text-base"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-purple-600 text-sm lg:text-base"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-purple-600 text-sm lg:text-base"
            >
              Contact
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="bg-purple-600 text-white px-4 lg:px-6 py-2 rounded-full hover:bg-purple-700 transition-colors text-sm lg:text-base"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col space-y-4">
                {['Home', 'Services', 'About', 'Contact'].map((item) => (
                  <motion.div key={item} variants={menuItemVariants} whileHover={{ x: 10 }}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-gray-600 hover:text-purple-600 block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={menuItemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors text-center block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

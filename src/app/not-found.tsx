'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 flex items-center justify-center px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          {/* 404 Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <h1 className="text-9xl font-bold text-purple-600 mb-4">404</h1>
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 rounded-full opacity-50"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 45, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-300 rounded-full opacity-50"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [45, 0, 45],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Oops! Page Not Found</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get
              you back on track.
            </p>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg border border-purple-600 hover:bg-purple-50 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </motion.button>
          </motion.div>

          {/* Decorative Elements */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <motion.div
              className="absolute -top-1/2 -left-1/2 w-full h-full bg-purple-100 rounded-full opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 45, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <motion.div
              className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-200 rounded-full opacity-20"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [45, 0, 45],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

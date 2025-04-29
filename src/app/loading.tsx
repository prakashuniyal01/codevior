'use client';

import { Loading } from '@/components/ui/loading';
import { motion } from 'framer-motion';

export default function LoadingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <Loading fullScreen size="lg" />

        {/* Decorative Background Elements */}
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
  );
}

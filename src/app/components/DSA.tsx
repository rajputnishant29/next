'use client'

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
const RotatingImage = dynamic(() => import('../components/RotatingImage'), { ssr: false });

const DSA: React.FC = () => {
  return (
    <section className="min-h-screen px-4 py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
         <div className="w-full h-screen">
      <RotatingImage imageUrl="/images/profileCard.png" />
    </div>
        {/* Right: Info */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Data Structures & Algorithms</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            I actively practice DSA to improve my logical and problem-solving abilities. From solving challenges on
            LeetCode to competitive programming on Codeforces, I stay consistent in building a strong foundation.
          </p>

          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>📈 300+ problems solved on LeetCode and GFG</li>
            <li>🏆 Top 65% on Leetcode</li>
            <li>👨‍💻 Leetcode Rating 1450</li>
            {/* <li>⭐ 5 Star in Problem Solving on HackerRank</li> */}
          </ul>

          <div className="flex gap-4 pt-4">
            <a
              href="https://leetcode.com/rajputnishant29"
              target="_blank"
              className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-lg text-white font-semibold transition-all duration-300 border border-white/30 flex items-center gap-2 hover:border-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.5),0_0_40px_rgba(236,72,153,0.2)]"
            >
              LeetCode
            </a>
            <a
              href="https://codeforces.com/profile/your-username"
              target="_blank"
              className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-lg text-white font-semibold transition-all duration-300 border border-white/30 flex items-center gap-2 hover:border-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.5),0_0_40px_rgba(236,72,153,0.2)]"
            >
              GFG
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DSA;

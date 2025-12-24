'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cinzel } from 'next/font/google';
import RotatingCards from '../components/Skills';
// import CodeBlocks3D from '../components/3DElement';


const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const About = () => {
  return (
    <div>
        <section className="min-h-screen bg-black text-white px-6 py-20 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-3xl text-center space-y-6"
      >
        <h2 className={`${cinzel.className} text-4xl md:text-5xl font-bold`}>
          About Me
        </h2>

        <p className="text-white/80 text-lg leading-relaxed">
          I'm <span className="font-semibold text-white">Nishant Rajput</span>, a passionate Full Stack Developer who builds responsive web and mobile applications with a focus on clean architecture and great UX. I specialize in the MERN stack and love solving real-world problems using DSA.
        </p>

        <p className="text-white/80 text-lg leading-relaxed">
          Whether it’s building a dynamic React frontend, a RESTful Node.js API, or deploying a complete system, I enjoy bringing ideas to life through code. I’m also constantly exploring new technologies and improving my skills through practice and collaboration.
        </p>
      </motion.div>

    </section>
    {/* <div className='sticky top-0 h-screen'>

    <RotatingCards/>

    </div> */}
    </div>
  );
};

export default About;

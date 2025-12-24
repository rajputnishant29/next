'use client';

import React from 'react';
import { Cinzel } from 'next/font/google';
import { Typewriter } from 'react-simple-typewriter';
import { div } from 'framer-motion/client';
import About from './about/page';
import RotatingCards from './components/Skills';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import DSA from './components/DSA';
import Footer from './components/Footer';

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700'],
});



function Page() {
  return (
    <div>
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white space-y-4">
      
      {/* Scrolling Background Text */}
      <div className="absolute top-1/4 left-0 w-full -translate-y-1/2 overflow-hidden pointer-events-none">
        <div className="animate-marquee whitespace-nowrap text-[15rem] opacity-25 font-serif tracking-wide text-white">
          {'FULL STACK DEVELOPER '.repeat(20)}
        </div>
      </div>

      {/* Name */}
      <h1 className={`${cinzel.className} text-md z-10 text-white text-center`}>
        NISHANT RAJPUT
      </h1>

      {/* Aesthetic Line + Typing Text */}
      <div className="z-10 flex flex-col items-center space-y-2">
        <div className="w-12 h-[1px] bg-white/40 mb-3"></div>
        <p className="text-md md:text-base text-white/80 font-mono">
          <Typewriter
            words={[
              'Building cross-platform apps that feel native...',
              'Mastering code challenges one solution at a time...',
              'Designing smooth, scalable user experiences...',
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </p>
      </div>

    </section>

    <About/>
    <main>
      <Skills />
    </main>
    <Projects/>
    <Certificates/>
    <DSA/>
    <Footer/>
    </div>
  );
}

export default Page;

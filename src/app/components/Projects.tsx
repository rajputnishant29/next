'use client';

import Image from 'next/image';
import React, { useState} from 'react';

const projects = [
  {
    id: 1,
    title: 'AI Travel Planner',
    description: 'A full-stack AI-based travel assistant with custom itinerary generation.',
    image: '/images/TravelPlanner.png',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
    githubUrl: 'https://github.com/rajputnishant29/Travel-Planner',
    liveUrl: 'https://686aadd2deea21b6dfbeb147--travelplanner29.netlify.app',
  },
  {
    id: 2,
    title: 'Chatty',
    description: 'An chat application using Web Sockets and NodeJS.',
    image: '/images/Chatty.png',
    technologies: ['React', 'Express.js', 'Node.js', 'MongoDB', 'Socket.IO'],
    githubUrl: 'https://github.com/rajputnishant29/ChattyFrontend',
    liveUrl: 'https://chatty29.netlify.app',
  },
  {
    id: 3,
    title: 'OweZone',
    description: 'A collaborative expense splitting app for roommates.',
    image: '/images/OwezonePoster.png',
    technologies: ['ReactNative', 'Node.js', 'Express.js', 'MongoDB'],
    githubUrl: 'https://github.com/',
    liveUrl: '',
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  const nextSlide = () => {
    setSlideDirection('right');
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setSlideDirection('left');
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const currentProject = projects[currentIndex];

  return (
    <section className="w-full min-h-screen py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-20 animate-fade-in">
          Projects
        </h2>

        <div className="relative">
          {/* Project Slide */}
          <div className={`relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md w-[90%] mx-auto`}>
            <div
              key={currentProject.id}
              className={`relative h-400px md:h-500px ${
                slideDirection === 'left' ? 'animate-slide-in-left' : 'animate-slide-in-right'
              }`}
            >
              <Image
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{currentProject.title}</h3>
                <p className="text-lg mb-6 text-gray-200 max-w-2xl">{currentProject.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {currentProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium border border-white/30 transition-all duration-300 hover:border-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.5),0_0_40px_rgba(236,72,153,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-lg text-white font-semibold transition-all duration-300 border border-white/30 flex items-center gap-2 hover:border-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.5),0_0_40px_rgba(236,72,153,0.2)]"
                  >
                    <svg className="w-5 h-5 " fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12..." />
                    </svg>
                    View Code
                  </a>
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 flex items-center gap-2 border border-white/30 hover:border-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.5),0_0_40px_rgba(236,72,153,0.2)]"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6..." />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Nav Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 border border-white/30 hover:border-white/50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 border border-white/30 hover:border-white/50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40%);
          }
          to {
            opacity: 1;
            transform: translateX(0%);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40%);
          }
          to {
            opacity: 1;
            transform: translateX(0%);
          }
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Projects;

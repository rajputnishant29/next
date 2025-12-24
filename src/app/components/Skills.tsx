"use client";

import Image from "next/image";
import React from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      {
        title: "HTML",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      },
      {
        title: "CSS",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
      },
      {
        title: "JavaScript",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        title: "TypeScript",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      },
      {
        title: "C",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
      },
      {
        title: "C++",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
      },
    ],
  },
  {
    title: "Frontend",
    skills: [
      {
        title: "React",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      {
        title: "Next.js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
      },
      {
        title: "React Native",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg",
      },
      {
        title: "Tailwind CSS",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        title: "Three.js",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg",
        needsBg: true,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        title: "Node.js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      },
      {
        title: "Express.js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
        needsBg: true,
      },
      {
        title: "Socket.IO",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
        needsBg: true,
      },
      {
        title: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      },
      {
        title: "Firebase",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        title: "Github",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        needsBg: true,
      },
      {
        title: "VS Code",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
      },
      {
        title: "Postman",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
      },
      {
        title: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
      },
    ],
  },
];

const Skills = () => {
  return (
    <section className="w-full min-h-screen py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-20 animate-fade-in">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="backdrop-blur-md rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="backdrop-blur-md rounded-2xl p-6 border border-white/20 transition-all duration-500 animate-slide-up hover:border-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.5),0_0_40px_rgba(236,72,153,0.2)]"
                    style={{ animationDelay: `${categoryIndex * 200}ms` }}
                  >
                    <Image
                      src={skill.image}
                      alt={skill.title}
                      className={`w-12 h-12 object-contain mb-2 ${
                        skill.needsBg ? "bg-white p-0.5" : ""
                      }`}
                    />
                    <h4 className="text-sm font-semibold text-white">
                      {skill.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Skills;

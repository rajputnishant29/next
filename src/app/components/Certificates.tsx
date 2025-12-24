'use-client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Certificate {
  title: string;
  color: string;
  id: number;
  image: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'AWS Certified',
    color: 'from-blue-500 to-blue-700',
    image: '/images/AWS.png',
  },
  {
    id: 2,
    title: 'Deloitte JobSim',
    color: 'from-green-400 to-blue-400',
    image: '/images/Delloitte.png',
  },
  {
    id: 3,
    title: 'Samsung',
    color: 'from-green-400 to-blue-400',
    image: '/images/Samsung.png',
  },
  {
    id: 4,
    title: 'IOT',
    color: 'from-green-400 to-blue-400',
    image: '/images/IOT.png',
  },
  {
    id:5,
    title: 'HackMERN',
    color: 'from-green-400 to-blue-400',
    image: '/images/HackMERN.png',
  },
  {
    id:6,
    title: 'LetsCode',
    color: 'from-green-400 to-blue-400',
    image: '/images/LetsCode.png',
  },
];

const ExpandingCertificates: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
 <div>
           <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-5 animate-fade-in">
          Certificates
        </h2>
     <div className="flex items-center justify-center min-h-screen px-4">
      <div className="flex gap-4 w-full max-w-7xl h-450px">
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            onMouseEnter={() => setActive(cert.id)}
            onMouseLeave={() => setActive(null)}
            animate={{
              flex: active === cert.id ? 5 : 0.5,
            }}
            transition={{
              type: 'tween',
              stiffness: 60,
              damping: 18,
              mass: 0.8,
            }}
            className={`relative rounded-xl overflow-hidden cursor-pointer group transition-all duration-500 border border-white/30 flex items-center gap-2 hover:border-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.5),0_0_40px_rgba(236,72,153,0.2)]`}
          >
            {/* Background image */}
            <Image
    src={cert.image}
    alt={cert.title}
    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
  />

  {/* object-contain image shown on hover */}
  <Image
    src={cert.image}
    alt={cert.title}
    className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-700"
  />

            {/* Overlay */}
            <div className="absolute inset-0  duration-300 flex flex-col justify-between p-4">
              <h3 className="self-end text-xl font-semibold">{cert.title}</h3>
              <div className="bg-white text-black w-8 h-8 rounded-full text-center leading-8 font-bold shadow-md self-end">
                {cert.id}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
 </div>
  );
};

export default ExpandingCertificates;

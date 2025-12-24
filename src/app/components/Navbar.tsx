'use client';

import React from 'react';
import Link from 'next/link';

interface MenuItem {
  href: string;
  label: string;
}

const menuItems: MenuItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/certificates', label: 'Certificates' },
  { href: '/dsa', label: 'DSA' },
  { href: '/contact', label: 'Contact' },
];

const Sidebar: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-16 bg-black border-r border-pink-500/40 flex flex-col justify-between items-center py-8 z-50 shadow-[0_0_20px_rgba(236,72,153,0.5),0_0_40px_rgba(236,72,153,0.2)]">
      <div className="flex flex-col gap-6 mt-6 mb-6 justify-between flex-1">
        {menuItems.map((item: MenuItem) => (
          <Link key={item.href} href={item.href}>
            <div className="group flex flex-col items-center cursor-pointer">
              <span className="-rotate-90 text-sm font-semibold text-gray-300 group-hover:text-pink-400 transition duration-300">
                {item.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

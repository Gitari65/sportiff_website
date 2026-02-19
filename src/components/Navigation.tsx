'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-16 h-16 relative">
              <Image
                src="/sportiff_logo.png"
                alt="Kerugoya Sportiff FC Logo"
                width={64}
                height={64}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div>
              <div className="text-xl font-light text-slate-800 tracking-wide">Kerugoya</div>
              <div className="text-sm font-medium text-secondary tracking-widest -mt-1">SPORTIFF FC</div>
            </div>
          </Link>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-slate-600 transform transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-slate-600 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-slate-600 transform transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>

          <ul className={`${isOpen ? 'flex' : 'hidden'} md:flex md:gap-8 absolute md:static top-full left-0 right-0 bg-white/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none flex-col md:flex-row p-6 md:p-0 shadow-xl md:shadow-none border-t md:border-t-0 border-slate-200/50`}>
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/teams', label: 'Teams' },
              { href: '/gallery', label: 'Gallery' },
              { href: '/donate', label: 'Support' },
              { href: '/contact', label: 'Contact' }
            ].map((item) => (
              <li key={item.href} className="group">
                <Link 
                  href={item.href} 
                  className="block py-2 md:py-0 text-slate-700 hover:text-tertiary font-medium tracking-wide transition-colors duration-300 relative"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-tertiary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

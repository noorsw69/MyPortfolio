"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-zinc-100 px-6 sm:px-16 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full">

        {/* Logo */}
        <Link href="/" className="text-xl font-black tracking-tight text-zinc-900 group">
          Noor<span className="text-violet-600 transition-colors group-hover:text-zinc-900">.</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-base font-bold">
          <Link href="/" className="text-zinc-900 hover:text-violet-600 transition-colors">Home</Link>
          <Link href="/projects" className="text-zinc-900 hover:text-violet-600 transition-colors">Projects</Link>
          <Link href="/about" className="text-zinc-900 hover:text-violet-600 transition-colors">About</Link>
          <Link href="/skills" className="text-zinc-900 hover:text-violet-600 transition-colors">Skills</Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Mail Icon - always visible */}
          <Link
            href="/#contact"
            aria-label="Contact Me"
            className="w-10 h-10 rounded-full border border-zinc-200 text-zinc-700 hover:text-violet-600 hover:border-violet-600 flex items-center justify-center transition-all bg-white hover:scale-105 shadow-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </Link>

          {/* Hamburger - mobile only */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full border border-zinc-200 bg-white shadow-sm"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-zinc-900 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-zinc-900 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-zinc-900 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-zinc-100 px-6 py-6 flex flex-col gap-5 shadow-lg">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-bold text-zinc-900 hover:text-violet-600 transition-colors">Home</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)} className="text-lg font-bold text-zinc-900 hover:text-violet-600 transition-colors">Projects</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-bold text-zinc-900 hover:text-violet-600 transition-colors">About</Link>
          <Link href="/skills" onClick={() => setIsOpen(false)} className="text-lg font-bold text-zinc-900 hover:text-violet-600 transition-colors">Skills</Link>
        </div>
      )}
    </nav>
  );
}
import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="pt-24 pb-12 bg-white text-zinc-900 px-6 sm:px-16 max-w-7xl mx-auto w-full border-t border-zinc-100">
      {/* 2-Column Responsive Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full mb-16">
        
        {/* Left Side: Content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <h2 className="text-5xl font-extrabold tracking-tight text-zinc-900 mb-6">
            Get In Touch<span className="text-violet-600">.</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-zinc-800 max-w-xl mb-8 font-normal leading-relaxed">
            Looking to partner or work together? Reach out through any of these platforms, and I'll get back to you as soon as possible.
          </p>

          {/* Interactive Info Rows */}
          <div className="flex flex-col gap-4">
            {/* Row 1: Email */}
            <div className="flex items-center gap-3 text-zinc-800 font-medium hover:text-violet-600 transition-colors w-fit group">
              <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 group-hover:border-violet-300 group-hover:text-violet-600 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <a href="mailto:your.email@example.com" className="text-base font-normal">
                noorunnisasoomro7@gmail.com
              </a>
            </div>

            {/* Row 2: Contact Number */}
            <div className="flex items-center gap-3 text-zinc-800 font-medium hover:text-violet-600 transition-colors w-fit group">
              <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 group-hover:border-violet-300 group-hover:text-violet-600 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <a href="tel:+923001234567" className="text-base font-normal tracking-wide">
                +92 303 3516675
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Social Circles */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
          <div className="flex items-center gap-6">
            <a 
              href="https://www.linkedin.com/in/noor-un-nisa-soomro-a12077263" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-16 h-16 rounded-full border border-zinc-200 hover:border-violet-600 text-zinc-500 hover:text-violet-600 flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_20px_rgba(124,58,237,0.15)] transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            <a 
              href="https://github.com/noorsw69" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-16 h-16 rounded-full border border-zinc-200 hover:border-violet-600 text-zinc-500 hover:text-violet-600 flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_20px_rgba(124,58,237,0.15)] transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>

            <a 
              href="mailto:noorunnisasoomro7@gmail.com"
              aria-label="Send Email"
              className="w-16 h-16 rounded-full border border-zinc-200 hover:border-violet-600 text-zinc-500 hover:text-violet-600 flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_20px_rgba(124,58,237,0.15)] transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Centered Copyright Section matching image_d2537e.png */}
      <div className="border-t border-zinc-100 pt-8 text-center text-sm text-zinc-800 font-normal space-y-1">
        <p>© 2026 All Rights Reserved.</p>
        <p className="flex items-center justify-center gap-1.5">
          Made with <span className="text-violet-500 text-xs animate-pulse">💜</span> by Noor un Nisa
        </p>
      </div>

    </section>
  );
}
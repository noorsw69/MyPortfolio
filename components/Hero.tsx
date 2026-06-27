"use client";
import React from 'react';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="h-screen w-full flex items-center justify-center bg-white text-zinc-900 px-6 sm:px-16 pt-8 relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full max-w-7xl mx-auto overflow-hidden">
        
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 text-left">
          
          {/* Greeting */}
          <div className="text-lg sm:text-xl font-medium text-zinc-800 mb-3 flex items-center gap-2 select-none">
            Hey, I'm Noor un Nisa <span className="animate-bounce">👋</span>
          </div>

          {/* Main Large Title */}
          <h1 
            className="text-6xl sm:text-7xl md:text-[5.5rem] tracking-[-0.04em] text-zinc-900 flex flex-col mb-5 select-none"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            <span className="leading-[1.05]">
              <span className="text-violet-600 font-black">Front</span>
              <span className="text-zinc-900 font-extrabold">end</span>
            </span>
            <span className="text-zinc-900 font-black leading-[1.05]">Developer</span>
          </h1>

          {/* Intro Description */}
          <p className="text-base sm:text-lg text-zinc-800 max-w-xl mb-8 font-normal leading-relaxed tracking-tight">
            I'm a frontend developer based in Pakistan. I'll help you build beautiful websites your users will love.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 z-10 w-full sm:w-auto">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center text-center px-8 py-3.5 bg-[#18191c] text-white font-bold rounded-xl shadow-[0_10px_20px_rgba(24,25,28,0.2)] hover:opacity-95 transition text-sm sm:text-base tracking-tight w-auto min-w-fit h-auto whitespace-nowrap border border-transparent"
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center text-center px-8 py-3.5 bg-[#f4f4f6] text-zinc-800 font-semibold rounded-xl shadow-[0_10px_20px_rgba(218,218,222,0.15)] hover:bg-[#eaeaea] transition text-sm sm:text-base tracking-tight w-auto min-w-fit h-auto whitespace-nowrap border border-zinc-200/80"
            >
              Browse Projects
            </a>
          </div>
        </div>

        {/* Right Column: Profile Image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 w-full mt-16 lg:mt-0">
          <div
            className="relative rounded-full border border-violet-300 flex items-center justify-center bg-transparent shrink-0"
            style={{ width: 'min(420px, 80vw)', height: 'min(420px, 80vw)' }}
          >
            <div
              className="rounded-full border border-zinc-300/80 bg-white p-1.5"
              style={{ width: 'min(357px, 68vw)', height: 'min(357px, 68vw)' }}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-zinc-50">
                <img
                  src="/profile-photo.jpeg"
                  alt="Noor"
                  className="w-full h-full object-cover grayscale contrast-110"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
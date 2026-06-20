import React from 'react';
import Link from 'next/link';

export default function AboutSummary() {
  return (
    <section id="about-summary" className="py-24 bg-zinc-50 text-zinc-900 px-6 sm:px-16 max-w-7xl mx-auto w-full rounded-[3rem] my-12">
      <div className="max-w-3xl">
        <h2 className="text-5xl font-extrabold tracking-tight mb-6 text-zinc-900">
          My Background<span className="text-violet-600">.</span>
        </h2>
        
        <p className="text-xl text-zinc-800 font-normal leading-relaxed mb-8">
          I'm a software engineer specialized in crafting responsive, scalable frontend web architectures. I bridge the gap between complex engineering systems and beautiful user experiences.
        </p>

        {/* Action Button linking to your dedicated full about page */}
        <Link 
          href="/about"
          className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-violet-600 text-white font-medium text-sm px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg shadow-sm group"
        >
          Read Full Story & Experience
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
}
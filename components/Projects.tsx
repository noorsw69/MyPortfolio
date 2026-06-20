import React from 'react';
// Import the optimized Next.js Image component
import Image from 'next/image';

export default function Projects() {
  const projectData = [
    {
      id: 1,
      title: "EvOrganize",
      description: "A comprehensive MERN-stack event management platform built as a Final Year Project. Features dynamic scheduling tools, client dashboards, and smooth data management for handling large-scale coordination workflows.",
      image: "/EvOrganize.png", // Updated to match your exact capitalization
      liveLink: "#",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"]
    },
    {
      id: 2,
      title: "E-Commerce Web Application",
      description: "A modern shopping experience featuring dynamic cart flows, smooth interface handling, and secure, production-ready Firebase client authentication tracking.",
      image: "/Ecommerce.png", // Updated to match your exact capitalization
      liveLink: "#",
      tags: ["React.js", "Firebase Auth", "Tailwind CSS", "JavaScript"]
    },
    {
      id: 3,
      title: "Unsplash Image Gallery",
      description: "A high-performance image streaming application featuring integrated Unsplash REST API calls, dynamic pagination tracking, and a fluid responsive grid system.",
      image: "/Gallery.png", // Updated to match your exact capitalization
      liveLink: "#",
      tags: ["React.js", "Unsplash API", "Tailwind CSS", "JavaScript"]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white text-zinc-900 px-6 sm:px-16 max-w-7xl mx-auto w-full">
      
      {/* Dynamic Header */}
      <h2 className="text-5xl font-extrabold tracking-tight mb-16 text-zinc-900">
        Projects<span className="text-violet-600">.</span>
      </h2>

      {/* Two-Column Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
        {projectData.map((project) => (
          <div key={project.id} className="flex flex-col group cursor-pointer">
            
            {/* The Image Canvas Container */}
            <div className="aspect-[16/10] w-full bg-zinc-100 rounded-[2rem] overflow-hidden border border-zinc-200 shadow-sm relative mb-6 transition-all duration-300 group-hover:shadow-md group-hover:border-zinc-300">
              
              {/* Rendered Optimized Project Screenshot */}
              <Image 
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                sizes="(max-w-7xl) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={project.id === 1} // Optimizes load time for above-the-fold content
              />

            </div>

            {/* Project Details Title Layer */}
            <a 
              href={project.liveLink} 
              className="inline-flex items-center gap-2 text-2xl font-bold text-zinc-950 mb-3 tracking-tight group-hover:text-violet-600 transition-colors"
            >
              {project.title}
              {/* SVG Modern Inline Arrow Circle */}
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-violet-600 text-violet-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
            </a>

            {/* Description Paragraph */}
            <p className="text-zinc-800 font-normal text-base leading-relaxed max-w-xl mb-4">
  {project.description}
</p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="text-xs font-medium bg-zinc-100 text-zinc-600 px-3 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
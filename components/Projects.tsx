import React from 'react';
import Image from 'next/image';

export default function Projects() {
  const projectData = [
    {
      id: 1,
      title: "EvOrganize",
      description: "A full-stack web platform designed to streamline event scheduling, registration, and user dashboards.University team project built using the MERN stack. Contributed to the frontend by developing responsive React components, implementing UI features, and collaborating on the event management platform.",
      image: "/EvOrganize.PNG",
      liveLink: "https://github.com/muhammadwaryal/Event-Management-Project.git",
      mobile: false,
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"]
    },
    {
      id: 2,
      title: "E-Commerce Web Application",
      description: "A fully functional e-commerce web application featuring secure user authentication with Firebase. Users can browse products, manage a dynamic shopping cart, and enjoy a seamless shopping experience through a responsive and intuitive interface.",
      image: "/Ecommerce.png",
      liveLink: "https://github.com/noorsw69/interneeProject7.git",
      mobile: false,
      tags: ["React.js", "Firebase Auth", "Tailwind CSS", "JavaScript"]
    },
    {
      id: 3,
      title: "Unsplash Image Gallery",
      description: "A responsive image gallery application powered by the Unsplash API that allows users to browse, search, and explore high-resolution images. Features include instant search, category filtering, and an interactive lightbox for an engaging browsing experience.",
      image: "/Gallery.png",
      liveLink: "https://github.com/noorsw69/interneeProject4.git",
      mobile: false,
      tags: ["React.js", "Unsplash API", "Tailwind CSS", "JavaScript"]
    },
    {
      id: 4,
      title: "SmartHabitTracker",
      description: "A cross-platform mobile application built with React Native and TypeScript to help users build consistent habits. Features include habit creation, daily streak tracking, local data persistence with AsyncStorage, and a clean dashboard for monitoring progress.",
      image: "/smartHabitTracker.png",
      liveLink: "https://github.com/noorsw69/SmartHabitTracker.git",
      mobile: true,
      tags: ["React Native", "TypeScript", "Expo", "AsyncStorage"]
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

            {project.mobile ? (
              /* Phone Mockup Frame */
              <div className="flex justify-center mb-6">
                <div className="relative w-[220px] h-[440px] bg-zinc-900 rounded-[2.5rem] border-[6px] border-zinc-800 shadow-xl overflow-hidden">
                  
                  {/* Top Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-zinc-900 rounded-b-2xl z-10" />
                  
                  {/* Screen */}
                  <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      sizes="220px"
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Bottom Bar */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-zinc-600 rounded-full z-10" />
                </div>
              </div>
            ) : (
              /* Regular Web Project Image */
              <div className="aspect-[16/10] w-full bg-zinc-100 rounded-[2rem] overflow-hidden border border-zinc-200 shadow-sm relative mb-6 transition-all duration-300 group-hover:shadow-md group-hover:border-zinc-300">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(max-w-7xl) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={project.id === 1}
                />
              </div>
            )}

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
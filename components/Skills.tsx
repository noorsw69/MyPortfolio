import React from 'react';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white text-zinc-900 px-6 sm:px-16 max-w-7xl mx-auto w-full">
      
      {/* Title with your signature violet dot */}
      <h2 className="text-5xl font-extrabold tracking-tight mb-16 text-zinc-900">
        Skills<span className="text-violet-600">.</span>
      </h2>
      
      {/* 4-Column Layout Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
        
        {/* Column 1: Core Languages & Frontend */}
        <div>
          <h3 className="font-extrabold text-lg text-zinc-950 mb-4 tracking-tight">
            Languages & Frontend
          </h3>
          <ul className="space-y-2.5 text-zinc-800 font-normal">
            <li className="hover:text-zinc-900 transition-colors cursor-default">JavaScript</li>
            <li className="hover:text-zinc-900 transition-colors cursor-default">HTML & CSS</li>
            <li className="hover:text-zinc-900 transition-colors cursor-default">React.js & Next.js</li>
            <li className="hover:text-zinc-900 transition-colors cursor-default">Tailwind CSS</li>
            <li className="hover:text-zinc-900 transition-colors cursor-default">Java</li>
          </ul>
        </div>
        
        {/* Column 2: Backend & Mobile */}
        <div>
          <h3 className="font-extrabold text-lg text-zinc-950 mb-4 tracking-tight">
            Backend & Mobile
          </h3>
          <ul className="space-y-2.5 text-zinc-800 font-normal">
            <li className="hover:text-zinc-900 transition-colors cursor-default">Node.js</li>
            <li className="hover:text-zinc-900 transition-colors cursor-default">Firebase (Firestore/Auth)</li>
            <li className="hover:text-zinc-900 transition-colors cursor-default">REST APIs</li>
            <li className="hover:text-zinc-900 transition-colors cursor-default">MongoDB</li>
            <li className="hover:text-zinc-900 transition-colors cursor-default">React Native</li>
          </ul>
        </div>

        {/* Column 3: Tools & Platforms */}
        <div>
          <h3 className="font-extrabold text-lg text-zinc-950 mb-4 tracking-tight">
            Tools & Platforms
          </h3>
          <ul className="space-y-2.5 text-zinc-800 font-normal">
            <li className="hover:text-zinc-900 transition-colors cursor-default">Git & GitHub</li>
            <li className="hover:text-zinc-900 transition-colors cursor-default">VS Code</li>
            <li className="hover:text-zinc-900 transition-colors cursor-default">Vercel Deployment</li>
            <li className="hover:text-zinc-900 transition-colors cursor-default">npm</li>
            <li className="hover:text-zinc-900 transition-colors cursor-default">Android Studio</li>
            
          </ul>
        </div>

        {/* Column 4: Soft Skills (Updated) */}
        <div>
          <h3 className="font-extrabold text-lg text-zinc-950 mb-4 tracking-tight">
            Soft Skills
          </h3>
          <ul className="space-y-2.5 text-zinc-800 font-normal">
            <li className="hover:text-zinc-900 transition-colors cursor-default">Effective Communication</li>
            <li className="hover:text-zinc-900 transition-colors cursor-default">Team Collaboration</li>
            <li className="hover:text-zinc-900 transition-colors cursor-default">Problem Solving</li>
            <li className="hover:text-zinc-900 transition-colors cursor-default">Time Management</li>
            <li className="hover:text-zinc-900 transition-colors cursor-default">Adaptability</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
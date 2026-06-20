import React from 'react';
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col justify-between">
      <Navbar />

      <div className="pt-36 pb-32 px-6 sm:px-16 max-w-7xl mx-auto w-full flex-grow">
        <div className="max-w-4xl w-full">

          {/* About Headline */}
          <h1 className="text-5xl font-black tracking-tighter text-zinc-900 mb-6 select-none">
            About me<span className="text-violet-600">.</span>
          </h1>

          {/* Intro Quote Block */}
          <div className="flex flex-row gap-6 mb-6 max-w-3xl">
            <div className="w-1.5 bg-violet-600 rounded-full flex-shrink-0 self-stretch" />
            <div className="text-lg sm:text-xl text-zinc-700 font-medium leading-relaxed space-y-4">
              <p>
                I am a passionate Software Engineer and Frontend Developer dedicated to crafting beautiful, high-performance, and user-centric web and mobile applications.
              </p>
              <p>
                Holding a BE in Software Engineering from Mehran University of Engineering and Technology, I specialize in building clean, modern, and scalable interfaces using React.js, Next.js, and Tailwind CSS.
              </p>
              <p>
                With a solid foundation in modern web architectures and clean coding practices, I thrive on turning complex design concepts into seamless pixel-perfect digital experiences that users love.
              </p>
            </div>
          </div>

          {/* Experience Section */}
          <div className="pt-24 w-full">

            <h2 className="text-5xl font-black tracking-tighter text-zinc-900 mb-16 select-none">
              My Experience<span className="text-violet-600">.</span>
            </h2>

            <div className="flex flex-col w-full">

              {/* 01: DevelopersHub */}
              <div className="flex flex-row gap-8 sm:gap-10 w-full mb-16">
                <div className="flex flex-col items-start flex-shrink-0 w-16">
                  <span className="text-5xl font-black tracking-tight text-zinc-900 leading-none select-none">
                    01
                  </span>
                  <div className="w-0.5 bg-violet-600 h-28 rounded-full mt-5 ml-3.5 opacity-90" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-violet-600 tracking-wide mb-1">
                    Frontend Developer
                  </span>
                  <h3 className="text-3xl font-black text-zinc-900 tracking-tight mb-4">
                    DevelopersHub Corporation
                  </h3>
                  <div className="text-zinc-600 text-base sm:text-lg leading-relaxed space-y-4 max-w-2xl">
                    <p>Engineered responsive web interfaces and modular frontend architectures using modern styling tools and responsive design practices.</p>
                  </div>
                </div>
              </div>

              {/* 02: Internee.pk */}
              <div className="flex flex-row gap-8 sm:gap-10 w-full mb-16">
                <div className="flex flex-col items-start flex-shrink-0 w-16">
                  <span className="text-5xl font-black tracking-tight text-zinc-900 leading-none select-none">
                    02
                  </span>
                  <div className="w-0.5 bg-violet-600 h-28 rounded-full mt-5 ml-3.5 opacity-90" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-violet-600 tracking-wide mb-1">
                    React Intern
                  </span>
                  <h3 className="text-3xl font-black text-zinc-900 tracking-tight mb-4">
                    internee.pk
                  </h3>
                  <div className="text-zinc-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                    <p>Deepened expertise in React.js by building dynamic UI components and handling structured state management.</p>
      <p>Delivered modular, scalable frontend solutions within an agile team environment.</p>
                  </div>
                </div>
              </div>

              {/* 03: State Bank of Pakistan */}
              <div className="flex flex-row gap-8 sm:gap-10 w-full mb-16">
                <div className="flex flex-col items-start flex-shrink-0 w-16">
                  <span className="text-5xl font-black tracking-tight text-zinc-900 leading-none select-none">
                    03
                  </span>
                  <div className="w-0.5 bg-violet-600 h-28 rounded-full mt-5 ml-3.5 opacity-90" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-violet-600 tracking-wide mb-1">
                    Web Development Intern
                  </span>
                  <h3 className="text-3xl font-black text-zinc-900 tracking-tight mb-4">
                    GrowIntern
                  </h3>
                  <div className="text-zinc-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                    <p>Implemented responsive web layouts and optimized interface performance.</p>
      <p>Leveraged semantic HTML, CSS, and modern JavaScript to refine user workflows and enhance visual layouts.</p>
                  </div>
                </div>
              </div>

              {/* 04: Freelance */}
              <div className="flex flex-row gap-8 sm:gap-10 w-full">
                <div className="flex flex-col items-start flex-shrink-0 w-16">
                  <span className="text-5xl font-black tracking-tight text-zinc-900 leading-none select-none">
                    04
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-violet-600 tracking-wide mb-1">
                    Summer Internship Program
                  </span>
                  <h3 className="text-3xl font-black text-zinc-900 tracking-tight mb-4">
                   State Bank of Pakistan
                  </h3>
                  <div className="text-zinc-600 text-base sm:text-lg leading-relaxed space-y-4 max-w-2xl">
                    <p>Participated in professional training and collaborative tasks within a structured corporate environment, enhancing communication, teamwork, and problem-solving skills through practical exposure.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <Contact />
    </main>
  );
}
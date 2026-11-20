'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  liveLink?: string;
  mobile: boolean;
  tags: string[];
};

type ProjectsProps = {
  featuredOnly?: boolean;
};

const projectData: Project[] = [
  {
    id: 1,
    title: 'AI Resume & Job Match Analyzer',
    description:
      'An AI-powered application that analyzes resumes against job descriptions, identifies matched and missing skills, calculates a match score, and generates personalized improvement suggestions and interview questions.',
    image: '/Resume-Analyzer.png',
    liveLink: 'https://github.com/noorsw69/AI-Resume-Analyzer.git',
    mobile: false,
    tags: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'Gemini API'],
  },
  {
    id: 2,
    title: 'Cybersecurity Log Analyzer',
    description:
      'A cybersecurity dashboard that analyzes uploaded log files, identifies suspicious login activity, and presents analysis reports with saved history and AI-generated security insights.',
    image: '/CyberAnalyzer.png',
    liveLink: 'https://github.com/noorsw69/Cybersecurity-Log-Analyzer.git',
    mobile: false,
    tags: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    id: 3,
    title: 'EvOrganize',
    description:
      'A university team project built using the MERN stack to streamline event scheduling, registration, and user dashboards. Contributed to the frontend by developing responsive React components and implementing interface features.',
    image: '/EvOrganize.PNG',
    liveLink: 'https://github.com/muhammadwaryal/Event-Management-Project.git',
    mobile: false,
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS'],
  },
  {
    id: 4,
    title: 'E-Commerce Web Application',
    description:
      'A responsive e-commerce application featuring Firebase authentication, product browsing, product details, a dynamic shopping cart, checkout, and purchase history.',
    image: '/Ecommerce.png',
    liveLink: 'https://github.com/noorsw69/interneeProject7.git',
    mobile: false,
    tags: ['Next.js', 'Firebase Auth', 'Firestore', 'Tailwind CSS'],
  },
  {
    id: 5,
    title: 'Unsplash Image Gallery',
    description:
      'A responsive image gallery powered by the Unsplash API, featuring image search, category filtering, and an interactive lightbox for exploring high-resolution photography.',
    image: '/Gallery.png',
    liveLink: 'https://github.com/noorsw69/interneeProject4.git',
    mobile: false,
    tags: ['React.js', 'Unsplash API', 'Tailwind CSS', 'JavaScript'],
  },
  {
    id: 6,
    title: 'SmartHabitTracker',
    description:
      'A cross-platform mobile application built with React Native and TypeScript, featuring habit creation, daily streak tracking, and local data persistence with AsyncStorage.',
    image: '/smartHabitTracker.png',
    liveLink: 'https://github.com/noorsw69/SmartHabitTracker.git',
    mobile: true,
    tags: ['React Native', 'TypeScript', 'Expo', 'AsyncStorage'],
  },
  {
    id: 7,
    title: 'COVID-19 Data Analysis – Aga Khan University Hospital',
    description:
      'A team-based data analysis project focused on COVID-19 patient data from Aga Khan University Hospital. The project involved descriptive, diagnostic, predictive and prescriptive analysis to examine patient data, identify patterns, explore trends and derive insights to support informed decision-making.',
    image: '/covid-data-analysis.svg',
    mobile: false,
    tags: [
      'Data Analysis',
      'Descriptive Analysis',
      'Diagnostic Analysis',
      'Predictive Analysis',
      'Prescriptive Analysis',
    ],
  },
  {
    id: 8,
    title: 'Smartphone Addiction and Academic Performance Research',
    description:
      'A questionnaire-based research project investigating the relationship between smartphone addiction and academic performance among students. Data was collected through Google Forms, cleaned and organized using Microsoft Excel, and analyzed using SPSS. The project involved examining collected responses, identifying patterns and presenting findings through charts and visualizations.',
    image: '/smartphone-addiction-research.svg',
    mobile: false,
    tags: [
      'Google Forms',
      'Microsoft Excel',
      'SPSS',
      'Data Cleaning',
      'Statistical Analysis',
      'Data Visualization',
    ],
  },
];

export default function Projects({
  featuredOnly = false,
}: ProjectsProps) {
  const displayedProjects = featuredOnly
    ? projectData.slice(0, 3)
    : projectData;

  return (
    <section
      id="projects"
      className="w-full bg-white px-6 py-16 text-zinc-900 sm:px-16 sm:py-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="mb-12 text-4xl font-extrabold tracking-tight text-zinc-900 sm:mb-16 sm:text-5xl">
          Projects<span className="text-violet-600">.</span>
        </h2>

        <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2">
          {displayedProjects.map((project) => (
            <article key={project.id} className="group flex flex-col">
              {project.mobile ? (
                <div className="mb-6 flex justify-center">
                  <div className="relative h-[440px] w-[220px] overflow-hidden rounded-[2.5rem] border-[6px] border-zinc-800 bg-zinc-900 shadow-xl">
                    <div className="absolute left-1/2 top-0 z-10 h-5 w-20 -translate-x-1/2 rounded-b-2xl bg-zinc-900" />

                    <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
                      <Image
                        src={project.image}
                        alt={`${project.title} project illustration`}
                        fill
                        sizes="220px"
                        className="object-cover object-top"
                      />
                    </div>

                    <div className="absolute bottom-2 left-1/2 z-10 h-1 w-16 -translate-x-1/2 rounded-full bg-zinc-600" />
                  </div>
                </div>
              ) : (
                <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-100 shadow-sm transition-all duration-300 group-hover:border-zinc-300 group-hover:shadow-md">
                  <Image
                    src={project.image}
                    alt={`${project.title} project illustration`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={featuredOnly && project.id === 1}
                  />
                </div>
              )}

              {project.liveLink ? (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-3 inline-flex w-fit items-center gap-2 text-2xl font-bold tracking-tight text-zinc-950 transition-colors hover:text-violet-600"
                >
                  {project.title}

                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-violet-600 text-violet-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </span>
                </a>
              ) : (
                <h3 className="mb-3 w-fit text-2xl font-bold tracking-tight text-zinc-950">
                  {project.title}
                </h3>
              )}

              <p className="mb-4 max-w-xl text-base font-normal leading-relaxed text-zinc-700">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {featuredOnly && (
          <div className="mt-14 flex justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-violet-600 px-6 py-3 font-semibold text-violet-600 transition-colors hover:bg-violet-600 hover:text-white"
            >
              View All Projects
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );}

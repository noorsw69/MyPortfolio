import React from 'react';
import Link from 'next/link';

const education = [
  {
    number: '01',
    qualification: 'Bachelor of Engineering in Software Engineering',
    institution: 'Mehran University of Engineering & Technology (MUET)',
    location: 'Jamshoro, Sindh, Pakistan',
    detailLabel: 'Graduation Year',
    detail: '2025',
  },
  {
    number: '02',
    qualification: 'Intermediate',
    institution: 'Government Girls Degree College Malir Cantt',
    location: 'Karachi, Pakistan',
    detailLabel: 'Passing Year',
    detail: '2021',
  },
];

export function EducationPreview() {
  return (
    <section className="py-20 bg-zinc-50 text-zinc-900 px-6 sm:px-16 max-w-7xl mx-auto w-full rounded-[3rem] my-12">
      <div className="max-w-4xl">
        <h2 className="text-5xl font-extrabold tracking-tight mb-10 text-zinc-900">
          Education<span className="text-violet-600">.</span>
        </h2>

        <div className="space-y-6">
          {education.map((item) => (
            <article key={item.number}>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950">
                {item.number === '01'
                  ? 'B.E. in Software Engineering'
                  : item.qualification}
              </h3>
              <p className="mt-1 text-zinc-700 text-base sm:text-lg leading-relaxed">
                {item.institution}
              </p>
            </article>
          ))}
        </div>

        <Link
          href="/education"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-violet-600 px-6 py-3 font-semibold text-violet-600 transition-colors hover:bg-violet-600 hover:text-white"
        >
          View Education &amp; Certifications
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

export default function Education() {
  return (
    <section
      className="text-zinc-900"
    >
      <div className="mb-20">
        <h1 className="text-5xl font-black tracking-tighter text-zinc-900 mb-16">
          Education<span className="text-violet-600">.</span>
        </h1>

        <div className="flex flex-col">
          {education.map((item, index) => (
            <article
              key={item.number}
              className={`flex flex-row gap-6 sm:gap-10 w-full ${
                index < education.length - 1 ? 'mb-16' : ''
              }`}
            >
              <div className="flex flex-col items-start flex-shrink-0 w-12 sm:w-16">
                <span className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900 leading-none">
                  {item.number}
                </span>
                {index < education.length - 1 && (
                  <div className="w-0.5 bg-violet-600 h-28 rounded-full mt-5 ml-3.5 opacity-90" />
                )}
              </div>

              <div className="flex flex-col min-w-0">
                <span className="text-sm font-semibold text-violet-600 tracking-wide mb-1">
                  {item.qualification}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight mb-3">
                  {item.institution}
                </h3>
                <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
                  {item.location}
                </p>
                <p className="mt-2 text-zinc-700 text-base sm:text-lg leading-relaxed">
                  <span className="font-semibold">{item.detailLabel}: </span>
                  {item.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <section aria-labelledby="certifications-heading" className="mb-20">
        <h2 id="certifications-heading" className="text-4xl sm:text-5xl font-black tracking-tighter text-zinc-900 mb-10">
          Certifications<span className="text-violet-600">.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            ['AWS Cloud Technical Essentials', 'Amazon Web Services'],
            ['Google AI Essentials', 'Google'],
            ['Google Prompting Essentials', 'Google'],
          ].map(([name, issuer]) => (
            <article key={name} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold tracking-tight text-zinc-950">{name}</h3>
              <p className="mt-2 text-zinc-600">{issuer}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="learning-heading">
        <h2 id="learning-heading" className="text-4xl sm:text-5xl font-black tracking-tighter text-zinc-900 mb-10">
          Currently Learning<span className="text-violet-600">.</span>
        </h2>
        <article className="rounded-2xl border border-violet-200 bg-violet-50 p-6">
          <span className="text-sm font-semibold uppercase tracking-wide text-violet-700">In progress</span>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-zinc-950">Introduction to Data Science</h3>
        </article>
      </section>
    </section>
  );
}

import React from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import StudentProfileMockup from './mockups/StudentProfileMockup';
import TutorMatchingMockup from './mockups/TutorMatchingMockup';
import TutorProfileMockup from './mockups/TutorProfileMockup';
import CourseMaterialsMockup from './mockups/CourseMaterialsMockup';

const SHOWCASES = [
  {
    n: '01',
    tag: 'Student Experience',
    title: 'Start with what makes you unique.',
    body: 'Students build a profile around their subjects, goals and preferences. Everything else grows from that.',
    Mockup: StudentProfileMockup,
    reverse: false,
  },
  {
    n: '02',
    tag: 'Tutor Matching',
    title: 'From requirements to relevant matches.',
    body: 'Tutors are suggested based on what matters to the student: subject, skill level, schedule, language and teaching style.',
    Mockup: TutorMatchingMockup,
    reverse: true,
  },
  {
    n: '03',
    tag: 'Tutor Discovery',
    title: 'More than a name and a subject.',
    body: 'See how a tutor teaches before you choose one. Their expertise, their teaching philosophy, their availability and more.',
    Mockup: TutorProfileMockup,
    reverse: false,
  },
  {
    n: '04',
    tag: 'Learning & Platform',
    title: 'Everything you need to keep learning.',
    body: 'Course materials sit in one place: documents, videos and slides, organised by section and available offline so you can study when it suits you.',
    Mockup: CourseMaterialsMockup,
    reverse: true,
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="The product"
            title="See EduConnect in action."
            subtitle="A closer look at how EduConnect brings students and tutors together."
          />
        </Reveal>

        <div className="mt-16 lg:mt-20 space-y-20 lg:space-y-28">
          {SHOWCASES.map((s) => {
            const Mockup = s.Mockup;
            return (
              <div key={s.n} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <Reveal className={s.reverse ? 'lg:order-2' : ''}>
                  <div className="max-w-md mx-auto lg:mx-0">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-display text-sm font-bold text-accent">{s.n}</span>
                      <span className="h-px w-8 bg-accent/40" />
                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{s.tag}</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary tracking-tight text-balance leading-[1.15]">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-base text-muted-foreground leading-relaxed">{s.body}</p>
                  </div>
                </Reveal>

                <Reveal delay={0.15} className={s.reverse ? 'lg:order-1' : ''}>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-br from-brand-sky/30 via-brand-lavender/20 to-transparent rounded-3xl blur-2xl opacity-60 -z-10" />
                    <Mockup />
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
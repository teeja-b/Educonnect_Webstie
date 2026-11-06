import React from 'react';
import { UserPlus, Sparkles, GitCompareArrows, GraduationCap } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const STEPS = [
  {
    n: '01',
    icon: UserPlus,
    title: 'Tell us what you need',
    body: 'Students set up a profile with their subjects, level, goals, free time and how they like to learn.',
  },
  {
    n: '02',
    icon: Sparkles,
    title: 'Get personalised matches',
    body: 'EduConnect looks at what the student needs and picks out tutors who fit.',
  },
  {
    n: '03',
    icon: GitCompareArrows,
    title: 'Compare your options',
    body: 'Browse tutor profiles and see how each one teaches, when they are free and what other students think.',
  },
  {
    n: '04',
    icon: GraduationCap,
    title: 'Start learning',
    body: 'Pick the tutor who feels right and book your first session.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="How EduConnect works"
            title="A simple path to the right tutor."
            subtitle="From your first profile to your first session, every step is built around the learner."
          />
        </Reveal>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block mt-16 relative">
          <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="grid grid-cols-4 gap-6">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.n} delay={i * 0.12}>
                  <div className="relative text-center">
                    <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-card border border-border shadow-float">
                      <Icon className="h-8 w-8 text-accent" />
                      <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-[11px] font-bold">
                        {step.n}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-lg font-semibold text-primary">{step.title}</h3>
                    <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{step.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden mt-12 relative pl-8">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />
          <div className="space-y-8">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.n} delay={i * 0.08}>
                  <div className="relative">
                    <div className="absolute -left-[1.95rem] top-0 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] font-bold ring-4 ring-background">
                      {step.n}
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-semibold text-primary">{step.title}</h3>
                        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
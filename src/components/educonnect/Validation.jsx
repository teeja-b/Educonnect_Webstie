import React from 'react';
import { FlaskConical, MessageSquareQuote, Rocket } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const STAGES = [
  {
    icon: FlaskConical,
    status: 'Completed',
    title: 'Concept & research',
    body: 'We looked into how students in Mauritius find help, and what tutors and institutions need.',
  },
  {
    icon: MessageSquareQuote,
    status: 'In progress',
    title: 'Validation & feedback',
    body: 'We are talking with students, tutors and organisations so the platform is built around real needs.',
  },
  {
    icon: Rocket,
    status: 'Next',
    title: 'Iterative launch',
    body: 'We will build step by step and learn from our first users before opening up more widely.',
  },
];

export default function Validation() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Where we are"
            title="A young platform, shaped by the people who will use it."
            subtitle="EduConnect is still young. We are taking our time, listening first and improving before we grow."
          />
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {STAGES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="relative h-full rounded-2xl border border-border/60 bg-card p-7">
                  <div className="flex items-center justify-between mb-5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground bg-secondary px-2.5 py-1 rounded-full">
                      {s.status}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-primary tracking-tight">{s.title}</h3>
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                  {i < STAGES.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 h-px w-6 bg-border" />
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
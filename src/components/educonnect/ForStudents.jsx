import React from 'react';
import { Compass, GitCompareArrows, CalendarClock, BookMarked, MessagesSquare, Route, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import { PHOTOS } from './photos';

const BENEFITS = [
  { icon: Compass, text: 'Find tutors who suit your needs' },
  { icon: GitCompareArrows, text: 'Compare teaching approaches' },
  { icon: CalendarClock, text: 'Find help that fits your week' },
  { icon: BookMarked, text: 'Get study resources that matter' },
  { icon: MessagesSquare, text: 'Chat with tutors on the platform' },
  { icon: Route, text: 'Plan your learning around your goals' },
];

export default function ForStudents() {
  return (
    <section id="for-students" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent mb-4">
                <span className="h-px w-6 bg-accent/40" />
                For Students
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.75rem] font-medium tracking-[-0.015em] text-primary text-balance leading-[1.1]">
                A learning experience built around you.
              </h2>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                Find a tutor who fits how you learn, instead of bending yourself to fit them.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                {BENEFITS.map((b) => {
                  const Icon = b.icon;
                  return (
                    <div key={b.text} className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-3.5 hover:border-accent/30 hover:shadow-float transition-all">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <Icon className="h-4.5 w-4.5" />
                      </span>
                      <p className="text-sm font-medium text-primary leading-snug pt-1">{b.text}</p>
                    </div>
                  );
                })}
              </div>

              <a
                href="#final-cta"
                className="group mt-8 inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-all shadow-float hover:shadow-premium hover:-translate-y-0.5"
              >
                Find Your Match
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative">
              <figure className="overflow-hidden rounded-[4px] shadow-premium">
                <img
                  src={PHOTOS.phoneHuddle.lg}
                  srcSet={`${PHOTOS.phoneHuddle.sm} 960w, ${PHOTOS.phoneHuddle.lg} 1920w`}
                  sizes="(min-width: 1024px) 600px, 100vw"
                  alt="Three students gathered by a window, looking at a phone together"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] object-cover"
                  style={{ objectPosition: '50% 35%' }}
                />
              </figure>
              <div className="relative -mt-24 mx-4 sm:mx-10 lg:absolute lg:mt-0 lg:mx-0 lg:-bottom-12 lg:-left-12 lg:w-[21rem] rounded-2xl border border-border/80 bg-card shadow-premium p-6">
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border/50">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-accent to-blue-700 flex items-center justify-center text-white text-lg font-bold">A</div>
                  <div>
                    <p className="font-display font-semibold text-primary">Amira, Grade 11</p>
                    <p className="text-xs text-muted-foreground">Looking for Mathematics support</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Subjects', value: 'Mathematics · English' },
                    { label: 'Learning style', value: 'Visual learner' },
                    { label: 'Availability', value: 'Evenings · Weekends' },
                    { label: 'Goals', value: 'Exam preparation' },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between rounded-lg bg-secondary/40 px-3.5 py-2.5">
                      <span className="text-xs font-medium text-muted-foreground">{row.label}</span>
                      <span className="text-sm font-semibold text-primary">{row.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-2 rounded-xl bg-accent/5 border border-accent/20 px-4 py-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <p className="text-sm font-medium text-accent">3 tutors matched to your profile</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
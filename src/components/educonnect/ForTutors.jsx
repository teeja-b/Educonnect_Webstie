import React from 'react';
import { UserCheck, Award, Presentation, CalendarCheck, Target, Users, ArrowRight, Star, CheckCircle2, DollarSign, Briefcase } from 'lucide-react';
import Reveal from './Reveal';
import { PHOTOS } from './photos';

const BENEFITS = [
  { icon: UserCheck, text: 'Create a professional profile' },
  { icon: Award, text: 'Showcase your expertise' },
  { icon: Presentation, text: 'Define your teaching approach' },
  { icon: CalendarCheck, text: 'Set your availability' },
  { icon: Target, text: 'Meet students who need your subjects' },
  { icon: Users, text: 'Keep all your students in one place' },
];

export default function ForTutors() {
  return (
    <section id="for-tutors" className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:order-2">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent mb-4">
                <span className="h-px w-6 bg-accent/40" />
                For Tutors
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.75rem] font-medium tracking-[-0.015em] text-primary text-balance leading-[1.1]">
                Great teaching deserves the right students.
              </h2>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                EduConnect puts you in front of students who need exactly what you teach, and the way you teach it.
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
                Join as a Tutor
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:order-1">
            <div className="relative">
              <figure className="overflow-hidden rounded-[4px] shadow-premium">
                <img
                  src={PHOTOS.tutorHelp.lg}
                  srcSet={`${PHOTOS.tutorHelp.sm} 960w, ${PHOTOS.tutorHelp.lg} 1920w`}
                  sizes="(min-width: 1024px) 600px, 100vw"
                  alt="A student leaning in to help two classmates working on a laptop"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] object-cover"
                  style={{ objectPosition: '40% 40%' }}
                />
              </figure>
              <div className="relative -mt-24 mx-4 sm:mx-10 lg:absolute lg:mt-0 lg:mx-0 lg:-bottom-12 lg:-right-12 lg:w-[21rem] rounded-2xl border border-border/80 bg-card shadow-premium overflow-hidden">
                <div className="bg-gradient-to-br from-primary to-slate-800 px-5 py-5 text-primary-foreground">
                  <div className="flex items-start gap-3.5">
                    <div className="h-14 w-14 rounded-2xl bg-white/15 flex items-center justify-center text-xl font-bold font-display">P</div>
                    <div>
                      <p className="font-display text-lg font-bold">Priya Ramasamy</p>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full">
                          <CheckCircle2 className="h-3 w-3" /> Verified
                        </span>
                        <span className="text-[11px] bg-white/15 px-2 py-0.5 rounded-full">Adaptive</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { icon: DollarSign, value: 'Rs 450', label: 'per hour', color: 'text-blue-600 bg-blue-50' },
                      { icon: Briefcase, value: '6 yrs', label: 'experience', color: 'text-emerald-600 bg-emerald-50' },
                      { icon: Star, value: '4.8', label: 'rating', color: 'text-amber-600 bg-amber-50' },
                    ].map((s) => {
                      const Icon = s.icon;
                      return (
                        <div key={s.label} className="rounded-xl border border-border/60 bg-background/50 p-2.5 text-center">
                          <span className={`inline-flex h-7 w-7 items-center justify-center rounded-lg mb-1 ${s.color}`}>
                            <Icon className="h-3.5 w-3.5" />
                          </span>
                          <p className="text-sm font-bold text-primary leading-none">{s.value}</p>
                          <p className="text-[10px] text-muted-foreground mt-0.5">{s.label}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4">
                    <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">Subjects</p>
                    <div className="flex flex-wrap gap-1.5">
                      {['Mathematics', 'Physics', 'Statistics'].map((c) => (
                        <span key={c} className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">{c}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">Teaching philosophy</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">Understanding before memorising. We build intuition first, then practise.</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
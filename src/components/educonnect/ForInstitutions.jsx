import React from 'react';
import { School, HeartHandshake, Users2, Sparkles, ArrowRight, Building2, GraduationCap, BookOpen, Lightbulb } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const PARTNERS = [
  { icon: School, label: 'Schools' },
  { icon: HeartHandshake, label: 'NGOs' },
  { icon: Building2, label: 'Educational organisations' },
  { icon: Users2, label: 'Community programmes' },
];

const APPLICATIONS = [
  { icon: Users2, text: 'Student support programmes' },
  { icon: Sparkles, text: 'Tutor matching' },
  { icon: GraduationCap, text: 'Learning interventions' },
  { icon: BookOpen, text: 'Academic support initiatives' },
  { icon: Lightbulb, text: 'Workshops' },
  { icon: Sparkles, text: 'Personalised learning resources' },
];

export default function ForInstitutions() {
  return (
    <section id="for-institutions" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="For Institutions & Organisations"
            title="Personal learning that reaches past the classroom."
            subtitle="EduConnect can work with schools, NGOs and education groups to bring personal learning support to the communities they look after."
          />
        </Reveal>

        <div className="mt-14 grid md:grid-cols-4 gap-3">
          {PARTNERS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.label} delay={i * 0.08}>
                <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4 hover:border-accent/30 hover:shadow-float transition-all">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-primary">{p.label}</span>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 rounded-2xl border border-border/70 bg-gradient-to-br from-secondary/40 to-card p-7 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent mb-5">Ways we could work together</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {APPLICATIONS.map((a) => {
                const Icon = a.icon;
                return (
                  <div key={a.text} className="flex items-center gap-3 rounded-xl bg-card border border-border/50 px-4 py-3.5">
                    <Icon className="h-4.5 w-4.5 text-accent shrink-0" />
                    <span className="text-sm font-medium text-primary">{a.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
              <p className="text-sm text-muted-foreground max-w-md">
                Curious how EduConnect could help your organisation? We would love to talk.
              </p>
              <a
                href="#final-cta"
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-all shadow-float hover:shadow-premium hover:-translate-y-0.5 shrink-0"
              >
                Partner With EduConnect
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
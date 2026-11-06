import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Reveal from './Reveal';

export default function FinalCTA() {
  return (
    <section id="final-cta" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground px-7 py-14 sm:px-12 lg:px-16 lg:py-20 text-center shadow-premium">
            <div className="absolute inset-0 bg-grid-dark opacity-25" />
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-teal/15 blur-3xl" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-sky mb-6">
                <Sparkles className="h-3.5 w-3.5" />
                Join EduConnect
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.015em] text-balance leading-[1.1] max-w-2xl mx-auto">
                Come and help us make learning feel more personal.
              </h2>
              <p className="mt-5 text-base sm:text-lg text-primary-foreground/75 leading-relaxed max-w-xl mx-auto">
                Whether you are a student, a tutor or an organisation, we would love to hear from you while we build EduConnect.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <a
                  href="mailto:teejasvinibundhoo@gmail.com"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-primary bg-primary-foreground rounded-full hover:bg-primary-foreground/90 transition-all shadow-float hover:shadow-premium hover:-translate-y-0.5"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-primary-foreground bg-white/[0.08] border border-white/20 rounded-full hover:bg-white/[0.12] transition-all"
                >
                  Learn More
                </a>
              </div>

              <p className="mt-6 text-xs text-primary-foreground/60">
                No commitment · Early access as we grow
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
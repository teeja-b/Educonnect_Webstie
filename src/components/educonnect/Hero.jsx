import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { PHOTOS } from './photos';


export default function Hero() {
  return (
    <section id="home" className="pt-32 lg:pt-40 pb-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">


          <p className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <MapPin className="h-4 w-4 text-accent" />
            Built in Mauritius
          </p>

          <h1 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-[3.75rem] font-medium tracking-[-0.02em] text-primary leading-[1.08] text-balance">
            Learning should fit the student, not the other way around.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-balance">
            EduConnect matches students with tutors who suit their subjects, their goals, their schedule and the way they actually learn.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#final-cta"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-all shadow-float hover:-translate-y-0.5"
            >
              Find Your Learning Match
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#for-tutors"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-primary bg-card border border-border rounded-full hover:bg-secondary transition-all"
            >
              Become a Tutor
            </a>
          </div>
        </div>

        <figure className="mt-12 lg:mt-16 overflow-hidden rounded-[4px] border border-border/60 shadow-premium">
          <img
            src={PHOTOS.campusGroup.lg}
            srcSet={`${PHOTOS.campusGroup.sm} 960w, ${PHOTOS.campusGroup.lg} 1920w`}
            sizes="(min-width: 1280px) 1216px, 100vw"
            alt="Five smiling university students with backpacks standing arm in arm outside a campus building"
            loading="eager"
            decoding="async"
            className="w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] object-cover"
            style={{ objectPosition: '50% 35%' }}
          />
        </figure>
      </div>
    </section>
  );
}

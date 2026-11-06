import React from 'react';
import { Sparkles, Mail, MapPin } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { PHOTOS } from './photos';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent mb-4">
                <span className="h-px w-6 bg-accent/40" />
                About EduConnect
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.75rem] font-medium tracking-[-0.015em] text-primary text-balance leading-[1.1]">
                Learning should fit the student, not the other way around.
              </h2>
              <div className="mt-6 space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  EduConnect is a young education platform that connects students with tutors who genuinely suit them: their subjects, goals, learning style, schedule and circumstances.
                </p>
                <p>
                  We started EduConnect because finding a good tutor takes too long and often feels like luck. Students deserve a better way to find help, and tutors deserve to meet the students who will gain the most from them.
                </p>
                <p>
                  We are building it carefully, with input from students, tutors and education organisations, so that personal attention, trust and easy access stay at the centre.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid gap-4">
              <figure className="overflow-hidden rounded-[4px] border border-border/60 shadow-float">
                <img
                  src={PHOTOS.laptopHands.lg}
                  srcSet={`${PHOTOS.laptopHands.sm} 960w, ${PHOTOS.laptopHands.lg} 1920w`}
                  sizes="(min-width: 1024px) 600px, 100vw"
                  alt="A student typing on a laptop while a classmate points to something on the screen"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[16/10] object-cover"
                  style={{ objectPosition: '50% 55%' }}
                />
              </figure>
              <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-float">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Sparkles className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-primary">Our mission</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                      Make good learning support easier to find, a better fit and easier to trust, starting in Mauritius.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border/60 bg-card p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent mb-3">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <h4 className="text-sm font-semibold text-primary">Based in</h4>
                  <p className="text-sm text-muted-foreground mt-1">Mauritius</p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-card p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent mb-3">
                    <Mail className="h-5 w-5" />
                  </span>
                  <h4 className="text-sm font-semibold text-primary">Get in touch</h4>
                  <p className="text-sm text-muted-foreground mt-1">teejasvinibundhoo@gmail.com</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
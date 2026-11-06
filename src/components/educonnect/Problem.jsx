import React from 'react';
import { Search, Users, Clock } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { PHOTOS } from './photos';

const CARDS = [
  {
    icon: Search,
    title: 'Good support is hard to find',
    body: 'Most families go on word of mouth or settle for a generic tutor who may not suit the student at all.',
  },
  {
    icon: Users,
    title: 'One approach never works for everyone',
    body: 'Every student has their own strengths, weak spots, habits and goals.',
  },
  {
    icon: Clock,
    title: 'Finding a good fit takes time',
    body: 'Comparing tutors, schedules, subjects and teaching styles gets tiring fast.',
  },
];

export default function Problem() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="The challenge"
            title="Every student learns differently."
            subtitle="Students often struggle because the help they get doesn't match their pace, their style or their situation, and not because they lack potential."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <figure className="mt-12 overflow-hidden rounded-[4px] border border-border/60 shadow-premium">
            <img
              src={PHOTOS.studyTable.lg}
              srcSet={`${PHOTOS.studyTable.sm} 960w, ${PHOTOS.studyTable.lg} 1920w`}
              sizes="(min-width: 1280px) 1216px, 100vw"
              alt="Two students working on laptops at an outdoor table on campus"
              loading="lazy"
              decoding="async"
              className="w-full aspect-[4/3] sm:aspect-[21/9] object-cover"
              style={{ objectPosition: '50% 38%' }}
            />
          </figure>
        </Reveal>

        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={i * 0.1}>
                <div className="group h-full rounded-2xl border border-border/70 bg-card p-7 shadow-sm hover:shadow-float hover:-translate-y-1 transition-all duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-primary leading-snug mb-2.5">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-14 text-center text-lg sm:text-xl font-display font-semibold text-primary text-balance max-w-2xl mx-auto">
            We built EduConnect to make that search simpler and a lot more personal.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
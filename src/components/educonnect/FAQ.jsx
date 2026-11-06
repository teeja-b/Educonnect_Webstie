import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const FAQS = [
  {
    q: 'What is EduConnect?',
    a: 'EduConnect is a platform that matches students with tutors based on their subjects, goals, learning style and schedule. The aim is simple: help every student find a tutor who fits how they learn.',
  },
  {
    q: 'How does tutor matching work?',
    a: 'Students build a profile that describes what they need. EduConnect then suggests tutors whose expertise, teaching style and availability fit that profile, so the matches make sense.',
  },
  {
    q: 'Who is EduConnect for?',
    a: 'Students who want help that suits them, tutors who want to reach the right students, and schools, NGOs and community programmes that want to support the people they serve.',
  },
  {
    q: 'Is EduConnect only for Mauritius?',
    a: 'We are starting in Mauritius and building around how education works here. Over time, the same approach could serve learners elsewhere too.',
  },
  {
    q: 'How do I join as a tutor?',
    a: 'Use the Get Started link below to tell us you are interested. As the platform grows, we will welcome tutors whose expertise and teaching style match what students need.',
  },
  {
    q: 'Is EduConnect free to use?',
    a: 'It is still early, so pricing and access are not final. We will share details as the platform develops, and you can get in touch to stay in the loop.',
  },
];

function FaqItem({ item, open, onToggle }) {
  return (
    <div className="border-b border-border/60 last:border-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className={cn('font-display text-base sm:text-lg font-semibold transition-colors', open ? 'text-accent' : 'text-primary group-hover:text-accent')}>
          {item.q}
        </span>
        <span className={cn('flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-all', open && 'bg-accent/10 border-accent/30 text-accent rotate-180')}>
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>
      <div className={cn('grid transition-all duration-300 ease-out', open ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0')}>
        <div className="overflow-hidden">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pr-12">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Questions"
            title="Questions people ask us."
            subtitle="Everything you might want to know about EduConnect. If your question is not here, just ask."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 rounded-2xl border border-border/60 bg-card px-6 sm:px-8 shadow-float">
            {FAQS.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
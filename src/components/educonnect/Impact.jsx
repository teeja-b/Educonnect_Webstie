import React from 'react';
import { Target, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { PHOTOS } from './photos';

const PILLARS = [
    {
        icon: Target,
        title: 'Personalisation first',
        body: 'Matching looks at the whole picture: subjects, goals, preferences, availability and needs. A name and a subject are never enough.',
    },
    {
        icon: HeartHandshake,
        title: 'Human-centred',
        body: 'Technology helps a student and a tutor find each other. It never replaces the human relationship that makes learning work.',
    },
    {
        icon: ShieldCheck,
        title: 'Trust & safety',
        body: 'Verified tutor profiles, messaging inside the platform and organised materials help keep learning safe.',
    },
    {
        icon: Sparkles,
        title: 'Built to evolve',
        body: 'We are building EduConnect in small steps, guided by what students, tutors and teachers tell us.',
    },
];

export default function Impact() {
    return (
        <section className="py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <Reveal>
                    <SectionHeading
                        eyebrow="What guides us"
                        title="The principles behind EduConnect."
                        subtitle="A few simple ideas guide every decision we make about the platform."
                    />
                </Reveal>

                <Reveal delay={0.1}>
                    <figure className="mt-12 overflow-hidden rounded-[4px] border border-border/60 shadow-premium">
                        <img
                            src={PHOTOS.principles.lg}
                            srcSet={`${PHOTOS.principles.sm} 960w, ${PHOTOS.principles.lg} 1920w`}
                            sizes="(min-width: 1280px) 1216px, 100vw"
                            alt="A man working at a desk with a laptop and a large monitor beside a bright window"
                            loading="lazy"
                            decoding="async"
                            className="w-full aspect-[4/3] sm:aspect-[21/9] object-cover"
                            style={{ objectPosition: '50% 55%' }}
                        />
                    </figure>
                </Reveal>

                <div className="mt-8 grid sm:grid-cols-2 gap-5">
                    {PILLARS.map((p, i) => {
                        const Icon = p.icon;
                        return (
                            <Reveal key={p.title} delay={i * 0.08}>
                                <div className="group h-full rounded-2xl border border-border/60 bg-card p-7 hover:border-accent/30 hover:shadow-premium transition-all">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-5 group-hover:scale-105 transition-transform">
                                        <Icon className="h-6 w-6" />
                                    </span>
                                    <h3 className="font-display text-xl font-bold text-primary tracking-tight">{p.title}</h3>
                                    <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
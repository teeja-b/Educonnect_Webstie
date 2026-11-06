import React from 'react';
import { BookOpen, GraduationCap, Brain, Presentation, Calendar, Target, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { PHOTOS } from './photos';

const FACTORS = [
    { icon: BookOpen, label: 'Subject', examples: 'Mathematics, Physics, English, Computer Science', accent: 'text-blue-600 bg-blue-50' },
    { icon: GraduationCap, label: 'Academic level', examples: 'Secondary, tertiary and other levels', accent: 'text-teal-600 bg-teal-50' },
    { icon: Brain, label: 'Learning preferences', examples: 'Visual, practical, discussion-based', accent: 'text-violet-600 bg-violet-50' },
    { icon: Presentation, label: 'Teaching approach', examples: 'Structured, interactive, exam-focused', accent: 'text-amber-600 bg-amber-50' },
    { icon: Calendar, label: 'Availability', examples: 'Fits around your week', accent: 'text-rose-600 bg-rose-50' },
    { icon: Target, label: 'Goals', examples: 'Exam prep, revision, understanding', accent: 'text-emerald-600 bg-emerald-50' },
];

export default function Personalisation() {
    return (
        <section className="py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-dark opacity-40" />
            <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-brand-teal/15 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
                <Reveal>
                    <div className="max-w-2xl mx-auto text-center">
                        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-sky mb-4">
                            <span className="h-px w-6 bg-brand-sky/40" />
                            The matching engine
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.75rem] font-medium tracking-[-0.015em] text-balance leading-[1.1]">
                            Good matching starts with understanding the learner.
                        </h2>
                        <p className="mt-5 text-base sm:text-lg text-primary-foreground/75 leading-relaxed text-balance">
                            EduConnect weighs several things at once when it matches a student with a tutor, so the match feels right and not random.
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={0.1}>
                    <figure className="mt-12 mx-auto max-w-4xl overflow-hidden rounded-[4px] border border-white/10 shadow-[0_40px_90px_-30px_rgba(2,6,23,0.8)]">
                        <img
                            src={PHOTOS.learning.lg}
                            srcSet={`${PHOTOS.learning.sm} 900w, ${PHOTOS.learning.lg} 1600w`}
                            sizes="(min-width: 1024px) 896px, 100vw"
                            alt="A student holding up a wildlife book to a phone on a tripod during an online lesson"
                            loading="lazy"
                            decoding="async"
                            className="w-full aspect-[4/3] sm:aspect-[3/2] object-cover"
                            style={{ objectPosition: '50% 28%' }}
                        />
                    </figure>
                </Reveal>

                <div className="mt-12 grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-6 items-center">
                    {/* Factors column */}
                    <div className="grid sm:grid-cols-2 gap-3">
                        {FACTORS.map((f, i) => {
                            const Icon = f.icon;
                            return (
                                <Reveal key={f.label} delay={i * 0.06}>
                                    <div className="group rounded-xl border border-white/10 bg-white/[0.06] p-4 hover:bg-white/[0.1] hover:border-white/20 transition-all">
                                        <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${f.accent} mb-2.5`}>
                                            <Icon className="h-4.5 w-4.5" />
                                        </div>
                                        <p className="text-sm font-semibold text-primary-foreground">{f.label}</p>
                                        <p className="text-xs text-primary-foreground/65 mt-1 leading-relaxed">{f.examples}</p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>

                    {/* Connector */}
                    <Reveal delay={0.3} className="flex lg:flex-col items-center justify-center gap-2 py-4 lg:py-0">
                        <div className="hidden lg:block h-16 w-px bg-gradient-to-b from-transparent via-accent to-transparent" />
                        <div className="lg:hidden h-px w-16 bg-gradient-to-r from-transparent via-accent to-transparent" />
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary-foreground shadow-lg shadow-accent/30">
                            <ArrowRight className="h-5 w-5 lg:rotate-90" />
                        </div>
                        <div className="hidden lg:block h-16 w-px bg-gradient-to-b from-accent via-accent to-transparent" />
                        <div className="lg:hidden h-px w-16 bg-gradient-to-r from-accent via-accent to-transparent" />
                    </Reveal>

                    {/* Result */}
                    <Reveal delay={0.4}>
                        <div className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.1] to-white/[0.04] p-7 text-center lg:text-left">
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-sky mb-3">The result</p>
                            <h3 className="font-display text-2xl font-bold text-balance leading-tight">
                                A match that actually fits.
                            </h3>
                            <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">
                                No single factor decides it. EduConnect looks at all of them together to find the tutor who suits the student best.
                            </p>
                            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-primary-foreground/80">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Chosen for you, not a generic list
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
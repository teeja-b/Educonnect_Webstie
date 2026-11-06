import React, { useState } from 'react';
import { Star, CheckCircle2, DollarSign, Briefcase, Users, ChevronDown, BookOpen, GraduationCap, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

const STATS = [
  { icon: DollarSign, value: 'Rs 450', label: 'per hour', color: 'text-blue-600 bg-blue-50' },
  { icon: Briefcase, value: '6', label: 'experience', color: 'text-emerald-600 bg-emerald-50' },
  { icon: Users, value: '48', label: 'sessions', color: 'text-orange-600 bg-orange-50' },
  { icon: Star, value: '4.8', label: 'rating', color: 'text-amber-600 bg-amber-50' },
];

const SECTIONS = [
  {
    id: 'about',
    icon: BookOpen,
    title: 'About',
    body: 'I help students build confidence in Mathematics through patient, visual explanations. Every learner thinks differently, so I adapt to the way you understand best.',
    extra: { label: 'Teaching Philosophy', text: 'Understanding before memorising. We build intuition first, then practise.' },
  },
  {
    id: 'expertise',
    icon: GraduationCap,
    title: 'Expertise & Languages',
    body: null,
    chips: { subjects: ['Mathematics', 'Physics', 'Statistics'], languages: ['English', 'French', 'Creole'] },
  },
  {
    id: 'availability',
    icon: Calendar,
    title: 'Availability',
    body: null,
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  },
];

export default function TutorProfileMockup() {
  const [open, setOpen] = useState('about');

  return (
    <div className="rounded-2xl border border-border/80 bg-card shadow-premium overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-slate-800 px-5 py-6 text-primary-foreground">
        <div className="flex items-start gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-2xl font-bold font-display">
            P
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-xl font-bold">Priya Ramasamy</h3>
            <div className="flex flex-wrap items-center gap-2 mt-1.5">
              <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full">
                <CheckCircle2 className="h-3 w-3" /> Verified
              </span>
              <span className="text-[11px] font-medium bg-white/15 px-2 py-0.5 rounded-full">Adaptive style</span>
            </div>
            <div className="flex items-center gap-1.5 mt-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star key={n} className={cn('h-3.5 w-3.5', n <= 4 ? 'fill-amber-400 text-amber-400' : 'text-white/30')} />
                ))}
              </div>
              <span className="text-xs font-semibold">4.8</span>
              <span className="text-xs text-primary-foreground/60">(48 sessions)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        {/* Stats */}
        <div className="grid grid-cols-4 gap-2.5">
          {STATS.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="rounded-xl border border-border/60 bg-background/50 p-2.5 text-center">
                <span className={cn('inline-flex h-7 w-7 items-center justify-center rounded-lg mb-1', s.color)}>
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <p className="text-sm font-bold text-primary leading-none">{s.value}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{s.label}</p>
              </div>
            );
          })}
        </div>

        {/* Accordion sections */}
        <div className="mt-4 space-y-2.5">
          {SECTIONS.map((s) => {
            const Icon = s.icon;
            const isOpen = open === s.id;
            return (
              <div key={s.id} className="rounded-xl border border-border/60 bg-background/50 overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : s.id)}
                  className="w-full flex items-center justify-between px-3.5 py-3 hover:bg-secondary/40 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-semibold text-primary">{s.title}</span>
                  </span>
                  <ChevronDown className={cn('h-4 w-4 text-muted-foreground transition-transform', isOpen && 'rotate-180')} />
                </button>
                {isOpen && (
                  <div className="px-3.5 pb-3.5">
                    {s.body && <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>}
                    {s.extra && (
                      <div className="mt-2.5 pt-2.5 border-t border-border/50">
                        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide mb-1">{s.extra.label}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{s.extra.text}</p>
                      </div>
                    )}
                    {s.chips && (
                      <div className="space-y-2.5">
                        <div>
                          <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">Subjects I teach</p>
                          <div className="flex flex-wrap gap-1.5">
                            {s.chips.subjects.map((c) => (
                              <span key={c} className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">{c}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">Languages</p>
                          <div className="flex flex-wrap gap-1.5">
                            {s.chips.languages.map((c) => (
                              <span key={c} className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">{c}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    {s.days && (
                      <div className="flex flex-wrap gap-1.5">
                        {s.days.map((d) => (
                          <span key={d} className="text-xs font-medium text-primary bg-secondary px-2.5 py-1 rounded-md">{d} · Evenings</span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
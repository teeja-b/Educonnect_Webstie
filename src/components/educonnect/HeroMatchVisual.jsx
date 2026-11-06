import React from 'react';
import { Star, BookOpen, Calendar, Globe, Brain, TrendingUp, CheckCircle2, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const STUDENT_FIELDS = [
  { icon: BookOpen, label: 'Subjects', value: 'Mathematics · English' },
  { icon: TrendingUp, label: 'Level', value: 'Secondary' },
  { icon: Calendar, label: 'Availability', value: 'Evenings' },
  { icon: Brain, label: 'Learning preference', value: 'Visual' },
];

const MATCH_TUTORS = [
  {
    rank: 1,
    name: 'Priya Ramasamy',
    score: 92,
    label: 'Strong match',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    dot: 'bg-emerald-500',
    verified: true,
    sessions: 48,
    breakdown: [
      { icon: BookOpen, label: 'Subject', value: '96%', color: 'text-emerald-600' },
      { icon: Brain, label: 'Style', value: '88%', color: 'text-emerald-600' },
      { icon: Calendar, label: 'Schedule', value: '90%', color: 'text-emerald-600' },
    ],
  },
  {
    rank: 2,
    name: 'Jean-Luc Béguin',
    score: 81,
    label: 'Good match',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    dot: 'bg-blue-500',
    verified: true,
    sessions: 22,
    breakdown: [
      { icon: BookOpen, label: 'Subject', value: '84%', color: 'text-blue-600' },
      { icon: Brain, label: 'Style', value: '76%', color: 'text-blue-600' },
      { icon: Calendar, label: 'Schedule', value: '82%', color: 'text-blue-600' },
    ],
  },
];

function MatchDetail({ item }) {
  const Icon = item.icon;
  return (
    <div className="flex items-center gap-2">
      <Icon className={cn('h-3.5 w-3.5', item.color)} />
      <div className="flex flex-col">
        <span className="text-[10px] text-muted-foreground leading-none">{item.label}</span>
        <span className={cn('text-xs font-semibold leading-tight mt-0.5', item.color)}>{item.value}</span>
      </div>
    </div>
  );
}

export default function HeroMatchVisual() {
  return (
    <div className="relative w-full">
      {/* Browser frame */}
      <div className="rounded-2xl border border-white/20 bg-card shadow-[0_40px_90px_-30px_rgba(2,6,23,0.75)] overflow-hidden">
        <div className="flex items-center gap-2 px-4 h-9 border-b border-border/60 bg-secondary/40">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <div className="ml-3 flex-1 max-w-xs h-5 rounded-md bg-background/80 flex items-center px-3">
            <span className="text-[10px] text-muted-foreground font-medium truncate">app.educonnect.mu/matches</span>
          </div>
        </div>

        <div className="p-4 sm:p-5 bg-gradient-to-br from-background to-secondary/30">
          {/* Student profile card */}
          <div className="rounded-xl border border-border/70 bg-card p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-accent to-blue-700 flex items-center justify-center text-white text-sm font-bold">
                  A
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary leading-tight">Your profile</p>
                  <p className="text-[11px] text-muted-foreground">Student · Grade 11</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-accent bg-accent/10 px-2 py-1 rounded-full">
                <Zap className="h-3 w-3" /> Smart matching
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {STUDENT_FIELDS.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.label} className="flex items-center gap-2 rounded-lg bg-secondary/50 px-2.5 py-2">
                    <Icon className="h-3.5 w-3.5 text-accent shrink-0" />
                    <div className="min-w-0">
                      <p className="text-[10px] text-muted-foreground leading-none">{f.label}</p>
                      <p className="text-[11px] font-semibold text-primary truncate leading-tight mt-0.5">{f.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Connection line */}
          <div className="flex items-center justify-center my-3">
            <div className="flex items-center gap-2">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-accent/50" />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                Your Learning Matches
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-accent/50" />
            </div>
          </div>

          {/* Tutor match cards */}
          <div className="space-y-2.5">
            {MATCH_TUTORS.map((t) => (
              <div
                key={t.rank}
                className="rounded-xl border border-border/70 bg-card p-3.5 shadow-sm hover:shadow-float hover:border-accent/30 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className={cn('flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white text-xs font-bold', t.dot)}>
                    #{t.rank}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-primary truncate">{t.name}</p>
                      <span className={cn('inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0', t.bg, t.color)}>
                        <TrendingUp className="h-2.5 w-2.5" /> {t.score}%
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={cn('text-[10px] font-semibold', t.color)}>{t.label}</span>
                      {t.verified && (
                        <span className="inline-flex items-center gap-0.5 text-[10px] text-muted-foreground">
                          <CheckCircle2 className="h-3 w-3 text-emerald-500" /> {t.sessions} sessions
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 mt-2.5">
                      {t.breakdown.map((b) => (
                        <MatchDetail key={b.label} item={b} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating accent */}
      <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-1.5 rounded-full bg-accent text-accent-foreground px-3 py-1.5 shadow-premium text-[11px] font-semibold">
        <Star className="h-3 w-3 fill-amber-300 text-amber-300" />
        Personalised to you
      </div>
    </div>
  );
}
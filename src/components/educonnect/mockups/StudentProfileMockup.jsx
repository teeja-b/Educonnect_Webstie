import React from 'react';
import { BookOpen, Brain, Target, Calendar, Clock, Languages, Gauge, ChevronRight } from 'lucide-react';

const SECTIONS = [
  { icon: BookOpen, label: 'Preferred subjects', value: ['Mathematics', 'English', 'Computer Science'], color: 'bg-blue-50 text-blue-700' },
  { icon: Brain, label: 'Learning style', value: 'Visual learner', color: 'bg-violet-50 text-violet-700' },
  { icon: Target, label: 'Learning goals', value: 'Exam preparation · Concept understanding', color: 'bg-emerald-50 text-emerald-700' },
  { icon: Calendar, label: 'Available time', value: 'Evenings · Weekends', color: 'bg-amber-50 text-amber-700' },
];

const SCORES = [
  { label: 'Math', value: 7 },
  { label: 'Science', value: 5 },
  { label: 'Language', value: 6 },
  { label: 'Tech', value: 8 },
];

function ScoreBar({ label, value }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="text-[11px] font-medium text-muted-foreground w-16 shrink-0">{label}</span>
      <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden">
        <div className="h-full rounded-full bg-gradient-to-r from-accent to-blue-500" style={{ width: `${value * 10}%` }} />
      </div>
      <span className="text-[11px] font-semibold text-primary w-4 text-right">{value}</span>
    </div>
  );
}

export default function StudentProfileMockup() {
  return (
    <div className="rounded-2xl border border-border/80 bg-card shadow-premium overflow-hidden">
      {/* App header */}
      <div className="flex items-center justify-between px-5 h-12 border-b border-border/60 bg-primary text-primary-foreground">
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-md bg-white/15 flex items-center justify-center text-[10px] font-bold">E</span>
          <span className="text-sm font-semibold font-display">EduConnect</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-primary-foreground/70">
          <span className="px-2.5 py-1 rounded-md bg-white/10 text-primary-foreground">Profile</span>
          <span className="px-2.5 py-1 rounded-md">Matches</span>
          <span className="px-2.5 py-1 rounded-md">Messages</span>
        </div>
        <div className="h-7 w-7 rounded-full bg-gradient-to-br from-accent to-blue-700 flex items-center justify-center text-white text-xs font-bold">
          A
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-display text-lg font-bold text-primary">My Learning Profile</h3>
            <p className="text-xs text-muted-foreground mt-0.5">The foundation for your personalised matches</p>
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
            Profile complete
          </span>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {SECTIONS.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="rounded-xl border border-border/60 bg-background/50 p-3.5">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`flex h-7 w-7 items-center justify-center rounded-lg ${s.color}`}>
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">{s.label}</span>
                </div>
                {Array.isArray(s.value) ? (
                  <div className="flex flex-wrap gap-1.5">
                    {s.value.map((v) => (
                      <span key={v} className="text-xs font-medium text-primary bg-secondary px-2 py-0.5 rounded-md">{v}</span>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm font-medium text-primary leading-snug">{s.value}</p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-3 rounded-xl border border-border/60 bg-background/50 p-3.5">
          <div className="flex items-center gap-2 mb-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
              <Gauge className="h-3.5 w-3.5" />
            </span>
            <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">Self-assessment</span>
          </div>
          <div className="space-y-2">
            {SCORES.map((s) => <ScoreBar key={s.label} {...s} />)}
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary/60 px-2.5 py-1.5 rounded-lg">
            <Clock className="h-3.5 w-3.5 text-accent" /> 60-min sessions
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary/60 px-2.5 py-1.5 rounded-lg">
            <Languages className="h-3.5 w-3.5 text-accent" /> English · French
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary/60 px-2.5 py-1.5 rounded-lg">
            <Gauge className="h-3.5 w-3.5 text-accent" /> Moderate pace
          </div>
        </div>
      </div>
    </div>
  );
}
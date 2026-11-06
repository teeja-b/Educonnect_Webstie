import React from 'react';
import { Brain, BookOpen, TrendingUp, Calendar, Globe, Star, Zap, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const MATCHES = [
  {
    rank: 1, name: 'Priya Ramasamy', score: 92, label: 'Strong match', badge: 'text-emerald-700 bg-emerald-50',
    verified: true, sessions: 48, confidence: 78,
    breakdown: [
      { icon: BookOpen, label: 'Subject', value: '96%', color: 'text-emerald-600' },
      { icon: TrendingUp, label: 'Skill', value: '88%', color: 'text-emerald-600' },
      { icon: Calendar, label: 'Schedule', value: '90%', color: 'text-emerald-600' },
      { icon: Globe, label: 'Language', value: '82%', color: 'text-emerald-600' },
      { icon: Brain, label: 'Style', value: '91%', color: 'text-emerald-600' },
      { icon: Star, label: 'Rating', value: '94%', color: 'text-emerald-600' },
    ],
  },
  {
    rank: 2, name: 'Jean-Luc Béguin', score: 79, label: 'Good match', badge: 'text-blue-700 bg-blue-50',
    verified: true, sessions: 22, confidence: 52,
    breakdown: [
      { icon: BookOpen, label: 'Subject', value: '84%', color: 'text-blue-600' },
      { icon: TrendingUp, label: 'Skill', value: '72%', color: 'text-blue-600' },
      { icon: Calendar, label: 'Schedule', value: '80%', color: 'text-blue-600' },
      { icon: Globe, label: 'Language', value: '76%', color: 'text-blue-600' },
      { icon: Brain, label: 'Style', value: '78%', color: 'text-blue-600' },
      { icon: Star, label: 'Rating', value: 'No data', color: 'text-gray-400' },
    ],
  },
];

function Detail({ item }) {
  const Icon = item.icon;
  return (
    <div className="flex items-center gap-1.5">
      <Icon className={cn('h-3 w-3', item.color)} />
      <div className="flex flex-col leading-none">
        <span className="text-[9px] text-muted-foreground">{item.label}</span>
        <span className={cn('text-[11px] font-semibold mt-0.5', item.color)}>{item.value}</span>
      </div>
    </div>
  );
}

export default function TutorMatchingMockup() {
  return (
    <div className="rounded-2xl border border-border/80 bg-card shadow-premium overflow-hidden">
      <div className="flex items-center justify-between px-5 h-12 border-b border-border/60 bg-primary text-primary-foreground">
        <div className="flex items-center gap-2">
          <Brain className="h-4 w-4" />
          <span className="text-sm font-semibold font-display">AI-Powered Tutor Matching</span>
        </div>
        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-300 bg-amber-400/15 px-2.5 py-1 rounded-full">
          <Zap className="h-3 w-3" /> Smart matching enabled
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-semibold text-primary">Found 2 matches</p>
          <span className="text-[11px] text-muted-foreground">Ranked by subject, style, schedule & goals</span>
        </div>

        <div className="space-y-3">
          {MATCHES.map((m) => (
            <div key={m.rank} className="rounded-xl border border-border/60 bg-background/50 p-3.5 hover:border-accent/30 hover:shadow-float transition-all">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground text-xs font-bold">
                  #{m.rank}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-primary truncate">{m.name}</p>
                    <span className={cn('inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full shrink-0', m.badge)}>
                      <TrendingUp className="h-2.5 w-2.5" /> {m.score}%
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={cn('text-[10px] font-semibold', m.badge.split(' ')[0])}>{m.label}</span>
                    {m.verified ? (
                      <span className="inline-flex items-center gap-0.5 text-[10px] text-muted-foreground">
                        <CheckCircle2 className="h-3 w-3 text-emerald-500" /> {m.sessions} sessions
                      </span>
                    ) : (
                      <span className="text-[10px] text-muted-foreground">New tutor</span>
                    )}
                  </div>

                  <div className={cn('inline-flex items-center gap-1 mt-2 text-[10px] font-medium px-2 py-0.5 rounded-full',
                    m.confidence >= 70 ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700')}>
                    <AlertCircle className="h-2.5 w-2.5" />
                    {m.confidence >= 70 ? 'High confidence' : 'Medium confidence'} · {m.confidence}%
                  </div>

                  <div className="grid grid-cols-3 gap-x-3 gap-y-2 mt-2.5">
                    {m.breakdown.map((b) => <Detail key={b.label} item={b} />)}
                  </div>

                  <div className="flex items-center gap-2 mt-3">
                    <button className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary-foreground bg-primary px-3 py-1.5 rounded-lg">
                      <CheckCircle2 className="h-3 w-3" /> Select tutor
                    </button>
                    <button className="inline-flex items-center gap-1 text-[11px] font-semibold text-accent bg-accent/10 px-3 py-1.5 rounded-lg">
                      <MessageSquare className="h-3 w-3" /> Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
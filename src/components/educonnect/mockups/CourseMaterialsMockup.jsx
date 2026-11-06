import React, { useState } from 'react';
import { FileText, Video, Presentation, Image as ImageIcon, ChevronDown, FolderOpen, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

const SECTIONS = [
  {
    id: 1,
    title: 'Foundations of Mathematics',
    expanded: true,
    materials: [
      { type: 'video', title: 'Algebraic expressions: overview', icon: Video, color: 'text-red-600 bg-red-50' },
      { type: 'document', title: 'Chapter 1: Notes & examples', icon: FileText, color: 'text-emerald-600 bg-emerald-50' },
      { type: 'presentation', title: 'Slides: Linear equations', icon: Presentation, color: 'text-orange-600 bg-orange-50' },
    ],
  },
  {
    id: 2,
    title: 'Exam Preparation',
    expanded: false,
    materials: [
      { type: 'document', title: 'Past paper walkthrough', icon: FileText, color: 'text-emerald-600 bg-emerald-50' },
      { type: 'image', title: 'Formula reference sheet', icon: ImageIcon, color: 'text-blue-600 bg-blue-50' },
    ],
  },
];

export default function CourseMaterialsMockup() {
  const [open, setOpen] = useState(1);

  return (
    <div className="rounded-2xl border border-border/80 bg-card shadow-premium overflow-hidden">
      <div className="flex items-center justify-between px-5 h-12 border-b border-border/60 bg-primary text-primary-foreground">
        <div className="flex items-center gap-2">
          <FolderOpen className="h-4 w-4" />
          <span className="text-sm font-semibold font-display">Course Materials</span>
        </div>
        <span className="text-[11px] text-primary-foreground/70">Mathematics · Secondary</span>
      </div>

      <div className="p-5">
        <div className="mb-4">
          <h3 className="font-display text-lg font-bold text-primary">Mathematics, Grade 11</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Curated by Priya Ramasamy · 5 sections · Offline available</p>
        </div>

        <div className="space-y-2.5">
          {SECTIONS.map((sec) => {
            const isOpen = open === sec.id;
            return (
              <div key={sec.id} className="rounded-xl border border-border/60 bg-background/50 overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : sec.id)}
                  className="w-full flex items-center justify-between px-3.5 py-3 hover:bg-secondary/40 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <FolderOpen className="h-4 w-4 text-accent" />
                    <span className="text-sm font-semibold text-primary">{sec.title}</span>
                    <span className="text-[11px] text-muted-foreground">· {sec.materials.length} items</span>
                  </span>
                  <ChevronDown className={cn('h-4 w-4 text-muted-foreground transition-transform', isOpen && 'rotate-180')} />
                </button>
                {isOpen && (
                  <div className="px-3.5 pb-3.5 space-y-2">
                    {sec.materials.map((m) => {
                      const Icon = m.icon;
                      return (
                        <div key={m.title} className="flex items-center gap-2.5 rounded-lg bg-card border border-border/50 px-3 py-2.5 hover:border-accent/30 transition-colors">
                          <span className={cn('flex h-8 w-8 items-center justify-center rounded-lg', m.color)}>
                            <Icon className="h-4 w-4" />
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-primary truncate">{m.title}</p>
                            <p className="text-[10px] text-muted-foreground capitalize">{m.type}</p>
                          </div>
                          <button className="inline-flex items-center gap-1 text-[11px] font-semibold text-accent hover:bg-accent/10 px-2 py-1 rounded-md transition-colors">
                            <Download className="h-3 w-3" />
                          </button>
                        </div>
                      );
                    })}
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
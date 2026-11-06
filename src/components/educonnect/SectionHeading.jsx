import React from 'react';
import { cn } from '@/lib/utils';

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', className }) {
  return (
    <div className={cn('max-w-2xl', align === 'center' ? 'mx-auto text-center' : 'text-left', className)}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent mb-4">
          <span className="h-px w-6 bg-accent/40" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.75rem] font-medium tracking-[-0.015em] text-primary text-balance leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
}
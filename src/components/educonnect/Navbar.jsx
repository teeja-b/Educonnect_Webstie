import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'For Students', href: '#for-students' },
  { label: 'For Tutors', href: '#for-tutors' },
  { label: 'For Institutions', href: '#for-institutions' },
  { label: 'About Us', href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        solid
          ? 'bg-background/95 border-b border-border/60 shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 lg:h-18 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group" aria-label="EduConnect home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-float transition-transform group-hover:scale-105">
            <Sparkles className="h-4.5 w-4.5" strokeWidth={2.2} />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-primary">
            EduConnect
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/60"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#final-cta"
            className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-all shadow-float hover:shadow-premium hover:-translate-y-0.5"
          >
            Get Started
          </a>
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg text-primary hover:bg-secondary transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-background overflow-y-auto">
          <div className="px-5 py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3.5 text-base font-medium text-foreground hover:bg-secondary rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#final-cta"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center px-5 py-3.5 text-base font-semibold text-primary-foreground bg-primary rounded-full"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
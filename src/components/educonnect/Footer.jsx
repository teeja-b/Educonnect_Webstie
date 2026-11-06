import React from 'react';
import { Sparkles, Mail, MapPin } from 'lucide-react';

const NAV = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'For Students', href: '#for-students' },
  { label: 'For Tutors', href: '#for-tutors' },
  { label: 'For Institutions', href: '#for-institutions' },
  { label: 'About', href: '#about' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 lg:py-16">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr] gap-10 lg:gap-12">
          <div>
            <a href="#home" className="flex items-center gap-2.5 group" aria-label="EduConnect home">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-foreground text-primary">
                <Sparkles className="h-4.5 w-4.5" strokeWidth={2.2} />
              </span>
              <span className="font-display text-lg font-bold tracking-tight">EduConnect</span>
            </a>
            <p className="mt-4 text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
              Learning support that fits the student. Made in Mauritius, with the wider world in mind.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/50 mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/50 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4 text-brand-sky" />
                <a href="mailto:teejasvinibundhoo@gmail.com" className="hover:text-primary-foreground transition-colors">teejasvinibundhoo@gmail.com</a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 text-brand-sky" />
                Mauritius
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} EduConnect. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/40">
            Learning should fit the student, not the other way around.
          </p>
        </div>
      </div>
    </footer>
  );
}
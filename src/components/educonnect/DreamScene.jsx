import React from 'react';

/**
 * Opening scene: a child asleep in bed, dreaming of an idea.
 * The dream bubble holds a lightbulb that flickers before it catches.
 * Pure SVG + CSS, so it needs no extra dependencies.
 */
export default function DreamScene() {
  return (
    <div className="dream-scene relative mx-auto w-full max-w-[34rem]" aria-hidden="true">
      <svg
        viewBox="0 0 520 340"
        className="w-full h-auto"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="bulbGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE9A8" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#FFD35C" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FFD35C" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="blanket" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B6FE0" />
            <stop offset="100%" stopColor="#2A55B8" />
          </linearGradient>
        </defs>

        {/* soft night sky backdrop */}
        <rect x="0" y="0" width="520" height="340" rx="24" fill="hsl(224 47% 11%)" />
        <g className="dream-stars" fill="#fff">
          <circle cx="48" cy="44" r="1.6" />
          <circle cx="110" cy="92" r="1.2" />
          <circle cx="470" cy="60" r="1.6" />
          <circle cx="420" cy="118" r="1.1" />
          <circle cx="36" cy="150" r="1.1" />
          <circle cx="496" cy="170" r="1.3" />
        </g>

        {/* floor shadow */}
        <ellipse cx="190" cy="318" rx="170" ry="9" fill="#000" opacity="0.28" />

        {/* bed frame */}
        <rect x="26" y="236" width="316" height="62" rx="10" fill="#6B4A32" />
        <rect x="26" y="206" width="22" height="108" rx="8" fill="#5A3C27" />
        <rect x="320" y="226" width="22" height="88" rx="8" fill="#5A3C27" />

        {/* mattress + pillow */}
        <rect x="44" y="222" width="284" height="34" rx="12" fill="#F4EFE6" />
        <rect x="56" y="198" width="96" height="40" rx="18" fill="#FFFFFF" />

        {/* child: head + hair, resting on pillow */}
        <g className="dream-breathe">
          <circle cx="104" cy="206" r="26" fill="#C98F68" />
          <path
            d="M78 202c2-20 18-30 36-27 14 2 22 12 22 24-10-8-22-11-34-9-10 1-18 5-24 12z"
            fill="#2B1B14"
          />
          {/* closed eyes */}
          <path d="M92 210q5 4 10 0" stroke="#2B1B14" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <path d="M112 210q5 4 10 0" stroke="#2B1B14" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          {/* small smile */}
          <path d="M100 222q7 5 14 0" stroke="#7A3F2A" strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* blanket pulled up over the body */}
          <path
            d="M130 226c30-16 120-18 198 4v32H128z"
            fill="url(#blanket)"
          />
          <path d="M150 238c20-8 70-10 110-4" stroke="#fff" strokeOpacity="0.25" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>

        {/* thought trail: three bubbles rising from the child */}
        <circle className="dream-dot d1" cx="150" cy="176" r="5" fill="#fff" fillOpacity="0.85" />
        <circle className="dream-dot d2" cx="178" cy="148" r="8" fill="#fff" fillOpacity="0.85" />
        <circle className="dream-dot d3" cx="216" cy="118" r="12" fill="#fff" fillOpacity="0.85" />

        {/* cloud, glow, bulb and rays drift together */}
        <g className="dream-float">
        <g className="dream-cloud">
          <path
            d="M262 112c-22 0-34-16-26-32 6-12 20-16 32-10 4-18 24-28 44-22 12 4 20 12 24 22 18-8 40 2 42 20 0 6-2 10-6 14 14 6 18 22 8 34-8 10-22 12-34 6-8 12-26 16-40 8-12 6-28 2-34-8-10 4-22 2-10-4z"
            fill="#fff"
            fillOpacity="0.96"
          />
        </g>

        {/* the glow behind the bulb, flickers with it */}
        <circle className="bulb-glow" cx="316" cy="84" r="62" fill="url(#bulbGlow)" />

        {/* lightbulb */}
        <g className="bulb">
          <path
            className="bulb-glass"
            d="M316 48c-19 0-33 14-33 32 0 12 6 20 13 28 4 5 6 9 6 14h28c0-5 2-9 6-14 7-8 13-16 13-28 0-18-14-32-33-32z"
            fill="#FFD35C"
            stroke="#E0A91F"
            strokeWidth="2"
          />
          {/* filament */}
          <path
            className="bulb-filament"
            d="M306 108V88l5 8 5-8 5 8 5-8v20"
            stroke="#B8700A"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* base */}
          <rect x="302" y="122" width="28" height="7" rx="2" fill="#9AA3B2" />
          <rect x="305" y="129" width="22" height="6" rx="2" fill="#7D8798" />
          <path d="M310 135h12l-2 6h-8z" fill="#5E687A" />
        </g>

        {/* little rays that only show while the bulb is lit */}
        <g className="bulb-rays" stroke="#FFD35C" strokeWidth="2.4" strokeLinecap="round">
          <path d="M316 28v-12" />
          <path d="M282 40l-8-8" />
          <path d="M350 40l8-8" />
          <path d="M270 76h-12" />
          <path d="M362 76h12" />
        </g>

        </g>

        {/* floating z's */}
        <g className="dream-z" fill="#fff" fontFamily="Georgia, serif" fontWeight="600">
          <text className="z1" x="168" y="196" fontSize="16">z</text>
          <text className="z2" x="186" y="176" fontSize="20">z</text>
        </g>
      </svg>
    </div>
  );
}

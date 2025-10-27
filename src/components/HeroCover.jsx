import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroCover = () => {
  return (
    <section className="relative h-[48vh] w-full overflow-hidden rounded-2xl bg-black/80">
      {/* Interactive Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Top gradient tint and text overlay (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent" />

      {/* Headline */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white drop-shadow">
          Unified Notes + Multi‑PDF Chat
        </h1>
        <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/80">
          A secure, modern workspace to capture ideas and converse with your documents.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            Realtime • Interactive • Minimal
          </span>
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            Firebase Auth • FastAPI • RAG
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroCover;

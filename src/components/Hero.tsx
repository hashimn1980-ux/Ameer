import { motion } from 'framer-motion';
import { CONTENT } from '../constants';
import type { Language } from '../constants';

interface HeroProps {
  language: Language;
}

export default function Hero({ language }: HeroProps) {
  const content = CONTENT[language].hero;

  return (
    <main className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Media Layer (Z-0) */}
      <div className="absolute inset-0 z-0 bg-obsidian">
        {/* Grayscale Media */}
        <img
          src="/assets/hero-section/hero-color.webp"
          alt="Studio Background"
          className="w-full h-full object-cover grayscale opacity-40"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent"></div>
      </div>

      {/* The Inversion Aperture (Z-5) */}
      <motion.div
        className="absolute inset-0 z-[5] pointer-events-none"
        style={{ filter: 'invert(1) contrast(1.1)' }}
        initial={{ clipPath: 'circle(0% at 70% 45%)' }}
        animate={{ clipPath: 'circle(150% at 70% 45%)' }}
        transition={{
          duration: 1.5,
          delay: 1,
          ease: [0.76, 0, 0.24, 1]
        }}
      >
        <img
          src="/assets/hero-section/hero-color.webp"
          alt=""
          className="w-full h-full object-cover grayscale opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent"></div>
      </motion.div>

      {/* Content & Gold Protection (Z-10) */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Logo Monogram */}
        <div className="mb-12">
          <svg className="w-24 h-24 md:w-32 md:h-32" fill="none" height="120" viewBox="0 0 100 100" width="120" xmlns="http://www.w3.org/2000/svg">
            <path className="logo-trace" d="M20 80L50 20L80 80M35 50H65" stroke="#D4AF37" strokeLinecap="square" strokeWidth="0.5"></path>
            <path className="logo-trace" d="M10 10H90V90H10V10Z" opacity="0.3" stroke="#D4AF37" strokeWidth="0.2"></path>
          </svg>
        </div>

        {/* Title / Gold Protection */}
        <motion.h1
          layout
          className="font-headline italic text-5xl md:text-8xl tracking-tight leading-none text-on-surface"
        >
          {content.title1} <br />
          <span className="text-gold">{content.title2}</span>
        </motion.h1>

        {/* CTA */}
        <motion.div layout className="mt-16 flex flex-col items-center">
          <p className="font-body uppercase tracking-[0.5em] text-[10px] text-[#888888] mb-8 text-center max-w-sm">
            {content.subtitle}
          </p>
          <button className="group relative flex items-center gap-4 transition-all duration-500 interactive-element">
            <span className="w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0"></span>
            <span className="font-body uppercase tracking-[0.3em] text-[10px] text-on-surface transition-transform duration-500 group-hover:translate-x-2">
              {content.cta}
            </span>
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-0 w-full flex justify-center items-center pointer-events-none z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="font-body uppercase tracking-[0.3em] text-[10px] text-[#888888] opacity-50">Discovery</span>
          <span className="material-symbols-outlined text-gold animate-bounce text-sm">keyboard_arrow_down</span>
        </div>
      </div>
    </main>
  );
}

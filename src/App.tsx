import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { LANGUAGES, CONTENT } from './constants';
import type { Language } from './constants';
import { motion } from 'framer-motion';
import Hero from './components/Hero';

function App() {
  const [language, setLanguage] = useState<Language>(LANGUAGES.EN);
  const isArabic = language === LANGUAGES.AR;

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === LANGUAGES.EN ? LANGUAGES.AR : LANGUAGES.EN));
  };

  return (
    <div dir={isArabic ? 'rtl' : 'ltr'} className={`min-h-screen text-on-surface selection:bg-gold/30 selection:text-white ${isArabic ? 'font-arabic' : 'font-body'}`}>
      <div className="film-grain" />

      {/* Top Navigation Mock */}
      <motion.nav
        layout
        className="fixed top-0 w-full z-[50] flex justify-between items-center px-12 py-8 bg-transparent backdrop-blur-sm"
      >
        <motion.div layout className="text-[10px] tracking-[0.5em] font-light text-on-surface uppercase font-body">
          {CONTENT[language].nav.brand}
        </motion.div>

        <div className="flex gap-12 items-center">
          <div className="flex gap-8">
            <motion.a layout href="#" className="font-body uppercase tracking-[0.3em] text-[10px] text-[#888888] hover:text-on-surface transition-all duration-500">
              {CONTENT[language].nav.atelier}
            </motion.a>
            <motion.a layout href="#" className="font-body uppercase tracking-[0.3em] text-[10px] text-[#888888] hover:text-on-surface transition-all duration-500">
              {CONTENT[language].nav.archive}
            </motion.a>
            <motion.a layout href="#" className="font-body uppercase tracking-[0.3em] text-[10px] text-gold border-b border-gold/30 pb-1">
              {CONTENT[language].nav.inquiry}
            </motion.a>
          </div>
          <motion.button
            layout
            onClick={toggleLanguage}
            className="font-body uppercase tracking-[0.3em] text-[10px] text-gold cursor-pointer"
          >
            EN/AR
          </motion.button>
        </div>
      </motion.nav>

      <Hero language={language} />

      {/* Spacer to allow scrolling to see smooth scroll */}
      <div className="h-[200vh] bg-surface-variant flex items-center justify-center border-t border-outline/20">
         <p className="font-headline italic text-4xl text-[#888888]">Scroll Area</p>
      </div>

    </div>
  );
}

export default App;

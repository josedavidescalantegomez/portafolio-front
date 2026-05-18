'use client';

import { useLanguage } from '@/context/LanguageContext';
import TypewriterEffect from './TypewriterEffect';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-grid pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-primary)]/50 to-[var(--bg-primary)] pointer-events-none" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-64 h-64 border border-[var(--accent-cyan)]/10 rounded-full animate-float opacity-30" />
        <div className="absolute bottom-1/4 -right-20 w-48 h-48 border border-[var(--accent-violet)]/10 rounded-full animate-float opacity-30" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-32 h-32 border border-[var(--accent-pink)]/10 rounded-full animate-float opacity-20" style={{ animationDelay: '4s' }} />
        
        <div className="absolute inset-0 bg-aurora opacity-50" />
        
        <div className="absolute top-20 right-20 text-6xl opacity-5 text-[var(--accent-cyan)] font-serif animate-float">
          葉
        </div>
        <div className="absolute bottom-32 left-16 text-4xl opacity-5 text-[var(--accent-pink)] font-serif animate-float" style={{ animationDelay: '1s' }}>
          桜
        </div>
        <div className="absolute top-1/3 left-1/4 text-3xl opacity-5 text-[var(--accent-violet)] font-serif animate-float" style={{ animationDelay: '2s' }}>
          夢
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-block px-4 py-2 mb-6 glass rounded-full animate-fade-in-up">
            <span className="text-[var(--accent-cyan)] font-mono text-sm">
              <span className="text-[var(--accent-green)]">●</span> {t.hero.location}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up delay-100">
            <span className="text-[var(--text-primary)]">Hi, I'm </span>
            <span className="gradient-text text-glow">José David Escalante</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 max-w-3xl mx-auto leading-relaxed">
            <span className="text-[var(--accent-cyan)] font-mono">const</span> developer ={' '}
            <TypewriterEffect 
              text="Full Stack with experience in Angular, Node.js & AWS" 
              speed={40}
              className="text-[var(--accent-violet)]"
            />
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up delay-300">
            <a
              href="#projects"
              className="px-8 py-3 bg-[var(--accent-cyan)] text-[var(--bg-primary)] rounded-lg font-bold hover:glow-cyan transition-all duration-300 hover:scale-105"
            >
              {t.hero.viewProjects}
            </a>
            <a
              href="#contact"
              className="px-8 py-3 glass text-[var(--text-primary)] rounded-lg font-medium hover:bg-[var(--bg-card)] transition-all duration-300 border border-[rgba(34,211,238,0.3)]"
            >
              {t.hero.contactMe}
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-[var(--text-secondary)] font-mono text-sm animate-fade-in-up delay-500">
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent-pink)]">⚛</span>
              <span>Angular</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent-green)]">⬡</span>
              <span>Node.js</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent-cyan)]">☁</span>
              <span>AWS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent-violet)]">◆</span>
              <span>TypeScript</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-[var(--accent-cyan)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
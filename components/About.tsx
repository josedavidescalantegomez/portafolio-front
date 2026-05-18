'use client';

import { useLanguage } from '@/context/LanguageContext';
import AnimatedSection from './AnimatedSection';

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { label: t.about.experience, value: '2+', icon: '⚡', color: 'text-[var(--accent-cyan)]' },
    { label: t.about.enterpriseApps, value: '5+', icon: '🏢', color: 'text-[var(--accent-violet)]' },
    { label: t.about.apis, value: '10+', icon: '🔗', color: 'text-[var(--accent-pink)]' },
    { label: t.about.coffee, value: '∞', icon: '☕', color: 'text-[var(--accent-green)]' },
  ];

  return (
    <section id="about" className="py-24 bg-[var(--bg-secondary)] relative">
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-[var(--accent-cyan)] font-mono text-sm">// {t.about.title}</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mt-2">
              {t.about.subtitle}
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-in-left" delay={100}>
            <div className="glass rounded-2xl p-8 hover-glow spotlight">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[var(--accent-cyan)] to-[var(--accent-violet)] flex items-center justify-center text-3xl animate-float">
                  💻
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">{t.about.title}</h3>
                  <p className="text-[var(--text-secondary)] font-mono text-sm">Full Stack Developer</p>
                </div>
              </div>
              
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                {t.about.description1}
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                {t.about.description2}
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {t.about.description3}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={200 + index * 100}>
                <div className="glass rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer hover-lift">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-[var(--text-secondary)] font-mono text-sm">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection animation="fade-in-up" delay={500}>
          <div className="mt-12 glass rounded-xl p-6 max-w-3xl mx-auto hover-lift">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[var(--accent-green)]">➜</span>
              <span className="text-[var(--text-primary)] font-bold">{t.about.currentMission}</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: '40%' }} />
            </div>
            <div className="flex justify-between mt-2 text-[var(--text-secondary)] text-sm font-mono">
              <span>40%</span>
              <span>{t.about.studying}</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
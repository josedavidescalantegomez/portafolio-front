'use client';

import { useLanguage } from '@/context/LanguageContext';
import AnimatedSection from './AnimatedSection';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '⚛️',
    color: 'from-[var(--accent-cyan)] to-[#06b6d4]',
    accentColor: 'var(--accent-cyan)',
    skills: [
      { name: 'Angular', level: 95 },
      { name: 'Angular Material', level: 90 },
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML5/CSS3', level: 90 },
      { name: 'Formularios Reactivos', level: 85 },
    ],
  },
  {
    title: 'Backend',
    icon: '⬡',
    color: 'from-[var(--accent-violet)] to-[#8b5cf6]',
    accentColor: 'var(--accent-violet)',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 80 },
      { name: 'APIs REST', level: 85 },
      { name: 'Serverless', level: 70 },
      { name: 'Integración de servicios', level: 75 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    color: 'from-[var(--accent-pink)] to-[#ec4899]',
    accentColor: 'var(--accent-pink)',
    skills: [
      { name: 'AWS EC2', level: 75 },
      { name: 'AWS Lambda', level: 70 },
      { name: 'DynamoDB', level: 65 },
      { name: 'Linux/WSL2', level: 80 },
      { name: 'SSH & Despliegues', level: 75 },
    ],
  },
];

export default function Skills() {
  const { t } = useLanguage();

  const allTechs = [
    'Angular', 'Angular Material', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3',
    'Node.js', 'Express.js', 'APIs REST', 'AWS EC2', 'AWS Lambda', 'DynamoDB',
    'Linux', 'SSH', 'WSL2', 'Drupal 9', 'MySQL', 'Git', 'GitHub', 'C#', 'Unity'
  ];

  return (
    <section id="skills" className="py-24 bg-[var(--bg-secondary)] relative">
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[var(--accent-cyan)] font-mono text-sm">// {t.skills.title}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mt-2">
            {t.skills.subtitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
<AnimatedSection key={index} animation="fade-in-up" delay={index * 150}>
              <div className="glass rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 spotlight hover-lift cursor-pointer h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-2xl">{category.icon}</div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[var(--text-secondary)] font-mono text-sm">
                          {skill.name}
                        </span>
                        <span className={`text-xs font-mono bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                          Lv.{Math.floor(skill.level / 20) + 1}
                        </span>
                      </div>
                      <div className="w-full bg-[var(--bg-card)] rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, ${category.accentColor}, transparent)`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-center text-[var(--text-secondary)] font-mono text-sm mb-6">
            {t.skills.additionalTechs}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {allTechs.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 glass rounded-lg text-[var(--text-secondary)] font-mono text-sm hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)]/50 transition-all cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
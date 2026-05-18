'use client';

import { useLanguage } from '@/context/LanguageContext';
import AnimatedSection from './AnimatedSection';

const projects = [
  {
    title: 'Enterprise Dashboard',
    description: 'Aplicación empresarial con Angular, formularios reactivos y integración de APIs. Implementación de paginación server-side y optimización de rendimiento.',
    tags: ['Angular', 'TypeScript', 'Node.js', 'AWS'],
    status: 'production',
    color: 'cyan',
  },
  {
    title: 'Sistema de Gestión de Contenidos',
    description: 'Plataforma de gestión de contenido con Drupal 9, integración con bases de datos MySQL y optimización de consultas para alto tráfico.',
    tags: ['Drupal 9', 'MySQL', 'Linux', 'AWS'],
    status: 'production',
    color: 'violet',
  },
  {
    title: 'API REST Backend',
    description: 'Desarrollo de APIs REST con Node.js y Express, integración con servicios AWS Lambda y DynamoDB para procesamiento serverless.',
    tags: ['Node.js', 'Express', 'AWS Lambda', 'DynamoDB'],
    status: 'active',
    color: 'pink',
  },
  {
    title: 'Plataforma de Integración',
    description: 'Sistema de integración de servicios externos con autenticación, manejo de errores y despliegues en producción con configuración Linux en AWS.',
    tags: ['AWS EC2', 'Linux', 'SSH', 'TypeScript'],
    status: 'production',
    color: 'green',
  },
];

const colorClasses = {
  cyan: 'border-[var(--accent-cyan)]/30 hover:border-[var(--accent-cyan)] hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]',
  violet: 'border-[var(--accent-violet)]/30 hover:border-[var(--accent-violet)] hover:shadow-[0_0_30px_rgba(167,139,250,0.2)]',
  pink: 'border-[var(--accent-pink)]/30 hover:border-[var(--accent-pink)] hover:shadow-[0_0_30px_rgba(244,114,182,0.2)]',
  green: 'border-[var(--accent-green)]/30 hover:border-[var(--accent-green)] hover:shadow-[0_0_30px_rgba(74,222,128,0.2)]',
};

export default function Projects() {
  const { t, language } = useLanguage();

  return (
    <section id="projects" className="py-24 bg-[var(--bg-primary)] relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[var(--accent-cyan)] font-mono text-sm">// {t.projects.title}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mt-2">
            {t.projects.subtitle}
          </h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto">
            {t.projects.subtitleDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={index} animation="fade-in-up" delay={index * 100}>
              <div
                className={`glass rounded-2xl p-6 border transition-all duration-300 hover-glow cursor-pointer spotlight hover-lift ${colorClasses[project.color as keyof typeof colorClasses]}`}
              >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                  {project.title}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-mono ${
                  project.status === 'active' 
                    ? 'bg-[var(--accent-green)]/20 text-[var(--accent-green)]' 
                    : 'bg-[var(--accent-cyan)]/20 text-[var(--accent-cyan)]'
                }`}>
                  {project.status === 'active' ? t.projects.active : t.projects.inProduction}
                </span>
              </div>
              
              <p className="text-[var(--text-secondary)] mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[var(--bg-card)] text-[var(--text-secondary)] rounded-lg text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center text-[var(--accent-cyan)] font-mono text-sm hover:underline">
                <span>{t.projects.viewProject}</span>
                <span className="ml-2">→</span>
              </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-in-up" delay={400}>
          <div className="text-center mt-12">
            <button className="px-8 py-3 glass rounded-lg text-[var(--text-primary)] font-medium hover:bg-[var(--bg-card)] transition-all border border-[rgba(34,211,238,0.3)] hover:scale-105 hover-lift">
              {t.projects.viewAll} →
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
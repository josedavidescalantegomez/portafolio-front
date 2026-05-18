'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'es' | 'en';

interface Translations {
  nav: {
    home: string;
    about: string;
    projects: string;
    skills: string;
    contact: string;
  };
  hero: {
    location: string;
    viewProjects: string;
    contactMe: string;
  };
  about: {
    title: string;
    subtitle: string;
    description1: string;
    description2: string;
    description3: string;
    experience: string;
    enterpriseApps: string;
    apis: string;
    coffee: string;
    currentMission: string;
    studying: string;
  };
  projects: {
    title: string;
    subtitle: string;
    subtitleDesc: string;
    inProduction: string;
    active: string;
    viewProject: string;
    viewAll: string;
  };
  skills: {
    title: string;
    subtitle: string;
    additionalTechs: string;
  };
  contact: {
    title: string;
    subtitle: string;
    subtitleDesc: string;
    contactInfo: string;
    location: string;
    email: string;
    phone: string;
    reference: string;
    refName: string;
    refPhone: string;
    refEmail: string;
    formTitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    sendButton: string;
  };
  footer: {
    developer: string;
    codedWith: string;
  };
}

const translations: Record<Language, Translations> = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      projects: 'Proyectos',
      skills: 'Habilidades',
      contact: 'Contacto',
    },
    hero: {
      location: 'Cúcuta, Colombia',
      viewProjects: 'Ver Proyectos',
      contactMe: 'Contactar',
    },
    about: {
      title: 'Sobre Mí',
      subtitle: 'Player Stats',
      description1: 'Desarrollador Full Stack con experiencia en frontend avanzado con Angular, integración de servicios backend con Node.js y despliegues en AWS.',
      description2: 'Experiencia en plataformas empresariales, optimización de rendimiento, paginación server-side, integración de APIs y soporte en producción.',
      description3: 'Comprometido con el aprendizaje continuo, calidad de código y soluciones eficientes para desafíos complejos.',
      experience: 'Años Exp.',
      enterpriseApps: 'Apps Enterprise',
      apis: 'APIs',
      coffee: 'Café',
      currentMission: 'Misión Actual',
      studying: 'Estudiando Ingeniería de Sistemas',
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Quest Log',
      subtitleDesc: 'Proyectos desarrollados durante mi experiencia en La Opinión S.A.',
      inProduction: 'En Producción',
      active: 'Activo',
      viewProject: 'Ver Proyecto',
      viewAll: 'Más Proyectos',
    },
    skills: {
      title: 'Habilidades',
      subtitle: 'Ability Tree',
      additionalTechs: '// Tecnologías Adicionales',
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Start a New Quest',
      subtitleDesc: '¿Interesado en trabajar juntos? Contáctame.',
      contactInfo: 'Información de Contacto',
      location: 'Ubicación',
      email: 'Email',
      phone: 'Teléfono',
      reference: 'Referencia',
      refName: 'José Gregorio Escalante Botello',
      refPhone: 'Tel: 313 442 0176',
      refEmail: 'Email: josegregorioescalante826@gmail.com',
      formTitle: 'Enviar Mensaje',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'tu@email.com',
      messagePlaceholder: 'Tu mensaje...',
      sendButton: 'Enviar Mensaje',
    },
    footer: {
      developer: 'Full Stack Developer',
      codedWith: 'coded_with_❤️',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      location: 'Cúcuta, Colombia',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
    },
    about: {
      title: 'About Me',
      subtitle: 'Player Stats',
      description1: 'Full Stack Developer with experience in advanced frontend with Angular, backend services integration with Node.js and AWS deployments.',
      description2: 'Experience in enterprise platforms, performance optimization, server-side pagination, API integration and production support.',
      description3: 'Committed to continuous learning, code quality and efficient solutions for complex challenges.',
      experience: 'Years Exp.',
      enterpriseApps: 'Enterprise Apps',
      apis: 'APIs',
      coffee: 'Coffee',
      currentMission: 'Current Mission',
      studying: 'Studying Systems Engineering',
    },
    projects: {
      title: 'Projects',
      subtitle: 'Quest Log',
      subtitleDesc: 'Projects developed during my experience at La Opinión S.A.',
      inProduction: 'In Production',
      active: 'Active',
      viewProject: 'View Project',
      viewAll: 'More Projects',
    },
    skills: {
      title: 'Skills',
      subtitle: 'Ability Tree',
      additionalTechs: '// Additional Technologies',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Start a New Quest',
      subtitleDesc: 'Interested in working together? Contact me.',
      contactInfo: 'Contact Information',
      location: 'Location',
      email: 'Email',
      phone: 'Phone',
      reference: 'Reference',
      refName: 'José Gregorio Escalante Botello',
      refPhone: 'Phone: 313 442 0176',
      refEmail: 'Email: josegregorioescalante826@gmail.com',
      formTitle: 'Send Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your@email.com',
      messagePlaceholder: 'Your message...',
      sendButton: 'Send Message',
    },
    footer: {
      developer: 'Full Stack Developer',
      codedWith: 'coded_with_❤️',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-language') as Language;
    if (saved && (saved === 'es' || saved === 'en')) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('portfolio-language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
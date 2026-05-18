'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import AnimatedSection from './AnimatedSection';

export default function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(language === 'es' ? '¡Gracias por contactarme! Te responderé pronto.' : 'Thanks for reaching out! I\'ll respond soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-[var(--bg-primary)] relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-[var(--accent-cyan)] font-mono text-sm">// {t.contact.title}</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mt-2">
              {t.contact.subtitle}
            </h2>
            <p className="text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto">
              {t.contact.subtitleDesc}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <AnimatedSection animation="fade-in-left" delay={100}>
              <div className="glass rounded-2xl p-6 border border-[var(--accent-cyan)]/20 hover-lift spotlight">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">{t.contact.contactInfo}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[var(--accent-cyan)]/20 flex items-center justify-center text-[var(--accent-cyan)]">
                      📍
                    </div>
                    <div>
                      <p className="text-[var(--text-secondary)] text-sm">{t.contact.location}</p>
                      <p className="text-[var(--text-primary)]">Cúcuta, Colombia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[var(--accent-violet)]/20 flex items-center justify-center text-[var(--accent-violet)]">
                      📧
                    </div>
                    <div>
                      <p className="text-[var(--text-secondary)] text-sm">{t.contact.email}</p>
                      <a href="mailto:desarrollo.digital1@laopinion.com.co" className="text-[var(--text-primary)] hover:text-[var(--accent-cyan)] transition-colors">
                        desarrollo.digital1@laopinion.com.co
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[var(--accent-pink)]/20 flex items-center justify-center text-[var(--accent-pink)]">
                      📱
                    </div>
                    <div>
                      <p className="text-[var(--text-secondary)] text-sm">{t.contact.phone}</p>
                      <a href="tel:3104914020" className="text-[var(--text-primary)] hover:text-[var(--accent-cyan)] transition-colors">
                        +57 310 491 4020
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-left" delay={200}>
              <div className="glass rounded-2xl p-6 border border-[var(--accent-violet)]/20 hover-lift spotlight">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">{t.contact.reference}</h3>
                <div className="text-[var(--text-secondary)]">
                  <p className="text-[var(--text-primary)] font-medium">{t.contact.refName}</p>
                  <p className="text-sm">{t.contact.refPhone}</p>
                  <p className="text-sm">{t.contact.refEmail}</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-in-right" delay={300}>
            <div className="glass rounded-2xl p-8 border border-[var(--accent-cyan)]/20 hover-lift spotlight">
              <div className="flex items-center gap-2 mb-6 text-[var(--text-secondary)] font-mono text-sm">
                <span className="text-[var(--accent-green)]">$</span>
                <span>./send_message.sh</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-mono text-[var(--text-secondary)] mb-2"
                  >
                    {'>'} name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[var(--bg-card)] border border-[rgba(255,255,255,0.1)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:border-[var(--accent-cyan)] focus:ring-1 focus:ring-[var(--accent-cyan)] transition-all outline-none font-mono"
                    placeholder={t.contact.namePlaceholder}
                  />
                </div>
                
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-mono text-[var(--text-secondary)] mb-2"
                  >
                    {'>'} email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[var(--bg-card)] border border-[rgba(255,255,255,0.1)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:border-[var(--accent-cyan)] focus:ring-1 focus:ring-[var(--accent-cyan)] transition-all outline-none font-mono"
                    placeholder={t.contact.emailPlaceholder}
                  />
                </div>
                
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-mono text-[var(--text-secondary)] mb-2"
                  >
                    {'>'} message:
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[var(--bg-card)] border border-[rgba(255,255,255,0.1)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:border-[var(--accent-cyan)] focus:ring-1 focus:ring-[var(--accent-cyan)] transition-all outline-none font-mono resize-none"
                    placeholder={t.contact.messagePlaceholder}
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[var(--accent-cyan)] to-[#06b6d4] text-[var(--bg-primary)] rounded-lg font-bold hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300"
                >
                  {t.contact.sendButton} →
                </button>
              </form>
          </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
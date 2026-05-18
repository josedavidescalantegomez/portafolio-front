'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    { name: 'GitHub', href: '#', icon: '⌘' },
    { name: 'LinkedIn', href: '#', icon: '◈' },
    { name: 'WhatsApp', href: 'https://wa.me/573104914020', icon: '💬' },
    { name: 'Email', href: 'mailto:desarrollo.digital1@laopinion.com.co', icon: '✉' },
  ];

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--accent-cyan)]/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[var(--accent-cyan)] font-mono">{'>'}</span>
            <span className="text-[var(--text-primary)] font-bold">José David Escalante</span>
            <span className="text-[var(--text-secondary)] text-sm">• {t.footer.developer}</span>
          </div>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name === 'WhatsApp' ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors font-mono text-sm"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-[rgba(255,255,255,0.05)] text-center">
          <p className="text-[var(--text-secondary)] text-sm font-mono">
            <span className="text-[var(--accent-green)]">function</span> © {new Date().getFullYear()} {'{ return ' + t.footer.codedWith + ' }'}
          </p>
        </div>
      </div>
    </footer>
  );
}
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { Language, Translation } from '@/types/translations';
import logo from '@/assets/logo.png';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  t: Translation;
}

export const Header = ({ lang, onLanguageChange, t }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { key: 'programs', href: '#programs' },
    { key: 'b2b', href: '#b2b' },
    { key: 'whyUs', href: '#why-us' },
    { key: 'guarantees', href: '#guarantees' },
    { key: 'faq', href: '#faq' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border ${
        lang === 'ar' ? 'rtl' : 'ltr'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Animated Logo */}
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.1 }}
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img src={logo} alt="EUROGATE Logo" className="h-12 object-contain" />
            </motion.div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-foreground/80 hover:text-accent transition-colors font-medium"
              >
                {t.header[item.key as keyof typeof t.header]}
              </a>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const langs: Language[] = ['fr', 'ar', 'en'];
                const currentIndex = langs.indexOf(lang);
                const nextLang = langs[(currentIndex + 1) % langs.length];
                onLanguageChange(nextLang);
              }}
              className="flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              {lang === 'fr' ? 'AR' : lang === 'ar' ? 'EN' : 'FR'}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              {menuItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 text-foreground/80 hover:text-accent transition-colors"
                >
                  {t.header[item.key as keyof typeof t.header]}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

import { motion } from 'framer-motion';
import { Mail, Phone, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Language, Translation } from '@/types/translations';

interface HeroProps {
  lang: Language;
  t: Translation;
}

export const Hero = ({ lang, t }: HeroProps) => {
  const handleConsultation = () => {
    window.location.href = 'mailto:zianikhaled.ro@gmail.com';
  };

  const handleDownloadGuide = () => {
    // Placeholder for guide download - could link to a PDF or lead capture form
    window.location.href = 'mailto:eurogate@outlook.fr?subject=Demande Guide Roumanie 2025';
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.6) contrast(1.1)' }}
        >
          <source src="/hero-video.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background"></div>
        <div className="absolute inset-0" style={{ background: 'var(--gradient-overlay)' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

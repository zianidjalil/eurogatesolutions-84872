import { motion } from 'framer-motion';
import { FileText, Mic } from 'lucide-react';
import heroTagline from '@/assets/hero-tagline.png';
import { Language, Translation } from '@/types/translations';

interface ResourcesSectionProps {
  lang: Language;
  t: Translation;
}

export const ResourcesSection = ({ lang, t }: ResourcesSectionProps) => {
  return (
    <section className="py-16 px-4 relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto">
        {/* PDF Guide Notice */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12 text-center"
        >
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {t.resources.pdfGuide}
          </p>
          <div className="flex justify-center">
            <FileText className="w-16 h-16 text-primary animate-pulse" />
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border my-12"></div>

        {/* Audio Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {t.resources.audioContent}
          </h3>
          <div className="flex flex-col items-center gap-4">
            <Mic className="w-12 h-12 text-accent animate-pulse" />
            <audio controls className="w-full max-w-md">
              <source src="/audio/podcast.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border my-12"></div>

        {/* Tagline Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <img 
            src={heroTagline} 
            alt="Distance is not a barrier, it's just a click away" 
            className="mx-auto max-w-2xl w-full rounded-lg shadow-[0_0_40px_rgba(16,185,129,0.3)]"
          />
        </motion.div>
      </div>
    </section>
  );
};

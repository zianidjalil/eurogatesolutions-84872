import { motion } from 'framer-motion';
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

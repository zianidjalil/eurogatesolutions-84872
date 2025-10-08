import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Target, CheckCircle, Network, Shield } from 'lucide-react';
import { Language, Translation } from '@/types/translations';

interface WhyUsProps {
  lang: Language;
  t: Translation;
}

export const WhyUs = ({ lang, t }: WhyUsProps) => {
  const icons = [Target, CheckCircle, Network, Shield];
  const colors = ['text-primary', 'text-secondary', 'text-accent', 'text-primary'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="why-us"
      className={`py-24 relative ${lang === 'ar' ? 'rtl' : 'ltr'}`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.whyUs.title}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {t.whyUs.items.map((item, index) => {
            const Icon = icons[index];
            const color = colors[index];
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 h-full border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] group">
                  <div className="mb-4">
                    <Icon
                      className={`w-12 h-12 ${color} group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

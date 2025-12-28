import { motion } from 'framer-motion';
import { Language, Translation } from '@/types/translations';
import skillsCenter1 from '@/assets/skills-center-1.jpg';
import skillsCenter2 from '@/assets/skills-center-2.jpg';

interface SkillsCenterPartnershipProps {
  lang: Language;
  t: Translation;
}

export const SkillsCenterPartnership = ({ lang, t }: SkillsCenterPartnershipProps) => {
  const isRtl = lang === 'ar';

  return (
    <section id="skills-center" className="py-20 relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.skillsCenter?.title || 'Skills Center Partnership'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.skillsCenter?.subtitle || 'Our strategic partner for training excellence in Algeria'}
          </p>
        </motion.div>

        <div className={`grid md:grid-cols-2 gap-8 items-center ${isRtl ? 'direction-rtl' : ''}`}>
          {/* Image 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl border border-border/30">
              <img
                src={skillsCenter1}
                alt="Skills Center training room"
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-foreground font-semibold text-lg">
                  {t.skillsCenter?.imageCaption1 || 'Modern Training Facilities'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl border border-border/30">
              <img
                src={skillsCenter2}
                alt="Skills Center facility"
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-foreground font-semibold text-lg">
                  {t.skillsCenter?.imageCaption2 || 'State-of-the-Art Learning Environment'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Partnership description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-muted-foreground leading-relaxed text-lg">
              {t.skillsCenter?.description || 'Skills Center is our trusted Algerian partner, providing world-class training facilities and expertise for upskilling and reskilling programs. Together, we deliver comprehensive educational solutions that prepare students and professionals for success in the European market.'}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

import { motion } from 'framer-motion';
import { GraduationCap, Rocket, Crown, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Language, Translation } from '@/types/translations';
import programsHero from '@/assets/programs-hero.png';

interface ProgramsProps {
  lang: Language;
  t: Translation;
}

const programIcons = [GraduationCap, Rocket, Crown, TrendingUp];

export const Programs = ({ lang, t }: ProgramsProps) => {
  return (
    <section id="programs" className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              🎯 {t.programs.title}
            </h2>
          </motion.div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.programs.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-16 max-w-5xl mx-auto"
        >
          <img 
            src={programsHero} 
            alt="Programmes Premium" 
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {t.programs.items.map((program, index) => {
            const Icon = programIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full border-2 border-border bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg hover:border-primary/60 transition-all duration-500 group relative overflow-hidden hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]">
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Populaire badge for first program */}
                  {index === 0 && (
                    <Badge className="absolute top-4 right-4 z-20 bg-primary text-primary-foreground animate-pulse">
                      {lang === 'fr' ? 'POPULAIRE' : 'شائع'}
                    </Badge>
                  )}
                  
                  <CardHeader className="relative z-10">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <Icon className="w-10 h-10 text-primary group-hover:text-accent transition-colors duration-500" />
                    </div>
                    <CardTitle className="text-2xl md:text-3xl mb-3 group-hover:text-primary transition-colors duration-300">
                      <span className={`${
                        program.name.includes('Formation') ? 'text-white font-bold' :
                        `bg-gradient-to-r ${
                          program.name.includes('Culture') ? 'from-yellow-500 via-yellow-500 to-yellow-500' :
                          program.name.includes('VIP') ? 'from-red-500 via-red-600 to-red-700' :
                          index === 0 ? 'from-blue-500 via-blue-600 to-yellow-500' :
                          index === 1 ? 'from-yellow-500 via-yellow-600 to-orange-500' :
                          'from-violet-600 via-violet-700 to-blue-600'
                        } bg-clip-text text-transparent font-bold`
                      }`}>
                        {program.name}
                      </span>
                    </CardTitle>
                    <CardDescription className="text-base font-semibold text-primary/80">
                      ⏱️ {program.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10 space-y-6">
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {program.description}
                    </p>
                    
                    {/* Features list */}
                    <div className="space-y-3 pt-4 border-t border-border/50">
                      {program.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                          className="flex items-start gap-3 group/feature"
                        >
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover/feature:scale-125 transition-transform duration-300" />
                          <span className="text-sm text-foreground/90 leading-relaxed">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

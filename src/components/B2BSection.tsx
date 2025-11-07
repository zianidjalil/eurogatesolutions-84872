import { motion } from 'framer-motion';
import { Building2, Users, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Language, Translation } from '@/types/translations';

interface B2BSectionProps {
  lang: Language;
  t: Translation;
}

const iconMap: Record<number, any> = {
  0: Building2,
  1: TrendingUp,
  2: Users,
};

export const B2BSection = ({ lang, t }: B2BSectionProps) => {
  const handleB2BContact = () => {
    window.location.href = 'mailto:eurogate@outlook.fr?subject=Demande B2B - Partenariats Entreprises';
  };

  return (
    <section id="b2b" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {t.b2b.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {t.b2b.subtitle}
          </p>
          <Button 
            onClick={handleB2BContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_rgba(16,185,129,0.5)]"
          >
            {t.b2b.cta}
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {t.b2b.items.map((item, index) => {
            const Icon = iconMap[index] || Building2;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {item.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* B2B Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-center">{t.b2b.contactForm.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <p className="text-muted-foreground">
                  Pour une proposition commerciale personnalisée, contactez-nous directement :
                </p>
                <div className="space-y-2">
                  <p className="font-semibold">📧 Email: eurogate@outlook.fr</p>
                  <p className="text-sm text-muted-foreground">
                    Mentionnez: Type d'organisation, volume annuel, et décrivez votre projet
                  </p>
                </div>
                <Button 
                  onClick={handleB2BContact}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  {t.b2b.contactForm.submit}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

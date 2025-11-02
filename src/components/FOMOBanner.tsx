import { motion } from 'framer-motion';
import { Clock, Users, Award } from 'lucide-react';
import soccerImage from '@/assets/soccer-fomo.jpg';
import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 5);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 bg-destructive/10 border-2 border-destructive rounded-lg px-4 py-3">
      <Clock className="w-5 h-5 text-destructive" />
      <div className="flex gap-3 font-mono text-lg font-bold">
        <span className="text-destructive">{timeLeft.days}j</span>
        <span className="text-muted-foreground">:</span>
        <span className="text-destructive">{String(timeLeft.hours).padStart(2, '0')}h</span>
        <span className="text-muted-foreground">:</span>
        <span className="text-destructive">{String(timeLeft.minutes).padStart(2, '0')}m</span>
        <span className="text-muted-foreground">:</span>
        <span className="text-destructive">{String(timeLeft.seconds).padStart(2, '0')}s</span>
      </div>
    </div>
  );
};

interface FOMOBannerProps {
  onReserveClick: () => void;
}

export const FOMOBanner = ({ onReserveClick }: FOMOBannerProps) => {
  return (
    <section className="py-16 px-4 relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={soccerImage}
                alt="Student success in Romania - Sports and academic excellence"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold"
              >
                ⚡ Offre limitée
              </motion.div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Ne Manquez Pas Votre Chance !
            </h2>

            <p className="text-lg text-muted-foreground">
              Voulez-vous économiser de l'argent… ou protéger votre avenir ?
            </p>
            <p className="text-base text-muted-foreground italic mt-2">
              Ce que vous décidez aujourd'hui définira ce que vous serez demain.
            </p>
            <p className="text-base font-semibold text-foreground mt-4">
              Le marché n'attend pas ceux qui 'préparent'. Il récompense ceux qui agissent avec audace.
            </p>

            <CountdownTimer />

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">🎓MasterClass exclusive dans 5 jours.</p>
                  <p className="text-sm text-muted-foreground">Première vague de candidats européens</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Partenaires Certifiés</p>
                  <p className="text-sm text-muted-foreground">Universités reconnues internationalement</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Inscription Rapide en 15 secondes</p>
                  <p className="text-sm text-muted-foreground">Process simplifié et efficace</p>
                </div>
              </motion.div>
            </div>

            <motion.button
              onClick={onReserveClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              Réservez Votre Place Maintenant
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import { motion } from 'framer-motion';
import { Clock, Users, Award } from 'lucide-react';
import soccerImage from '@/assets/soccer-fomo.jpg';

export const FOMOBanner = () => {
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
              Voulez-vous économiser de l'argent… Ou investir dans votre sécurité avec une gestion proactive des risques conçue pour les opérations UE–Afrique du Nord ?
            </p>
            <p className="text-base text-muted-foreground italic mt-2">
              La balle est dans votre camp.
            </p>

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
                  <p className="font-semibold text-foreground">Lancement en 5 jours ouvrables</p>
                  <p className="text-sm text-muted-foreground">Première vague de candidats</p>
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

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              Réservez Votre Place Maintenant
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

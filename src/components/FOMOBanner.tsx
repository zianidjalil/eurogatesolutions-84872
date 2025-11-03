import { motion } from 'framer-motion';

interface FOMOBannerProps {
  onReserveClick: () => void;
}

export const FOMOBanner = ({ onReserveClick }: FOMOBannerProps) => {
  return (
    <section className="py-16 px-4 relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto flex justify-center">
        <motion.button
          onClick={onReserveClick}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          Réservez Votre Place Maintenant
        </motion.button>
      </div>
    </section>
  );
};

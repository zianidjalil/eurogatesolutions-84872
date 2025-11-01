import { motion } from 'framer-motion';
import { Language, Translation } from '@/types/translations';
import P1 from '@/assets/gallery/P1.png';
import P2 from '@/assets/gallery/P2.png';
import P3 from '@/assets/gallery/P3.png';
import P4 from '@/assets/gallery/P4.png';
import P5 from '@/assets/gallery/P5.png';
import P6 from '@/assets/gallery/P6.png';
import P7 from '@/assets/gallery/P7.png';
import P8 from '@/assets/gallery/P8.png';
import P9 from '@/assets/gallery/P9.png';
import P10 from '@/assets/gallery/P10.png';
import P11 from '@/assets/gallery/P11.png';
import P12 from '@/assets/gallery/P12.png';
import ASE_INNOV from '@/assets/gallery/ASE_INNOV.png';

interface GalleryProps {
  lang: Language;
  t: Translation;
}

const galleryImages = [
  { src: P1, alt: 'Bucharest Central Library at sunset' },
  { src: P2, alt: 'Corvin Castle in Transylvania' },
  { src: P3, alt: 'Bran Castle, Dracula\'s Castle' },
  { src: P5, alt: 'Sucevita Monastery painted walls' },
  { src: P6, alt: 'Palace of Parliament aerial view' },
  { src: P7, alt: 'Sibiu old town panorama' },
  { src: P8, alt: 'Bucharest Unirii Square fountains' },
  { src: P9, alt: 'Bucharest city center aerial view' },
  { src: P10, alt: 'Brasov Council Square' },
  { src: P11, alt: 'Bucharest University buildings' },
  { src: P12, alt: 'University race event in Bucharest' },
  { src: ASE_INNOV, alt: 'Bucharest University of Economic Studies - WURI 2025 Rankings Global Top 400, 155th place' },
];

export const Gallery = ({ lang, t }: GalleryProps) => {
  const dropVariants = {
    hidden: { 
      y: -100, 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
    }
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
        >
          Galerie Roumanie
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
        >
          Découvrez la beauté et la richesse culturelle de la Roumanie
        </motion.p>

        {/* Gallery Grid */}
        <div className="gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="image-item group relative overflow-hidden rounded-lg border border-border hover:border-primary transition-all duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={dropVariants}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.34, 1.56, 0.64, 1] as any, // Bounce easing
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              style={{
                willChange: 'transform, opacity'
              }}
            >
              <div className="aspect-video overflow-hidden bg-card">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-foreground text-sm font-medium">{image.alt}</p>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(16,185,129,0.3)]"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS for reduced motion preference */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .image-item {
            animation: none !important;
          }
          .image-item * {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
};

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Facebook, Instagram } from 'lucide-react';
import { Language, Translation } from '@/types/translations';
import { SiTiktok } from 'react-icons/si';

interface ContactProps {
  lang: Language;
  t: Translation;
}

export const Contact = ({ lang, t }: ContactProps) => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.contact.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.a
              href="mailto:eurogate@outlook.fr"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.contact.email}</h3>
              <p className="text-muted-foreground">{t.contact.emailAddress}</p>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center text-center p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-border"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.contact.phone}</h3>
              <div className="flex gap-4 items-center">
                <a 
                  href="https://wa.me/213553725639" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <span className="text-xs text-muted-foreground">WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Addresses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 grid md:grid-cols-2 gap-6"
          >
            <div className="flex items-start gap-3 p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Algeria</h4>
                <p className="text-sm text-muted-foreground">Omar El Khelifa Street, Algiers 16000, Algeria</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">România</h4>
                <p className="text-sm text-muted-foreground">Drumul Belșugului n23, 062392 București</p>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <h3 className="text-xl font-semibold mb-6">Contactez-nous</h3>
            <div className="flex justify-center gap-6">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300"
              >
                <Facebook className="w-8 h-8 text-primary" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-8 h-8 text-primary" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300"
              >
                <SiTiktok className="w-8 h-8 text-primary" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

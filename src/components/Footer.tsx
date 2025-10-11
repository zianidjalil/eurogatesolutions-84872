import { Language } from '@/types/translations';
import algeriaFlag from '@/assets/algeria-flag-new.gif';
import romaniaFlag from '@/assets/romania-flag-new.gif';
import euFlag from '@/assets/eu-flag-new.gif';
import heroTagline from '@/assets/hero-tagline.png';
import { FileText, Mic } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer = ({ lang }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border py-12">
      <div className="container mx-auto px-4">
        {/* PDF Guide Notice */}
        <div className="max-w-4xl mx-auto mb-8 text-center">
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Envoyez-nous un e-mail et obtenez gratuitement votre guide PDF : « Le profil étudiant idéal pour étudier en Roumanie ».
          </p>
          <div className="flex justify-center">
            <FileText className="w-16 h-16 text-primary animate-pulse" />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Audio Content */}
        <div className="max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Audio Content
          </h3>
          <div className="flex flex-col items-center gap-4">
            <Mic className="w-12 h-12 text-accent animate-pulse" />
            <audio controls className="w-full max-w-md">
              <source src="/audio/podcast.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Tagline Image */}
        <div className="max-w-4xl mx-auto mb-8">
          <img 
            src={heroTagline} 
            alt="Distance is not a barrier, it's just a click away" 
            className="mx-auto max-w-2xl w-full rounded-lg shadow-[0_0_40px_rgba(16,185,129,0.3)]"
          />
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Privacy Section */}
        <div className="max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
            Confidentialité
          </h3>
          <div className="text-muted-foreground text-sm leading-relaxed space-y-3 text-center">
            <p>
              En nous contactant par e-mail ou par téléphone, vos données ne seront utilisées qu'après votre consentement exprès et uniquement pour répondre à votre demande, conformément à la loi algérienne n° 18-07.
            </p>
            <p>
              Nous ne collectons aucune donnée personnelle via ce site web. Si vous nous contactez par e-mail, 
              votre message sera utilisé uniquement pour répondre à votre demande et supprimé suite à votre accord dans un délai de{' '}
              <span className="font-semibold text-foreground">24 Heures</span>.
            </p>
            <p>
              Aucun cookie, outil d'analyse ou dispositif de suivi n'est utilisé.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Flags */}
        <div className="flex justify-center items-center gap-8 mb-8">
          <img src={algeriaFlag} alt="Algeria Flag" className="w-20 h-auto" />
          <img src={romaniaFlag} alt="Romania Flag" className="w-20 h-auto" />
          <img src={euFlag} alt="European Union Flag" className="w-20 h-auto" />
        </div>

        {/* Copyright */}
        <div className="text-center space-y-2">
          <p className="text-muted-foreground">
            © 2025 {lang === 'fr' ? "L'activité de l'entreprise Eurogate est enregistrée et tous droits réservés." : lang === 'en' ? 'Eurogate business activity is registered and all rights reserved.' : 'نشاط شركة Eurogate مسجل وجميع الحقوق محفوظة.'}
          </p>
          <p className="text-muted-foreground text-sm">
            Created by Eurogate Marketing team
          </p>
        </div>
      </div>
    </footer>
  );
};

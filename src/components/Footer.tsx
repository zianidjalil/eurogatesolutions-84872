import { Language } from '@/types/translations';
import { translations } from '@/translations';
import algeriaFlag from '@/assets/algeria-flag-new.gif';
import romaniaFlag from '@/assets/romania-flag-new.gif';
import euFlag from '@/assets/eu-flag-new.gif';

interface FooterProps {
  lang: Language;
}

export const Footer = ({ lang }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border py-12">
      <div className="container mx-auto px-4">
        {/* Privacy Section */}
        <div className="max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
            {translations[lang].footer.privacy.title}
          </h3>
          <div className="text-muted-foreground text-sm leading-relaxed space-y-3 text-center">
            <p>
              {translations[lang].footer.privacy.paragraph1}
            </p>
            <p>
              {translations[lang].footer.privacy.paragraph2}
            </p>
            <p>
              {translations[lang].footer.privacy.paragraph3}
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

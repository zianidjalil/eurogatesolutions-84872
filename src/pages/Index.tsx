import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Programs } from '@/components/Programs';
import { Gallery } from '@/components/Gallery';
import { B2BSection } from '@/components/B2BSection';
import { WhyUs } from '@/components/WhyUs';
import { ResourcesSection } from '@/components/ResourcesSection';
import { Guarantees } from '@/components/Guarantees';
import { RefundPolicy } from '@/components/RefundPolicy';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { FloatingElements } from '@/components/FloatingElements';
import { MatrixBackground } from '@/components/MatrixBackground';
import { translations } from '@/translations';
import { Language } from '@/types/translations';

const Index = () => {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang] || translations['en'];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <MatrixBackground />
      <FloatingElements />
      <div className="relative z-10">
        <Header lang={lang} onLanguageChange={setLang} t={t} />
        <Hero lang={lang} t={t} />
        <Programs lang={lang} t={t} />
        <Gallery lang={lang} t={t} />
        <B2BSection lang={lang} t={t} />
        <WhyUs lang={lang} t={t} />
        <ResourcesSection lang={lang} t={t} />
        <Guarantees lang={lang} t={t} />
        <RefundPolicy lang={lang} t={t} />
        <FAQ lang={lang} t={t} />
        <Contact lang={lang} t={t} />
        <Footer lang={lang} />
      </div>
    </div>
  );
};

export default Index;

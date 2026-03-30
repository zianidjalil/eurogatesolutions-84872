import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ChevronDown, Menu, X, Globe, Briefcase, GraduationCap, Brain } from 'lucide-react';
import profileImg from '@/assets/profile.jpg';
import { translations, Lang } from '@/i18n/translations';

const skillsList = [
  'NLP', 'Employee Training', 'Emotional Intelligence', 'Marketing Communication',
  'Cold Calling', 'B2B Marketing', 'Development Psychology', 'Business Process Outsourcing',
  'B2C Sales', 'Sales Negotiation & Contracts', 'Negotiation Techniques',
  'Interactive Teaching', 'CRM', 'E-learning', 'Gamification', 'BI Tools',
  'Digital Body Language', 'Affiliate Marketing', 'E-commerce',
];

const Index = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<Lang>('en');

  const t = translations[lang];

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const langLabels: Record<Lang, string> = { en: 'EN', fr: 'FR', ro: 'RO' };
  const nextLang: Record<Lang, Lang> = { en: 'fr', fr: 'ro', ro: 'en' };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 border-b border-border backdrop-blur-xl transition-all ${scrolled ? 'py-3 bg-background/95' : 'py-5 bg-background/80'}`}>
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-tight">Portfolio.</a>
          <ul className="hidden md:flex gap-8 items-center">
            {navLinks.map(l => (
              <li key={l.href}>
                <a href={l.href} className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors relative group">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => setLang(nextLang[lang])}
                className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground text-sm font-medium transition-colors border border-border rounded-md px-3 py-1.5"
              >
                <Globe className="w-4 h-4" />
                {langLabels[nextLang[lang]]}
              </button>
            </li>
          </ul>
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setLang(nextLang[lang])}
              className="flex items-center gap-1 text-muted-foreground text-sm border border-border rounded-md px-2 py-1"
            >
              <Globe className="w-4 h-4" />
              {langLabels[nextLang[lang]]}
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-3">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="text-muted-foreground hover:text-foreground text-sm font-medium">{l.label}</a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16 relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-[800px] text-center">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">{t.hero.subtitle}</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            <span className="bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">{t.hero.title1}</span>
            <br />
            <span className="bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">{t.hero.title2}</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-[600px] mx-auto mb-10 leading-relaxed">
            {t.hero.description}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#services" className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-all hover:-translate-y-0.5">{t.hero.cta1}</a>
            <a href="#contact" className="px-8 py-3 border border-border hover:border-muted-foreground text-foreground rounded-lg font-medium transition-all hover:-translate-y-0.5">{t.hero.cta2}</a>
          </div>
        </motion.div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="mb-16">
            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">{t.about.label}</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{t.about.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="rounded-xl overflow-hidden aspect-square bg-card">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop" alt="About" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">{t.about.p1}</p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">{t.about.p2}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 italic text-muted-foreground/70">{t.about.p3}</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="mb-16">
            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">{t.services.label}</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{t.services.title}</h2>
            <p className="text-muted-foreground mt-2">{t.services.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.services.items.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl hover:-translate-y-0.5 transition-all">
                <Briefcase className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-6 max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="mb-16">
            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">{t.experience.label}</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{t.experience.title}</h2>
          </div>
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border" />
            {t.experience.items.map((e, i) => (
              <div key={i} className="relative pb-12 last:pb-0">
                <div className="absolute -left-8 top-1.5 w-3 h-3 rounded-full bg-primary border-[3px] border-background" />
                <p className="text-primary text-sm mb-1">{e.date}</p>
                <h3 className="text-xl font-semibold">{e.title}</h3>
                <p className="text-muted-foreground mb-2">{e.company}</p>
                <p className="text-muted-foreground/70 text-sm leading-relaxed">{e.description}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="mb-16">
            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">{t.skills.label}</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{t.skills.title}</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {skillsList.map(s => (
              <span key={s} className="px-4 py-2 bg-muted border border-border rounded-md text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors cursor-default">{s}</span>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-card border border-border rounded-xl text-center">
              <Brain className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-1">CX & Sales</h3>
              <p className="text-muted-foreground text-sm">D2D, TeleSales, Closing, B2C & B2B</p>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl text-center">
              <GraduationCap className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-1">Training & Coaching</h3>
              <p className="text-muted-foreground text-sm">NLP, Emotional Intelligence, Interactive Teaching</p>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl text-center">
              <Briefcase className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-1">Business Intelligence</h3>
              <p className="text-muted-foreground text-sm">CRM, Gamification, BI Tools, E-commerce</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="text-center max-w-[600px] mx-auto">
            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">{t.contact.label}</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{t.contact.title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              {t.contact.description}
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="mailto:hello@example.com" className="flex items-center gap-2 text-muted-foreground border border-border px-6 py-3 rounded-lg hover:text-foreground hover:border-muted-foreground transition-all hover:-translate-y-0.5">
                <Mail className="w-5 h-5" /> Email
              </a>
              <a href="#" className="flex items-center gap-2 text-muted-foreground border border-border px-6 py-3 rounded-lg hover:text-foreground hover:border-muted-foreground transition-all hover:-translate-y-0.5">
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
              <a href="#" className="flex items-center gap-2 text-muted-foreground border border-border px-6 py-3 rounded-lg hover:text-foreground hover:border-muted-foreground transition-all hover:-translate-y-0.5">
                <Github className="w-5 h-5" /> GitHub
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 text-center">
        <p className="text-muted-foreground/60 text-sm">{t.footer}</p>
      </footer>
    </div>
  );
};

function FadeIn({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {children}
    </div>
  );
}

export default Index;

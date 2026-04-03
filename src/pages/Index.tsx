import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, ChevronDown, Menu, X, Globe, Briefcase, GraduationCap, Brain, TrendingUp, Award, ChevronRight } from 'lucide-react';
import profileImg from '@/assets/profile.jpg';
import globeImg from '@/assets/cross-border-globe.jpg';
import { MatrixBackground } from '@/components/MatrixBackground';

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
    <div className="min-h-screen text-foreground">
      <MatrixBackground />
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
          <div className="md:hidden border-t border-border bg-background/90 backdrop-blur-md px-6 py-4 flex flex-col gap-3">
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

      {/* Cross-Border Globe */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="max-w-[800px] mx-auto">
          <FadeIn>
            <div className="relative flex items-center justify-center overflow-hidden rounded-2xl">
              <motion.div
                animate={{ scale: [1, 2, 2, 1] }}
                transition={{ duration: 40, repeat: Infinity, ease: 'easeInOut' }}
                className="relative overflow-hidden shadow-2xl shadow-primary/20 rounded-2xl"
              >
                <img
                  src={globeImg}
                  alt="Cross-Border Sales Intermediation Globe"
                  className="w-full h-auto block rounded-2xl"
                />
              </motion.div>
              {/* Ambient glow */}
              <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent pointer-events-none rounded-2xl" />
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="about" className="py-24 px-6 max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="mb-16">
            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">{t.about.label}</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{t.about.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              {/* Cinematic frame with glow */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-primary/30 via-transparent to-primary/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/40 to-transparent rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-card border border-border/50 shadow-2xl shadow-primary/10">
                <img src={profileImg} alt="Profile" className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                {/* Film grain overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20 pointer-events-none" />
                {/* Letterbox bars for cinematic feel */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-background/60 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-background/60 pointer-events-none" />
              </div>
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
              <div key={i} className="flex items-start gap-3 p-4 bg-card/70 backdrop-blur-sm border border-border rounded-xl hover:-translate-y-0.5 transition-all">
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

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { value: '14+', label: 'Years Experience' },
              { value: '600K+', label: 'B2C Customers Managed' },
              { value: '96%', label: 'Client Retention' },
              { value: '€1.2M', label: 'Revenue Unlocked' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, type: 'spring' }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="p-5 bg-card/80 backdrop-blur-sm border border-border rounded-xl text-center"
                style={{ perspective: '1000px' }}
              >
                <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-muted-foreground text-xs mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute left-0 md:left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-border" />
            {t.experience.items.map((e, i) => (
              <TimelineCard key={i} item={e} index={i} />
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
              <span key={s} className="px-4 py-2 bg-muted/70 backdrop-blur-sm border border-border rounded-md text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors cursor-default">{s}</span>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
             <div className="p-6 bg-card/70 backdrop-blur-sm border border-border rounded-xl text-center">
              <Brain className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-1">CX & Sales</h3>
              <p className="text-muted-foreground text-sm">D2D, TeleSales, Closing, B2C & B2B</p>
            </div>
             <div className="p-6 bg-card/70 backdrop-blur-sm border border-border rounded-xl text-center">
              <GraduationCap className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-1">Training & Coaching</h3>
              <p className="text-muted-foreground text-sm">NLP, Emotional Intelligence, Interactive Teaching</p>
            </div>
            <div className="p-6 bg-card/70 backdrop-blur-sm border border-border rounded-xl text-center">
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
              <a href="mailto:eurogate@outlook.fr" className="flex items-center gap-2 text-muted-foreground border border-border px-6 py-3 rounded-lg hover:text-foreground hover:border-muted-foreground transition-all hover:-translate-y-0.5">
                <Mail className="w-5 h-5" /> Email
              </a>
              <a href="https://www.linkedin.com/in/khaled-ziani-4849b0366" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground border border-border px-6 py-3 rounded-lg hover:text-foreground hover:border-muted-foreground transition-all hover:-translate-y-0.5">
                <Linkedin className="w-5 h-5" /> LinkedIn
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

interface TimelineItem {
  date: string;
  title: string;
  company: string;
  description: string;
  highlights: string[];
}

function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const hasHighlights = item.highlights && item.highlights.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: -40, rotateX: 10 }}
      whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.08, duration: 0.6, type: 'spring', stiffness: 100 }}
      className="relative pb-10 last:pb-0"
      style={{ perspective: '1200px' }}
    >
      {/* Pulse dot */}
      <motion.div
        className="absolute -left-8 md:-left-12 top-2 w-4 h-4 rounded-full bg-primary border-[3px] border-background shadow-lg shadow-primary/30"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 + 0.2, type: 'spring', stiffness: 300 }}
      />

      <motion.div
        whileHover={{ scale: 1.01, translateZ: 10 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className={`p-5 md:p-6 bg-card/80 backdrop-blur-sm border border-border rounded-xl cursor-pointer group hover:border-primary/30 transition-colors ${hasHighlights ? '' : ''}`}
        onClick={() => hasHighlights && setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-2">{item.date}</span>
            <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
            <p className="text-muted-foreground text-sm mt-0.5">{item.company}</p>
            <p className="text-muted-foreground/70 text-sm leading-relaxed mt-2">{item.description}</p>
          </div>
          {hasHighlights && (
            <motion.div
              animate={{ rotate: expanded ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className="mt-8 shrink-0"
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.div>
          )}
        </div>

        <AnimatePresence>
          {expanded && hasHighlights && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-border/50 space-y-2">
                {item.highlights.map((h, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: j * 0.05, duration: 0.3 }}
                    className="flex items-start gap-2"
                  >
                    {h.startsWith('🏆') ? (
                      <Award className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                    ) : (
                      <TrendingUp className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    )}
                    <span className="text-sm text-muted-foreground">{h.replace(/^🏆\s*/, '')}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

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

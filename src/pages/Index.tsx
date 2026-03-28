import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ChevronDown, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const skills = ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Three.js', 'CSS', 'HTML'];

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with modern UI, secure payments, and inventory management.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop',
  },
  {
    title: 'Dashboard Analytics',
    description: 'Real-time data visualization dashboard with interactive charts and reports.',
    tags: ['Vue.js', 'D3.js', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
  },
  {
    title: 'Mobile App',
    description: 'Cross-platform mobile application with seamless user experience and offline support.',
    tags: ['React Native', 'Redux', 'AWS'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop',
  },
];

const experience = [
  {
    date: '2022 - Present',
    title: 'Senior Developer',
    company: 'Tech Company Inc.',
    description: 'Leading development of scalable web applications, mentoring junior developers, and implementing best practices across the team.',
  },
  {
    date: '2020 - 2022',
    title: 'Full Stack Developer',
    company: 'Digital Agency',
    description: 'Built custom solutions for clients across various industries, from e-commerce to healthcare, using modern web technologies.',
  },
  {
    date: '2018 - 2020',
    title: 'Frontend Developer',
    company: 'Startup Studio',
    description: 'Developed responsive user interfaces and interactive features for multiple products, collaborating closely with design and backend teams.',
  },
];

const Index = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          <ul className="hidden md:flex gap-8">
            {navLinks.map(l => (
              <li key={l.href}>
                <a href={l.href} className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors relative group">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">Creative Developer</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            <span className="bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">Building Digital</span>
            <br />
            <span className="bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">Experiences</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-[600px] mx-auto mb-10 leading-relaxed">
            I'm a passionate developer crafting beautiful, functional, and user-centered digital experiences. Let's create something amazing together.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#projects" className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-all hover:-translate-y-0.5">View My Work</a>
            <a href="#contact" className="px-8 py-3 border border-border hover:border-muted-foreground text-foreground rounded-lg font-medium transition-all hover:-translate-y-0.5">Get In Touch</a>
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
            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">About Me</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Crafting Code with Purpose</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="rounded-xl overflow-hidden aspect-square bg-card">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop" alt="About" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">Hello! I'm a creative developer with a passion for building exceptional digital experiences. With years of experience in web development, I specialize in creating modern, responsive, and performant applications.</p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">My approach combines technical expertise with creative problem-solving to deliver solutions that not only look great but also provide real value to users and businesses.</p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.</p>
              <div className="flex flex-wrap gap-3">
                {skills.map(s => (
                  <span key={s} className="px-4 py-2 bg-muted border border-border rounded-md text-sm text-muted-foreground">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="mb-16">
            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(p => (
              <div key={p.title} className="bg-card border border-border rounded-xl overflow-hidden hover:-translate-y-1 transition-all group cursor-pointer">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(tag => (
                      <span key={tag} className="text-xs text-primary bg-primary/10 px-3 py-1 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-6 max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="mb-16">
            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">Career</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Work Experience</h2>
          </div>
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border" />
            {experience.map((e, i) => (
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

      {/* Contact */}
      <section id="contact" className="py-24 px-6 max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="text-center max-w-[600px] mx-auto">
            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Let's Work Together</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
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
        <p className="text-muted-foreground/60 text-sm">© 2024 Portfolio. All rights reserved. Built with passion and code.</p>
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

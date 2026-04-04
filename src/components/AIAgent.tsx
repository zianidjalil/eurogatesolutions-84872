import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Calendar, Sparkles } from 'lucide-react';

interface Message {
  role: 'bot' | 'user';
  text: string;
  options?: string[];
  isHighlight?: boolean;
}

const qualificationFlow: { question: string; options: string[]; next: Record<string, number> }[] = [
  {
    question: "👋 Hi! I'm Khaled's AI assistant. What brings you here today?",
    options: ['Looking for a BDM / Consultant', 'Exploring B2B partnerships', 'Interested in coaching/training', 'Just browsing'],
    next: { '0': 1, '1': 1, '2': 1, '3': 2 },
  },
  {
    question: "Great choice! Which market are you focused on?",
    options: ['European markets', 'North African markets', 'Cross-border (both)', 'Other'],
    next: { '0': 2, '1': 2, '2': 2, '3': 2 },
  },
  {
    question: "Perfect. Here's a quick look at what Khaled brings to the table:",
    options: ['Show me the CV highlights', 'Book a 30-min call now'],
    next: { '0': 3, '1': 4 },
  },
];

const cvHighlights = [
  '📊 14+ years across Sales, CX & Business Development',
  '🌍 B2B portfolio: Romania, Poland, Netherlands, France',
  '🏆 Archie Star Winner (2×) — Top performer in Eastern Europe',
  '💰 €1.2M hidden revenue unlocked via demand analysis',
  '📈 96% client retention rate (from 80%)',
  '🤝 600K+ B2C customers managed across markets',
  '🎯 72% conversion rate on hesitant property owners',
  '💊 $3M pharma inventory managed with 99.8% accuracy',
];

export const AIAgent = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState(0);
  const [typing, setTyping] = useState(false);
  const [started, setStarted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const startChat = () => {
    if (started) return;
    setStarted(true);
    setTyping(true);
    setTimeout(() => {
      setMessages([{
        role: 'bot',
        text: qualificationFlow[0].question,
        options: qualificationFlow[0].options,
      }]);
      setTyping(false);
    }, 800);
  };

  useEffect(() => {
    if (open && !started) startChat();
  }, [open]);

  const handleOption = (optionIndex: number, optionText: string) => {
    const current = qualificationFlow[step];
    if (!current) return;

    const newMessages: Message[] = [
      ...messages.map(m => ({ ...m, options: undefined })),
      { role: 'user' as const, text: optionText },
    ];
    setMessages(newMessages);
    setTyping(true);

    const nextStep = current.next[String(optionIndex)] ?? step + 1;

    setTimeout(() => {
      if (nextStep === 3) {
        // Show CV highlights
        setMessages(prev => [
          ...prev,
          { role: 'bot', text: '⚡ Here are Khaled\'s key highlights:', isHighlight: true },
          ...cvHighlights.map(h => ({ role: 'bot' as const, text: h, isHighlight: true })),
          { role: 'bot', text: 'Ready to discuss how these skills can help your business?', options: ['Book a 30-min call', 'Ask another question'] },
        ]);
        setStep(4);
      } else if (nextStep === 4 || optionText.toLowerCase().includes('book')) {
        // Book call
        setMessages(prev => [
          ...prev,
          { role: 'bot', text: '🗓️ Let\'s set up a 30-minute discovery call! Click below to book directly:' },
        ]);
        setStep(5);
      } else if (nextStep < qualificationFlow.length) {
        setMessages(prev => [
          ...prev,
          {
            role: 'bot',
            text: qualificationFlow[nextStep].question,
            options: qualificationFlow[nextStep].options,
          },
        ]);
        setStep(nextStep);
      }
      setTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/40 flex items-center justify-center hover:scale-110 transition-transform"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ display: open ? 'none' : 'flex' }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-4rem)] bg-card border border-border rounded-2xl shadow-2xl shadow-primary/20 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-primary/10 to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">AI Assistant</p>
                  <p className="text-xs text-primary flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                    Online
                  </p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: msg.isHighlight ? i * 0.05 : 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] ${
                    msg.role === 'user'
                      ? 'bg-primary text-primary-foreground rounded-2xl rounded-br-sm px-4 py-2.5'
                      : msg.isHighlight
                        ? 'bg-primary/5 border border-primary/20 rounded-xl px-4 py-2 text-sm text-foreground'
                        : 'bg-muted/50 border border-border rounded-2xl rounded-bl-sm px-4 py-2.5 text-foreground'
                  }`}>
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                </motion.div>
              ))}

              {/* Options */}
              {messages.length > 0 && messages[messages.length - 1].options && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {messages[messages.length - 1].options!.map((opt, i) => (
                    <motion.button
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      onClick={() => handleOption(i, opt)}
                      className="text-xs px-3 py-2 border border-primary/30 text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      {opt}
                    </motion.button>
                  ))}
                </div>
              )}

              {/* Typing indicator */}
              {typing && (
                <div className="flex justify-start">
                  <div className="bg-muted/50 border border-border rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                    <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} className="w-2 h-2 bg-primary rounded-full" />
                    <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} className="w-2 h-2 bg-primary rounded-full" />
                    <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                </div>
              )}

              {/* Book Call CTA */}
              {step === 5 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="pt-4"
                >
                  <a
                    href="mailto:eurogate@outlook.fr?subject=Book%2030-min%20Discovery%20Call"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/30"
                  >
                    <Calendar className="w-4 h-4" />
                    Book 30-min Call
                  </a>
                </motion.div>
              )}
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-border bg-card/50">
              <div className="flex items-center gap-2 text-xs text-muted-foreground justify-center">
                <Sparkles className="w-3 h-3 text-primary" />
                Powered by AI · Level 1 Qualification
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

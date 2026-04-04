import { useEffect, useRef } from 'react';

export const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const words = ['DATA', 'KPI', 'ROI', 'CRM', 'SQL', 'API', 'B2B', 'B2C', 'NLP', 'AI', 'BI', 'ETL', 'SaaS', 'LEAD', 'SALES', 'FUNNEL', 'REVENUE', 'CHURN', 'CLV', 'CAC', 'MRR', 'ARR', 'ANALYTICS', 'PIPELINE'];
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&+=<>{}[]';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Only draw on left 25% and right 25% of screen
        const xPos = i * fontSize;
        const leftEdge = canvas.width * 0.3;
        const rightEdge = canvas.width * 0.7;
        if (xPos > leftEdge && xPos < rightEdge) {
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
          drops[i]++;
          continue;
        }

        // Occasionally print a full word
        if (Math.random() > 0.98) {
          const word = words[Math.floor(Math.random() * words.length)];
          ctx.fillStyle = 'hsl(217, 100%, 60%)';
          ctx.fillText(word, xPos, drops[i] * fontSize);
        } else {
          const text = chars[Math.floor(Math.random() * chars.length)];
          const brightness = Math.random() > 0.9 ? 'hsl(217, 100%, 70%)' : 'hsl(217, 100%, 40%)';
          ctx.fillStyle = brightness;
          ctx.fillText(text, xPos, drops[i] * fontSize);
        }

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-30 z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

import { useEffect, useState, useRef } from 'react';
import { Download, ChevronDown, ExternalLink } from 'lucide-react';

const tags = ['IT SUPPORT', 'SERVICE DESK', 'INFORMATION SYSTEMS', 'PYTHON', 'DATABASES', 'AI', 'CYBERSECURITY'];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [tagVisible, setTagVisible] = useState<boolean[]>(Array(tags.length).fill(false));
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    tags.forEach((_, i) => {
      setTimeout(() => {
        setTagVisible(prev => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, 800 + i * 120);
    });
  }, [loaded]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#090909]"
    >
      {/* Background geometry */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 80px)' }}
        />
        {/* Red diagonal slab */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-crimson/10 via-transparent to-transparent" />
        <div className="absolute top-[23%] right-[6%] w-[31%] h-[62%] bg-[#151515] -skew-x-12 opacity-90" />
        {/* Large outlined letters */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end overflow-hidden leading-none select-none pointer-events-none">
          <span className="font-display font-black text-[20vw] text-stroke opacity-[0.03] whitespace-nowrap tracking-tighter">EJK</span>
        </div>
        {/* Thin red horizontal bar */}
        <div className="absolute top-32 right-0 w-1/3 h-px bg-gradient-to-l from-crimson/60 to-transparent" />
        <div className="absolute top-48 right-0 w-1/4 h-px bg-gradient-to-l from-crimson/30 to-transparent" />
        {/* Vertical line */}
        <div className="absolute top-0 left-[42%] w-px h-full bg-gradient-to-b from-transparent via-crimson/15 to-transparent" />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-20 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-[1.25fr_.75fr] gap-8 lg:gap-0 items-center">
          {/* Left — text */}
          <div className="order-2 lg:order-1">
            {/* Top label */}
            <div
              className={`flex items-center gap-3 mb-8 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '100ms' }}
            >
              <span className="w-2 h-2 rounded-full bg-crimson animate-pulse-red inline-block" />
              <span className="section-label">IT SERVICE DESK SUPPORT TECHNICIAN — CAPACITI</span>
            </div>

            {/* Main headline */}
            <h1
              className={`font-display font-black uppercase leading-none transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '250ms' }}
            >
              <span className="block whitespace-nowrap text-[9.5vw] sm:text-[7.2vw] lg:text-[5.6vw] xl:text-[5.35rem] text-white leading-[.94] tracking-[-.035em]">
                TECH SUPPORT.
              </span>
              <span className="block whitespace-nowrap text-[9.5vw] sm:text-[7.2vw] lg:text-[5.6vw] xl:text-[5.35rem] text-crimson leading-[.94] tracking-[-.035em]">
                SYSTEMS THINKING.
              </span>
              <span className="block whitespace-nowrap text-[9.5vw] sm:text-[7.2vw] lg:text-[5.6vw] xl:text-[5.35rem] text-white leading-[.94] tracking-[-.035em]">
                SMARTER SOLUTIONS.
              </span>
            </h1>

            {/* Supporting statement */}
            <p
              className={`mt-8 text-charcoal-300 font-body leading-relaxed text-base max-w-2xl transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '450ms' }}
            >
              IT Support professional with an Information Systems background, hands-on technical experience and a growing focus on AI-powered technology.
            </p>

            {/* CTA buttons */}
            <div
              className={`mt-8 flex flex-wrap gap-3 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '600ms' }}
            >
              <a href="#projects" className="btn-primary flex items-center gap-2">
                <span>View My Work</span>
              </a>
              <a
                href="/documents/Ethan_Krewu_CV_(2)_(1).docx"
                download
                className="btn-outline flex items-center gap-2"
              >
                <Download size={14} />
                <span>Download CV</span>
              </a>
              <a href="#contact" className="flex items-center gap-2 border border-crimson/40 text-crimson font-display font-bold uppercase tracking-widest px-8 py-4 text-sm hover:border-crimson hover:bg-crimson/10 transition-all duration-200">
                <span>Let's Connect</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Tags */}
            <div
              className={`mt-10 flex flex-wrap gap-2 transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '750ms' }}
            >
              {tags.map((tag, i) => (
                <span
                  key={tag}
                  className={`tag-label text-[10px] px-3 py-1.5 border transition-all duration-300 ${
                    tagVisible[i]
                      ? 'border-white/20 text-charcoal-300 opacity-100 translate-y-0'
                      : 'border-transparent text-transparent opacity-0 translate-y-2'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — photo */}
          <div
            className={`order-1 lg:order-2 flex justify-center lg:justify-end transition-all duration-1000 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative">
              {/* Decorative frames */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-crimson/80 -rotate-3" />
              <div className="absolute -top-8 left-8 w-full h-full bg-[#171717] -skew-x-12 -rotate-2 opacity-80" />
              <div className="absolute -top-2 -left-2 w-full h-full border border-white/5 rotate-1" />

              {/* Photo container */}
              <div className="relative w-72 sm:w-80 lg:w-[340px] xl:w-[380px] overflow-hidden rotate-1 shadow-2xl border border-white/10">
                <img
                  src="/images/EthanK.jpeg"
                  alt="Ethan Jesse Krewu — IT Support & Information Systems Professional"
                  className="w-full h-auto object-cover object-top"
                  style={{ aspectRatio: '3/4' }}
                />
                {/* Red overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />

                {/* Label on photo */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-4 h-px bg-crimson" />
                    <span className="tag-label text-[10px] text-crimson">EK / IT SUPPORT</span>
                  </div>
                  <p className="font-display font-black text-white text-sm uppercase tracking-wider">
                    Cape Town, SA
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -right-4 top-8 bg-crimson px-3 py-2 shadow-lg -rotate-2 hidden sm:block">
                <p className="font-display font-black text-white text-xs uppercase tracking-widest leading-none">BCom (Hons)</p>
                <p className="font-display font-bold text-white/80 text-[10px] uppercase tracking-wider mt-0.5">Info Systems</p>
              </div>

              {/* Side label */}
              <div className="absolute -left-10 top-1/2 -translate-y-1/2 -rotate-90 hidden lg:block">
                <span className="tag-label text-[9px] text-charcoal-500 tracking-[4px]">INFORMATION SYSTEMS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1200ms' }}>
        <span className="tag-label text-[9px] text-charcoal-500 tracking-[4px]">SCROLL</span>
        <ChevronDown size={16} className="text-crimson animate-bounce" />
      </div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-black/40 py-2 overflow-hidden">
        <div className="marquee-content font-oswald text-[10px] uppercase tracking-widest text-charcoal-600">
          {Array(8).fill('IT SUPPORT · SERVICE DESK · INFORMATION SYSTEMS · AI · PYTHON · DATABASES · CYBERSECURITY · ').join('')}
        </div>
      </div>
    </section>
  );
}

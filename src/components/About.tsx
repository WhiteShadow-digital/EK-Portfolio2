import { useEffect, useRef } from 'react';
import { User, Layers, Cpu, MessageSquare, Target } from 'lucide-react';

const approach = [
  { step: 'Understand', desc: 'Gather all relevant context from the user or system.' },
  { step: 'Troubleshoot', desc: 'Systematically diagnose root causes rather than surface symptoms.' },
  { step: 'Solve', desc: 'Apply practical, effective solutions with the right tools.' },
  { step: 'Communicate', desc: 'Translate technical outcomes into clear, accessible language.' },
  { step: 'Improve', desc: 'Reflect on what worked and identify opportunities to do better.' },
];

const domains = [
  { icon: <Cpu size={18} />, label: 'IT Support & Service Desk' },
  { icon: <Layers size={18} />, label: 'Database Systems' },
  { icon: <User size={18} />, label: 'Application Development' },
  { icon: <MessageSquare size={18} />, label: 'Technical Communication' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach(el => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const addRef = (i: number) => (el: HTMLElement | null) => { elementsRef.current[i] = el; };

  return (
    <section id="about" ref={sectionRef} className="relative bg-charcoal-950 py-28 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-64 h-64 border border-crimson/5 rotate-45 translate-x-32 -translate-y-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 border border-white/3 -rotate-12 -translate-x-24 translate-y-24 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-px h-64 bg-gradient-to-b from-transparent via-crimson/20 to-transparent pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div ref={addRef(0)} className="reveal mb-16">
          <span className="section-label block mb-3">01 — WHO IS ETHAN?</span>
          <div className="flex items-end gap-6">
            <h2 className="font-display font-black uppercase text-6xl sm:text-7xl lg:text-8xl leading-none text-white">
              ABOUT
            </h2>
            <span className="font-display font-black text-6xl sm:text-7xl lg:text-8xl leading-none text-stroke-red hidden sm:block">
              ME
            </span>
          </div>
          <div className="w-16 h-0.5 bg-crimson mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — description */}
          <div>
            <div ref={addRef(1)} className="reveal space-y-5 text-charcoal-200 font-body leading-relaxed">
              <p className="text-lg">
                An adaptable, detail-oriented IT professional with a background spanning technical troubleshooting, full-stack application development and database administration — currently working as an IT Support Help Desk Technician at CAPACITI.
              </p>
              <p>
                Pursuing a BCom (Hons) in Information Systems at the University of the Western Cape, this professional brings a combination of academic rigour and applied technical competency. The skillset bridges the gap between understanding complex systems and communicating solutions in ways that are meaningful to the people using them.
              </p>
              <p>
                A core strength is the ability to approach technical challenges from multiple angles — as a systems thinker, as a developer, and as someone who genuinely listens to what users need. Whether diagnosing a technical fault or building a database-backed application, the focus remains on delivering solutions that work in practice, not just in theory.
              </p>
              <p>
                Beyond technical work, a growing interest in artificial intelligence, responsible AI use, and cybersecurity reflects a commitment to staying ahead of the technologies that are shaping the future of IT support and information systems.
              </p>
            </div>

            {/* Domain tags */}
            <div ref={addRef(2)} className="reveal mt-8 grid grid-cols-2 gap-3">
              {domains.map(d => (
                <div key={d.label} className="skill-card flex items-center gap-3 px-4 py-3">
                  <span className="text-crimson flex-shrink-0">{d.icon}</span>
                  <span className="font-display font-semibold text-xs uppercase tracking-wider text-charcoal-200">
                    {d.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div ref={addRef(3)} className="reveal mt-6 flex items-center gap-3">
              <span className="section-label text-[10px]">Languages:</span>
              <span className="font-body text-sm text-charcoal-200">English &nbsp;·&nbsp; Afrikaans</span>
            </div>

            {/* Career direction */}
            <div className="mt-8 border border-crimson/25 bg-crimson/5 p-5">
              <div className="flex items-start gap-4">
                <Target size={20} className="mt-0.5 flex-shrink-0 text-crimson" />
                <div>
                  <p className="section-label text-[10px] mb-2">Career Direction</p>
                  <p className="font-body text-sm leading-relaxed text-charcoal-200">
                    Building a career in IT support and information systems, with a long-term focus on service improvement, practical automation, responsible AI and secure technology solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — professional approach */}
          <div ref={addRef(4)} className="reveal">
            <div className="border border-white/8 bg-white/[0.02] p-8">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-px bg-crimson" />
                <span className="section-label text-[10px]">Professional Approach</span>
              </div>

              <div className="space-y-0">
                {approach.map((item, i) => (
                  <div key={item.step} className="relative">
                    <div className="flex gap-6 pb-8 group">
                      {/* Number + line */}
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 bg-crimson flex items-center justify-center font-display font-black text-white text-xs flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                          {String(i + 1).padStart(2, '0')}
                        </div>
                        {i < approach.length - 1 && (
                          <div className="w-px flex-1 bg-white/10 mt-2 min-h-[32px]" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="pt-1">
                        <p className="font-display font-black uppercase text-lg text-white leading-none mb-2">
                          {item.step}
                        </p>
                        <p className="font-body text-charcoal-400 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Location card */}
            <div className="mt-4 border border-crimson/20 bg-crimson/5 px-6 py-4 flex items-center gap-4">
              <div className="w-1 h-10 bg-crimson flex-shrink-0" />
              <div>
                <p className="font-display font-black text-white text-sm uppercase tracking-wider">Cape Town, Western Cape</p>
                <p className="font-body text-charcoal-400 text-xs mt-0.5">South Africa &nbsp;·&nbsp; Available for IT Support Roles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

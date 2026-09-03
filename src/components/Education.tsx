import { useEffect, useRef } from 'react';
import { GraduationCap, Shield, School } from 'lucide-react';

const educationItems = [
  {
    icon: <School size={20} />,
    institution: 'Apex High School',
    qualification: 'National Senior Certificate',
    period: '2022',
    current: false,
    highlight: 'Matriculated with a National Senior Certificate.',
  },
  {
    icon: <GraduationCap size={20} />,
    institution: 'University of the Western Cape',
    qualification: 'BCom Information Systems',
    period: '2023 – 2025',
    current: false,
    highlight: 'Dean\'s Merit List · UWC Merit Bursary · Subject Distinctions in Microeconomics, Economics, Databases & Data Modelling, and Information Systems',
  },
  {
    icon: <Shield size={20} />,
    institution: 'ABSA iNkanyezi IT & Cybersecurity Academy',
    qualification: 'Certificate — IT & Cybersecurity',
    period: 'March – September 2025',
    current: false,
    highlight: 'Cybersecurity fundamentals, IT audit, technology controls, automation and data analysis.',
  },
  {
    icon: <GraduationCap size={20} />,
    institution: 'University of the Western Cape',
    qualification: 'BCom (Hons) Information Systems',
    period: '2026 – Present',
    current: true,
    highlight: 'Postgraduate programme — Information Systems strategy, research methods and advanced IS topics.',
  },
];

export default function Education() {
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
      { threshold: 0.08 }
    );
    elementsRef.current.forEach(el => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const addRef = (i: number) => (el: HTMLElement | null) => { elementsRef.current[i] = el; };

  return (
    <section id="education" className="relative bg-charcoal-950 py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/20 to-transparent pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={addRef(0)} className="reveal mb-16">
          <span className="section-label block mb-3">07 — EDUCATION</span>
          <h2 className="font-display font-black uppercase text-6xl sm:text-7xl lg:text-8xl leading-none">
            <span className="text-white">THE</span>
            <span className="text-stroke-red ml-4">FOUNDATION</span>
          </h2>
          <div className="w-16 h-0.5 bg-crimson mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-crimson/60 via-crimson/20 to-transparent pointer-events-none" />

          <div className="space-y-10 pl-12 sm:pl-16">
            {educationItems.map((item, i) => (
              <div
                key={item.qualification}
                ref={addRef(i + 1)}
                className="reveal relative group"
              >
                {/* Dot */}
                <div className={`absolute -left-12 sm:-left-16 top-5 w-4 h-4 border-2 flex items-center justify-center transition-colors duration-300 ${
                  item.current
                    ? 'border-crimson bg-crimson'
                    : 'border-charcoal-600 bg-charcoal-950 group-hover:border-crimson'
                }`}>
                  <span className={`w-1.5 h-1.5 transition-colors duration-300 ${item.current ? 'bg-white' : 'bg-charcoal-600 group-hover:bg-crimson'}`} />
                </div>

                <div className={`border p-6 transition-all duration-300 ${
                  item.current
                    ? 'border-crimson/40 bg-crimson/5'
                    : 'border-white/8 bg-white/[0.015] hover:border-crimson/30'
                }`}>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-3">
                      <span className={`${item.current ? 'text-crimson' : 'text-charcoal-500 group-hover:text-crimson transition-colors duration-200'}`}>
                        {item.icon}
                      </span>
                      <div>
                        <p className="font-display font-black text-xl text-white uppercase leading-tight">
                          {item.qualification}
                        </p>
                        <p className="font-body text-charcoal-400 text-sm mt-0.5">{item.institution}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-oswald text-charcoal-500 text-sm">{item.period}</span>
                      {item.current && (
                        <span className="flex items-center gap-1.5 bg-crimson/15 border border-crimson/30 px-2 py-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
                          <span className="tag-label text-[9px] text-crimson">CURRENT</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 border-t border-white/5 pt-4">
                    <p className="font-body text-charcoal-400 text-sm leading-relaxed">{item.highlight}</p>
                  </div>
                </div>

                {/* Year label */}
                <div className="absolute -left-2 sm:-left-4 top-0 -mt-5">
                  <span className="font-display font-black text-[10px] text-charcoal-700 uppercase tracking-widest">
                    {item.period.split('–')[0].trim()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

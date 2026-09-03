import { useEffect, useRef } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    id: 1,
    type: 'work',
    icon: <Briefcase size={16} />,
    role: 'IT Service Desk Support Technician',
    company: 'CAPACITI',
    period: '2026 – Present',
    current: true,
    points: [
      'Providing IT service desk support across diverse technical queries',
      'Applying structured troubleshooting to diagnose and resolve technical issues',
      'Delivering client-facing technical support with clear, professional communication',
      'Building applied competencies in systems support and infrastructure',
      'Operating within a professional IT environment to develop practical support skills',
    ],
  },
  {
    id: 2,
    type: 'work',
    icon: <Briefcase size={16} />,
    role: 'Academic Support Tutor',
    company: 'Tensor Tutoring, Eersteriver',
    period: '2024',
    current: false,
    points: [
      'Provided academic support and tutoring to students',
      'Communicated complex concepts in accessible, student-friendly language',
      'Developed interpersonal, instructional and communication skills',
    ],
  },
  {
    id: 3,
    type: 'education',
    icon: <GraduationCap size={16} />,
    role: 'BCom (Hons) Information Systems',
    company: 'University of the Western Cape',
    period: '2026 – Present',
    current: true,
    points: [
      'Postgraduate honours programme in Information Systems',
      'Deepening expertise in information systems strategy, research and advanced IS topics',
    ],
  },
  {
    id: 4,
    type: 'education',
    icon: <GraduationCap size={16} />,
    role: 'BCom Information Systems',
    company: 'University of the Western Cape',
    period: '2023 – 2025',
    current: false,
    points: [
      'Dean\'s Merit List recognition — Faculty of Economic & Management Sciences',
      'UWC Merit Bursary Award recipient',
      'Subject distinctions in Microeconomics, Economics, Databases & Data Modelling, and Information Systems',
    ],
  },
];

export default function Experience() {
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
    <section id="experience" className="relative bg-black py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/30 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={addRef(0)} className="reveal mb-16">
          <span className="section-label block mb-3">04 — EXPERIENCE</span>
          <h2 className="font-display font-black uppercase text-6xl sm:text-7xl lg:text-8xl leading-none text-white">
            TIMELINE
          </h2>
          <div className="w-16 h-0.5 bg-crimson mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Centre line — desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-crimson/40 via-crimson/20 to-transparent -translate-x-1/2 pointer-events-none" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={exp.id}
                ref={addRef(i + 1)}
                className={`reveal relative grid lg:grid-cols-2 gap-6 lg:gap-12 items-start ${
                  i % 2 === 0 ? '' : 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1'
                }`}
              >
                {/* Card */}
                <div className={`border ${exp.current ? 'border-crimson/40 bg-crimson/5' : 'border-white/8 bg-white/[0.02]'} p-6 group card-hover`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 flex items-center justify-center flex-shrink-0 ${
                        exp.type === 'work' ? 'bg-crimson text-white' : 'border border-white/20 text-charcoal-400'
                      }`}>
                        {exp.icon}
                      </div>
                      <div>
                        <p className="tag-label text-[10px] text-charcoal-500">{exp.type === 'work' ? 'WORK' : 'EDUCATION'}</p>
                        <p className="font-display font-black text-xl text-white uppercase leading-tight group-hover:text-crimson transition-colors duration-200">
                          {exp.role}
                        </p>
                      </div>
                    </div>
                    {exp.current && (
                      <span className="flex-shrink-0 flex items-center gap-1.5 bg-crimson/15 border border-crimson/30 px-2 py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
                        <span className="tag-label text-[9px] text-crimson">CURRENT</span>
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-display font-bold text-sm text-charcoal-200 uppercase tracking-wide">{exp.company}</span>
                    <span className="w-1 h-1 rounded-full bg-charcoal-600" />
                    <span className="font-oswald text-xs text-charcoal-500">{exp.period}</span>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-charcoal-400 text-sm font-body leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-crimson/60 flex-shrink-0 mt-2" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline dot — desktop */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-crimson border-2 border-black items-center justify-center" style={{ top: '24px' }}>
                  <span className="w-1.5 h-1.5 bg-white" />
                </div>

                {/* Period label — opposite side */}
                <div className={`hidden lg:flex flex-col justify-start pt-6 ${i % 2 === 0 ? 'items-start pl-8' : 'items-end pr-8'}`}>
                  <span className="font-display font-black text-4xl text-stroke opacity-20">{exp.period.split('–')[0].trim()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

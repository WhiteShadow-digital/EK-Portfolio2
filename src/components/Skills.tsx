import { useEffect, useRef, useState } from 'react';
import { Monitor, Code2, Database, Bot, Users } from 'lucide-react';

const skillGroups = [
  {
    id: 'it',
    icon: <Monitor size={18} />,
    label: 'IT & Systems',
    color: 'from-blue-900/30 to-transparent',
    skills: [
      'Microsoft Windows 7', 'Microsoft Windows 10', 'Microsoft Windows 11',
      'IT Support', 'Technical Troubleshooting', 'Systems Support', 'Infrastructure Concepts',
    ],
  },
  {
    id: 'dev',
    icon: <Code2 size={18} />,
    label: 'Programming & Dev',
    color: 'from-crimson/20 to-transparent',
    skills: [
      'Python', 'HTML', 'CSS', 'JavaScript', 'Full-Stack Development',
    ],
  },
  {
    id: 'db',
    icon: <Database size={18} />,
    label: 'Databases',
    color: 'from-emerald-900/30 to-transparent',
    skills: [
      'Oracle Database', 'SQLite', 'SQL', 'PL/SQL', 'Oracle APEX', 'Firebase / Firestore',
    ],
  },
  {
    id: 'ai',
    icon: <Bot size={18} />,
    label: 'AI & Modern Technology',
    color: 'from-amber-900/20 to-transparent',
    skills: [
      'Artificial Intelligence', 'Generative AI', 'Prompt Engineering',
      'Machine Learning', 'AI Productivity Tools', 'Responsible AI',
    ],
  },
  {
    id: 'pro',
    icon: <Users size={18} />,
    label: 'Professional Skills',
    color: 'from-violet-900/20 to-transparent',
    skills: [
      'Analytical Problem-Solving', 'Technical Communication', 'Non-Technical Communication',
      'Collaborative Teamwork', 'Active Listening', 'Presentation', 'Interpersonal Communication',
    ],
  },
];

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState('it');
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
  const current = skillGroups.find(g => g.id === activeGroup)!;

  return (
    <section id="skills" className="relative bg-charcoal-950 py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      {/* Large BG number */}
      <div className="absolute right-0 top-0 font-display font-black text-[20vw] text-stroke opacity-[0.03] leading-none pointer-events-none select-none">
        03
      </div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={addRef(0)} className="reveal mb-16">
          <span className="section-label block mb-3">03 — TECHNICAL SKILLS</span>
          <h2 className="font-display font-black uppercase text-6xl sm:text-7xl lg:text-8xl leading-none text-white">
            SKILLS <span className="text-stroke-red">UNLOCKED</span>
          </h2>
          <div className="w-16 h-0.5 bg-crimson mt-4" />
          <p className="mt-4 text-charcoal-400 font-body text-sm max-w-xl">
            A growing technical toolkit developed through academic study, professional experience and independent learning.
          </p>
        </div>

        {/* Category tabs */}
        <div ref={addRef(1)} className="reveal mb-10 flex flex-wrap gap-2">
          {skillGroups.map(group => (
            <button
              key={group.id}
              onClick={() => setActiveGroup(group.id)}
              className={`flex items-center gap-2 px-5 py-2.5 font-display font-bold text-xs uppercase tracking-widest border transition-all duration-200 ${
                activeGroup === group.id
                  ? 'bg-crimson border-crimson text-white'
                  : 'border-white/10 text-charcoal-400 hover:border-crimson/50 hover:text-white'
              }`}
            >
              <span className={activeGroup === group.id ? 'text-white' : 'text-crimson'}>{group.icon}</span>
              {group.label}
            </button>
          ))}
        </div>

        {/* Skills panel */}
        <div ref={addRef(2)} className="reveal">
          <div className={`border border-white/8 bg-gradient-to-br ${current.color} bg-[#111] p-8 min-h-[280px]`}>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-crimson">{current.icon}</span>
              <span className="font-display font-black text-xl text-white uppercase tracking-wide">{current.label}</span>
              <span className="ml-auto tag-label text-[10px] text-charcoal-600">{current.skills.length} SKILLS</span>
            </div>

            <div className="flex flex-wrap gap-3">
              {current.skills.map((skill, i) => (
                <div
                  key={skill}
                  className="skill-card px-4 py-2.5 cursor-default"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-crimson" />
                    <span className="font-body text-sm text-charcoal-200">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* All-skills mini-grid */}
        <div ref={addRef(3)} className="stagger-children mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {skillGroups.map(group => (
            <button
              key={group.id}
              onClick={() => setActiveGroup(group.id)}
              className={`group border text-left p-4 transition-all duration-200 ${
                activeGroup === group.id ? 'border-crimson bg-crimson/10' : 'border-white/8 bg-white/[0.015] hover:border-crimson/40'
              }`}
            >
              <span className={`block mb-2 ${activeGroup === group.id ? 'text-crimson' : 'text-charcoal-500 group-hover:text-crimson transition-colors duration-200'}`}>
                {group.icon}
              </span>
              <p className="font-display font-bold text-xs uppercase tracking-wide text-white leading-tight">{group.label}</p>
              <p className="font-oswald text-[10px] text-charcoal-500 mt-1">{group.skills.length} skills</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

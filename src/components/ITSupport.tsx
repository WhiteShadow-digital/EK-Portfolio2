import { useEffect, useRef } from 'react';
import { Search, Activity, Wrench, CheckCircle2, MessageCircle } from 'lucide-react';

const workflow = [
  {
    num: '01',
    icon: <Search size={20} />,
    title: 'UNDERSTAND',
    desc: 'Listen actively and gather all relevant context from the user. Understand what the system should do versus what it is doing.',
  },
  {
    num: '02',
    icon: <Activity size={20} />,
    title: 'DIAGNOSE',
    desc: 'Analyse the symptoms, replicate the issue where possible, and identify potential root causes systematically.',
  },
  {
    num: '03',
    icon: <Wrench size={20} />,
    title: 'TROUBLESHOOT',
    desc: 'Apply appropriate troubleshooting steps — from the simple to the complex — to isolate and address the underlying issue.',
  },
  {
    num: '04',
    icon: <CheckCircle2 size={20} />,
    title: 'RESOLVE',
    desc: 'Implement or recommend an appropriate resolution that addresses the root cause, not just the surface symptom.',
  },
  {
    num: '05',
    icon: <MessageCircle size={20} />,
    title: 'COMMUNICATE',
    desc: 'Explain the resolution clearly and confirm the user is satisfied. Translate technical outcomes into accessible language.',
  },
];

const exposures = [
  'Technical Troubleshooting',
  'End-User Support',
  'Microsoft Windows Environments',
  'Systems Support',
  'Infrastructure Concepts',
  'Database Systems',
  'Application Troubleshooting',
  'Technical Communication',
  'Client-Facing Technical Delivery',
];

export default function ITSupport() {
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
    <section className="relative bg-black py-28 overflow-hidden">
      {/* BG accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/30 to-transparent" />
        <div className="absolute top-1/4 right-0 w-1/2 h-px bg-gradient-to-l from-white/5 to-transparent" />
        <div className="absolute top-3/4 left-0 w-1/3 h-px bg-gradient-to-r from-white/5 to-transparent" />
      </div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={addRef(0)} className="reveal mb-16">
          <span className="section-label block mb-3">02 — IT SUPPORT</span>
          <h2 className="font-display font-black uppercase leading-none">
            <span className="block text-5xl sm:text-6xl lg:text-7xl text-white">I SOLVE THE PROBLEM</span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl text-crimson">BEHIND THE PROBLEM.</span>
          </h2>
          <div className="w-16 h-0.5 bg-crimson mt-4" />
          <p className="mt-6 text-charcoal-400 font-body leading-relaxed max-w-2xl">
            IT support is not just about fixing what is broken — it is about understanding why it broke, communicating that clearly, and preventing it from happening again. The approach below reflects how technical support challenges are approached.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Workflow */}
          <div ref={addRef(1)} className="reveal">
            <div className="space-y-0">
              {workflow.map((step, i) => (
                <div key={step.num} className="group flex gap-5 pb-0">
                  {/* Left column: number + connector */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 border border-crimson/60 flex items-center justify-center text-crimson flex-shrink-0 group-hover:bg-crimson group-hover:text-white transition-all duration-300">
                      {step.icon}
                    </div>
                    {i < workflow.length - 1 && (
                      <div className="w-px bg-crimson/20 flex-1 min-h-[48px] my-1" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`pb-8 ${i === workflow.length - 1 ? 'pb-0' : ''}`}>
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="font-oswald text-crimson text-xs font-semibold">{step.num}</span>
                      <span className="font-display font-black uppercase text-lg text-white group-hover:text-crimson transition-colors duration-200">
                        {step.title}
                      </span>
                    </div>
                    <p className="font-body text-charcoal-400 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-charcoal-600 text-xs font-body italic border-l-2 border-white/10 pl-4">
              This represents the professional approach to IT support, providing a structured framework for consistent, quality delivery.
            </p>
          </div>

          {/* Exposures + visual */}
          <div>
            <div ref={addRef(2)} className="reveal border border-white/8 bg-white/[0.02] p-8 mb-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-px bg-crimson" />
                <span className="section-label text-[10px]">IT Support Background Includes</span>
              </div>
              <div className="space-y-2">
                {exposures.map((item) => (
                  <div key={item} className="flex items-center gap-3 group">
                    <span className="w-1 h-1 rounded-full bg-crimson flex-shrink-0 group-hover:scale-150 transition-transform duration-200" />
                    <span className="font-body text-sm text-charcoal-300 group-hover:text-white transition-colors duration-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats-style cards */}
            <div ref={addRef(3)} className="stagger-children grid grid-cols-2 gap-3">
              {[
                { label: 'Current Role', value: 'IT Service Desk' },
                { label: 'Employer', value: 'CAPACITI' },
                { label: 'Education', value: 'BCom (Hons) IS' },
                { label: 'Location', value: 'Cape Town, SA' },
              ].map((item) => (
                <div key={item.label} className="border border-white/8 bg-white/[0.015] p-4">
                  <p className="section-label text-[9px] text-charcoal-500 mb-1">{item.label}</p>
                  <p className="font-display font-bold text-white text-sm uppercase tracking-wide">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import { Trophy, Star, Cpu, Key, BookOpen, Award } from 'lucide-react';

const achievements = [
  {
    year: '2026',
    icon: <Trophy size={20} />,
    title: 'Top 6 Finalist',
    subtitle: 'Standard Bank & Amazon Web Services Hackathon',
    description: 'Co-developed a platform for micro-retailers that digitises "Buying Clubs" — cooperative purchasing groups that pool resources to access better pricing and supply chain efficiencies. Reaching the Top 6 out of a competitive field of participating teams.',
    type: 'Competition',
    highlight: true,
  },
  {
    year: '2025',
    icon: <Star size={20} />,
    title: "Dean's Merit List Certification",
    subtitle: 'UWC Faculty of Economic & Management Sciences',
    description: 'Awarded by the University of the Western Cape\'s Faculty of Economic and Management Sciences in recognition of outstanding academic performance and sustained excellence across the academic year.',
    type: 'Academic',
    highlight: false,
  },
  {
    year: '2025',
    icon: <Cpu size={20} />,
    title: 'Smart Farm Data Management System',
    subtitle: 'Agricultural Research Council Collaboration',
    description: 'Co-developed an integrated Smart Farm Data Management System in partnership with the Agricultural Research Council. The system enables real-time processing and analysis of data from IoT-based agricultural technologies, contributing to data-driven decision-making in commercial agriculture.',
    type: 'Project',
    highlight: false,
  },
  {
    year: '2024',
    icon: <Key size={20} />,
    title: 'Golden Key International Honour Society',
    subtitle: 'Membership Award',
    description: 'Inducted into the Golden Key International Honour Society — membership is awarded to the top 15% of students academically at eligible universities worldwide, recognising sustained scholastic achievement.',
    type: 'Academic Honour',
    highlight: false,
  },
  {
    year: '2024',
    icon: <BookOpen size={20} />,
    title: 'Second-Year Subject Distinctions',
    subtitle: 'University of the Western Cape',
    description: 'Achieved academic distinctions across four second-year subjects — Microeconomics, Economics, Databases & Data Modelling, and Information Systems — demonstrating rigorous understanding across both quantitative economics and technical information systems disciplines.',
    type: 'Academic',
    highlight: false,
  },
  {
    year: '2023–2024',
    icon: <Award size={20} />,
    title: 'UWC Merit Bursary Award',
    subtitle: 'University of the Western Cape',
    description: 'Recipient of the University of the Western Cape Merit Bursary, awarded to students who demonstrate consistently strong academic performance. The award reflects a commitment to academic excellence sustained across multiple academic periods.',
    type: 'Award',
    highlight: false,
  },
];

export default function Achievements() {
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
      { threshold: 0.06 }
    );
    elementsRef.current.forEach(el => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const addRef = (i: number) => (el: HTMLElement | null) => { elementsRef.current[i] = el; };

  return (
    <section id="achievements" className="relative bg-black py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/30 to-transparent pointer-events-none" />

      {/* BG text */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 font-display font-black text-[18vw] text-stroke opacity-[0.025] leading-none pointer-events-none select-none whitespace-nowrap">
        UNLOCKED
      </div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={addRef(0)} className="reveal mb-16">
          <span className="section-label block mb-3">08 — ACHIEVEMENTS</span>
          <h2 className="font-display font-black uppercase leading-none">
            <span className="block text-5xl sm:text-6xl lg:text-7xl text-white">ACHIEVEMENTS</span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl text-crimson">UNLOCKED.</span>
          </h2>
          <div className="w-16 h-0.5 bg-crimson mt-4" />
          <p className="mt-4 text-charcoal-400 font-body text-sm max-w-xl">
            Verified academic achievements, competition results and project accomplishments drawn from documented experience.
          </p>
        </div>

        {/* Featured achievement */}
        <div ref={addRef(1)} className="reveal mb-8">
          <div className="border border-crimson/50 bg-gradient-to-br from-crimson/10 to-transparent p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 font-display font-black text-[8rem] text-crimson opacity-5 leading-none pointer-events-none select-none">
              #1
            </div>
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-crimson flex items-center justify-center flex-shrink-0">
                <Trophy size={22} className="text-white" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="section-label text-[10px]">2026</span>
                  <span className="tag-label text-[9px] text-crimson border border-crimson/30 bg-crimson/10 px-2 py-0.5">COMPETITION</span>
                </div>
                <h3 className="font-display font-black text-2xl text-white uppercase leading-tight">Top 6 Finalist</h3>
                <p className="font-body text-charcoal-400 text-sm mt-1">Standard Bank & Amazon Web Services Hackathon</p>
                <p className="font-body text-charcoal-300 text-sm leading-relaxed mt-4 max-w-2xl">
                  Co-developed a platform for micro-retailers that digitises "Buying Clubs" — cooperative purchasing groups that pool resources to access better pricing and supply chain efficiencies. Reaching the Top 6 out of a competitive field of participating teams at a nationally recognised technology hackathon.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Remaining achievements */}
        <div ref={addRef(2)} className="stagger-children grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.slice(1).map((ach) => (
            <div
              key={ach.title}
              className="cert-card p-6 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 border border-crimson/30 flex items-center justify-center text-crimson flex-shrink-0 group-hover:bg-crimson group-hover:text-white transition-all duration-300">
                  {ach.icon}
                </div>
                <div>
                  <span className="tag-label text-[9px] text-charcoal-600">{ach.year}</span>
                  <p className="font-display font-black text-base text-white uppercase leading-tight mt-0.5 group-hover:text-crimson transition-colors duration-200">
                    {ach.title}
                  </p>
                </div>
              </div>
              <p className="font-body text-charcoal-500 text-xs mb-3">{ach.subtitle}</p>
              <div className="border-t border-white/5 pt-3">
                <p className="font-body text-charcoal-400 text-xs leading-relaxed">{ach.description}</p>
              </div>
              <div className="mt-3">
                <span className="tag-label text-[9px] text-charcoal-600 border border-charcoal-700/50 px-2 py-0.5">
                  {ach.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Award } from 'lucide-react';

interface Cert {
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  verifyUrl?: string;
}

interface CertGroup {
  id: string;
  label: string;
  count: number;
  certs: Cert[];
}

const certGroups: CertGroup[] = [
  {
    id: 'ai',
    label: 'AI & Machine Learning',
    count: 9,
    certs: [
      { title: 'Google AI Essentials Specialization', issuer: 'Google', year: '2025' },
      { title: 'Introduction to AI', issuer: 'Google', year: '2025' },
      { title: 'AI for Everyone', issuer: 'DeepLearning.AI', year: '2025' },
      { title: 'Generative AI with Large Language Models', issuer: 'DeepLearning.AI / AWS', year: '2025' },
      { title: 'Supervised Machine Learning: Regression and Classification', issuer: 'DeepLearning.AI / Stanford', year: '2025' },
      { title: 'Advanced Learning Algorithms', issuer: 'DeepLearning.AI / Stanford', year: '2025' },
      { title: 'Unsupervised Learning, Recommenders, Reinforcement Learning', issuer: 'DeepLearning.AI / Stanford', year: '2025' },
      { title: 'Python for Data Science and AI', issuer: 'Coursera', year: '7 August 2026' },
      { title: 'Use AI Responsibly', issuer: 'Google', year: '2025' },
    ],
  },
  {
    id: 'responsible',
    label: 'Responsible AI',
    count: 3,
    certs: [
      { title: 'Introduction to Responsible AI', issuer: 'Google Cloud', year: '2025' },
      { title: 'Trustworthy AI: Managing Bias, Ethics, and Accountability', issuer: 'Johns Hopkins University', year: '2025' },
      { title: 'Use AI Responsibly', issuer: 'Google', year: '2025' },
    ],
  },
  {
    id: 'professional',
    label: 'Professional Development',
    count: 8,
    certs: [
      { title: 'Write Professional Emails in English', issuer: 'Georgia Institute of Technology', year: '2025' },
      { title: 'Verbal Communications and Presentation Skills', issuer: 'STARWEAVER', year: '2025' },
      { title: 'Active Listening: Enhancing Communication Skills', issuer: 'Coursera', year: '2025' },
      { title: 'Developing Interpersonal Skills', issuer: 'IBM', year: '2025' },
      { title: 'Emotional Intelligence', issuer: 'Arizona State University', year: '2025' },
      { title: 'Finding Your Professional Voice: Confidence & Impact', issuer: 'University of London / Royal Central School of Speech and Drama', year: '2025' },
      { title: 'Introduction to Personal Branding', issuer: 'University of Virginia', year: '2025' },
      { title: 'Leading with Impact: Team Dynamics, Strategy and Ethics', issuer: 'Coursera', year: '2025' },
    ],
  },
  {
    id: 'cybersecurity',
    label: 'IT & Cybersecurity',
    count: 1,
    certs: [
      {
        title: 'ABSA iNkanyezi IT & Cybersecurity Academy',
        issuer: 'ABSA',
        year: 'March – September 2025',
      },
    ],
  },
];

function CertCard({ cert }: { cert: Cert }) {
  return (
    <div className="cert-card p-4 group">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <p className="font-display font-bold text-sm text-white uppercase leading-tight group-hover:text-crimson transition-colors duration-200">
            {cert.title}
          </p>
          <div className="flex items-center gap-2 mt-1.5">
            <span className="font-oswald text-xs text-charcoal-400">{cert.issuer}</span>
            <span className="w-1 h-1 rounded-full bg-charcoal-700" />
            <span className="font-oswald text-xs text-charcoal-500">{cert.year}</span>
          </div>
          {cert.credentialId && (
            <p className="font-oswald text-[10px] text-charcoal-600 mt-1">ID: {cert.credentialId}</p>
          )}
        </div>
        <div className="flex-shrink-0">
          {cert.verifyUrl ? (
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-crimson hover:text-white transition-colors duration-200 tag-label text-[9px]"
            >
              <ExternalLink size={10} />
              VERIFY
            </a>
          ) : (
            <Award size={14} className="text-charcoal-700 group-hover:text-crimson/40 transition-colors duration-200" />
          )}
        </div>
      </div>
    </div>
  );
}

function CertGroupPanel({ group }: { group: CertGroup }) {
  const [open, setOpen] = useState(group.id === 'ai');

  return (
    <div className="border border-white/8 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 hover:bg-white/[0.03] transition-colors duration-200 group"
      >
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-crimson flex items-center justify-center flex-shrink-0">
            <span className="font-display font-black text-white text-xs">{group.count}</span>
          </div>
          <div className="text-left">
            <p className="font-display font-black text-white uppercase text-base group-hover:text-crimson transition-colors duration-200">
              {group.label}
            </p>
            <p className="font-oswald text-xs text-charcoal-500">{group.count} Certification{group.count !== 1 ? 's' : ''}</p>
          </div>
        </div>
        {open ? (
          <ChevronUp size={18} className="text-crimson flex-shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-charcoal-500 group-hover:text-crimson flex-shrink-0 transition-colors duration-200" />
        )}
      </button>

      {open && (
        <div className="border-t border-white/5 bg-white/[0.01]">
          <div className="p-4 grid sm:grid-cols-2 gap-3">
            {group.certs.map((cert) => (
              <CertCard key={cert.title} cert={cert} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Certifications() {
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
  const totalCerts = certGroups.reduce((sum, g) => sum + g.count, 0);

  return (
    <section id="certifications" className="relative bg-black py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/30 to-transparent pointer-events-none" />
      <div className="absolute top-1/3 right-0 font-display font-black text-[15vw] text-stroke opacity-[0.02] leading-none pointer-events-none select-none">
        INTEL
      </div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={addRef(0)} className="reveal mb-16">
          <span className="section-label block mb-3">06 — CERTIFICATIONS</span>
          <div className="flex items-end gap-8">
            <h2 className="font-display font-black uppercase text-6xl sm:text-7xl lg:text-8xl leading-none text-white">
              INTEL
            </h2>
            <div className="mb-3 hidden sm:block">
              <span className="font-display font-black text-4xl text-crimson">{totalCerts}+</span>
              <span className="font-body text-charcoal-500 text-sm block">Certifications</span>
            </div>
          </div>
          <div className="w-16 h-0.5 bg-crimson mt-4" />
        </div>

        {/* Groups */}
        <div ref={addRef(1)} className="reveal space-y-3">
          {certGroups.map((group) => (
            <CertGroupPanel key={group.id} group={group} />
          ))}
        </div>

        {/* ABSA highlight */}
        <div ref={addRef(2)} className="reveal mt-8 border border-crimson/30 bg-crimson/5 p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-crimson flex items-center justify-center flex-shrink-0">
              <Award size={18} className="text-white" />
            </div>
            <div>
              <p className="font-display font-black text-white uppercase text-lg">ABSA iNkanyezi IT & Cybersecurity Academy</p>
              <p className="font-oswald text-charcoal-400 text-sm mt-1">March – September 2025</p>
              <p className="font-body text-charcoal-400 text-sm mt-3 leading-relaxed">
                A structured IT and cybersecurity programme covering IT audit fundamentals, cybersecurity principles, technology controls, automation and data analysis — providing a solid foundation in enterprise technology risk and control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

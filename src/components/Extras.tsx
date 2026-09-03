import { FormEvent, useEffect, useRef, useState } from 'react';
import { ArrowUpRight, CheckCircle2, Download, Mail, MapPin, Send, Linkedin, Terminal, UserRound } from 'lucide-react';

const learningAreas = [
  'IT Support', 'Artificial Intelligence', 'Machine Learning', 'Generative AI',
  'Python', 'Responsible AI', 'Cybersecurity', 'Communication', 'Leadership',
  'Personal Branding', 'Professional Development',
];

export function ProfessionalDevelopment() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('visible');
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="reveal relative bg-charcoal-950 py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30" style={{ backgroundImage: 'linear-gradient(135deg, transparent 0 49.8%, rgba(225,6,0,.12) 50%, transparent 50.2%)' }} />
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-14 items-center">
          <div>
            <span className="section-label block mb-3">09 — PROFESSIONAL DEVELOPMENT</span>
            <h2 className="font-display font-black uppercase text-6xl sm:text-7xl leading-none text-white">
              ALWAYS<br /><span className="text-crimson">LEARNING.</span>
            </h2>
            <div className="w-16 h-0.5 bg-crimson mt-5" />
            <p className="mt-6 text-charcoal-300 font-body leading-relaxed max-w-md">
              Technical capability grows through deliberate practice, formal learning and curiosity. Current development spans support, modern AI, cybersecurity and the communication skills that make technical work useful to people.
            </p>
          </div>

          <div className="border border-white/8 bg-black/30 p-6 sm:p-8">
            <div className="flex items-center justify-between mb-7">
              <div className="flex items-center gap-3">
                <Terminal size={18} className="text-crimson" />
                <span className="font-display font-bold text-white uppercase tracking-widest text-sm">Skill evolution</span>
              </div>
              <span className="font-oswald text-xs text-charcoal-600">{String(activeIndex + 1).padStart(2, '0')} / {String(learningAreas.length).padStart(2, '0')}</span>
            </div>
            <div className="h-2 bg-white/5 mb-8 overflow-hidden">
              <div className="h-full bg-crimson transition-all duration-500" style={{ width: `${((activeIndex + 1) / learningAreas.length) * 100}%` }} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {learningAreas.map((area, index) => (
                <button
                  key={area}
                  onClick={() => setActiveIndex(index)}
                  className={`text-left px-3 py-3 border font-display font-bold uppercase text-xs tracking-wide transition-all duration-200 ${activeIndex === index ? 'border-crimson bg-crimson text-white' : 'border-white/8 text-charcoal-400 hover:border-crimson/50 hover:text-white'}`}
                >
                  <span className="font-oswald text-[10px] mr-2 opacity-60">{String(index + 1).padStart(2, '0')}</span>
                  {area}
                </button>
              ))}
            </div>
            <p className="mt-6 text-charcoal-500 font-body text-xs leading-relaxed">
              Selected focus: <span className="text-white">{learningAreas[activeIndex]}</span>. This visual represents ongoing development, not a claim of equal proficiency across every area.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CVSection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('visible');
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="reveal relative bg-black py-24 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <div className="border border-crimson/40 bg-crimson/5 p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute -right-12 -top-20 font-display font-black text-[18rem] leading-none text-crimson opacity-[0.06] select-none pointer-events-none">CV</div>
          <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <span className="section-label block mb-3">10 — THE FULL BRIEF</span>
              <h2 className="font-display font-black uppercase text-5xl sm:text-6xl text-white leading-none">WANT THE<br /><span className="text-crimson">FULL BRIEF?</span></h2>
              <p className="mt-5 text-charcoal-300 font-body max-w-xl">Download the supplied professional CV for the complete overview of experience, education, projects, achievements and certifications.</p>
            </div>
            <a href="/documents/Ethan_Krewu_CV_(2)_(1).docx" download className="btn-primary inline-flex items-center justify-center gap-3 whitespace-nowrap">
              <Download size={17} /> Download CV
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
          {[
            ['Profile', 'IT Support · Information Systems · AI'],
            ['Experience', 'CAPACITI · Tensor Tutoring'],
            ['Projects', 'SmartTicket AI · Smart Farm'],
            ['Education', 'BCom IS · BCom (Hons) IS'],
          ].map(([label, value]) => (
            <div key={label} className="border border-white/8 bg-white/[0.02] px-4 py-4">
              <span className="section-label text-[9px] text-charcoal-600">{label}</span>
              <p className="font-display font-bold text-white text-sm uppercase mt-1">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative bg-charcoal-950 py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/30 to-transparent" />
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-16">
          <div>
            <span className="section-label block mb-3">11 — CONTACT</span>
            <h2 className="font-display font-black uppercase text-6xl sm:text-7xl leading-none text-white">LET'S<br /><span className="text-crimson">CONNECT.</span></h2>
            <div className="w-16 h-0.5 bg-crimson mt-5" />
            <p className="mt-6 text-charcoal-300 font-body leading-relaxed max-w-md">For professional conversations, opportunities or questions about the work, connect through LinkedIn or send a message below.</p>
            <a href="https://tinyurl.com/4k8yvy58" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 border border-white/10 px-5 py-4 text-white hover:border-crimson hover:text-crimson transition-all duration-200">
              <Linkedin size={18} />
              <span className="font-display font-bold uppercase tracking-widest text-sm">LinkedIn profile</span>
              <ArrowUpRight size={15} />
            </a>
            <div className="mt-8 space-y-3 text-sm text-charcoal-400 font-body">
              <div className="flex items-center gap-3"><MapPin size={16} className="text-crimson" /> Cape Town, Western Cape, South Africa</div>
              <div className="flex items-center gap-3"><Mail size={16} className="text-crimson" /> Professional enquiries via LinkedIn</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="border border-white/8 bg-black/25 p-6 sm:p-8">
            {sent && <div role="status" className="mb-5 flex items-start gap-3 border border-emerald-400/30 bg-emerald-400/5 p-4 text-emerald-300 text-sm font-body"><CheckCircle2 size={17} className="flex-shrink-0" /> Thanks for reaching out. Please use LinkedIn for the direct professional conversation.</div>}
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block"><span className="tag-label text-[10px] text-charcoal-500">Name</span><input required name="name" type="text" className="mt-2 w-full bg-white/[0.04] border border-white/10 px-4 py-3 text-white outline-none focus:border-crimson font-body" /></label>
              <label className="block"><span className="tag-label text-[10px] text-charcoal-500">Email</span><input required name="email" type="email" className="mt-2 w-full bg-white/[0.04] border border-white/10 px-4 py-3 text-white outline-none focus:border-crimson font-body" /></label>
            </div>
            <label className="block mt-4"><span className="tag-label text-[10px] text-charcoal-500">Subject</span><input required name="subject" type="text" className="mt-2 w-full bg-white/[0.04] border border-white/10 px-4 py-3 text-white outline-none focus:border-crimson font-body" /></label>
            <label className="block mt-4"><span className="tag-label text-[10px] text-charcoal-500">Message</span><textarea required name="message" rows={6} className="mt-2 w-full resize-y bg-white/[0.04] border border-white/10 px-4 py-3 text-white outline-none focus:border-crimson font-body" /></label>
            <button type="submit" className="btn-primary mt-5 inline-flex items-center gap-3"><Send size={15} /> Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/8 py-8">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div><p className="font-display font-black text-white text-lg uppercase tracking-wider">Ethan Jesse Krewu</p><p className="font-oswald text-[10px] text-charcoal-500 uppercase tracking-[3px] mt-1">IT Support · Information Systems · Technology</p></div>
        <div className="flex items-center gap-5"><span className="flex items-center gap-2 font-body text-xs text-charcoal-500"><MapPin size={13} className="text-crimson" /> Cape Town, South Africa</span><a href="https://tinyurl.com/4k8yvy58" target="_blank" rel="noopener noreferrer" className="text-charcoal-400 hover:text-crimson transition-colors" aria-label="LinkedIn"><Linkedin size={17} /></a><span className="w-2 h-2 bg-crimson rotate-45 animate-pulse" /></div>
        <p className="font-oswald text-[10px] text-charcoal-600">© {new Date().getFullYear()} ETHAN JESSE KREWU</p>
      </div>
    </footer>
  );
}

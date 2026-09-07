import { useEffect, useRef, useState } from 'react';
import { ExternalLink, ChevronRight, Zap, Sprout, Heart, Building2, Github } from 'lucide-react';

const connections = [
  {
    id: '01',
    icon: <Zap size={22} />,
    title: 'SMARTTICKET AI',
    subtitle: 'AI-Powered Workplace Support System',
    categories: ['AI', 'IT SUPPORT', 'AUTOMATION'],
    status: 'ACTIVE PROJECT',
    statusColor: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/5',
    description:
      'An AI-powered workplace ticketing system that enables employees to report workplace issues, automatically analyses the complaint, classifies the ticket and routes it to the appropriate department — eliminating the need for employees to determine where to direct their request.',
    details: [
      'AI-powered ticket classification and confidence scoring',
      'Automatic department routing (IT, HR, Finance, Operations)',
      'Tone and urgency detection',
      'AI-generated response suggestions',
      'Firebase / Firestore integration',
      'Email notification functionality',
      'Administrative ticket management dashboard',
    ],
    flow: ['User Submits Issue', 'AI Analyses Ticket', 'Classification', 'Department Routing', 'Ticket Management', 'Notification / Response'],
    tech: ['Python', 'Firebase / Firestore', 'AI / ML', 'Automation'],
    featured: true,
    link: 'https://studio--stellar-utility-470009-f0.us-central1.hosted.app/',
  },
  {
    id: '02',
    icon: <Sprout size={22} />,
    title: 'SMART FARM DATA MANAGEMENT',
    subtitle: 'IoT Agricultural Data System',
    categories: ['IoT', 'DATA', 'AGRICULTURE'],
    status: 'COMPLETED',
    statusColor: 'text-blue-400 border-blue-400/30 bg-blue-400/5',
    description:
      'Co-developed an integrated Smart Farm Data Management System in partnership with the Agricultural Research Council for real-time processing and analysis of data from IoT-based agricultural technologies.',
    details: [
      'Real-time IoT data processing and analysis',
      'Agricultural Research Council collaboration',
      'Integration of sensor and device data streams',
      'Database-backed data management system',
    ],
    tech: ['Python', 'MQTT', 'ESP32', 'Raspberry Pi', 'Oracle APEX', 'Database Systems'],
    featured: false,
    repo: 'https://github.com/LBuyana23/arc-smart-agric-data',
  },
  {
    id: '03',
    icon: <Heart size={22} />,
    title: 'AI & HEALTHCARE EXPLORATION',
    subtitle: 'Generative AI in Healthcare Contexts',
    categories: ['AI', 'HEALTHCARE', 'RESEARCH'],
    status: 'RESEARCH / ACADEMIC',
    statusColor: 'text-amber-400 border-amber-400/30 bg-amber-400/5',
    description:
      'Exploration and development of AI-enabled healthcare concepts, including AI chatbot applications, healthcare technology research, generative AI use cases and the principles of responsible AI implementation in sensitive contexts.',
    details: [
      'AI chatbot development and concept exploration',
      'Healthcare technology research and application',
      'Generative AI and LLM-based application concepts',
      'Responsible AI principles in sensitive domains',
      'AI screening and triage concept design',
    ],
    tech: ['Generative AI', 'Responsible AI', 'Python', 'Prompt Engineering'],
    featured: false,
  },
  {
    id: '04',
    icon: <Building2 size={22} />,
    title: 'BUSINESS & ENTERPRISE SYSTEMS',
    subtitle: 'Academic & Prototype Applications',
    categories: ['ERP', 'DATABASE', 'BUSINESS'],
    status: 'ACADEMIC / PROTOTYPE',
    statusColor: 'text-charcoal-400 border-charcoal-400/30 bg-charcoal-400/5',
    description:
      'Development of business-focused systems encompassing enterprise resource planning concepts, inventory management, booking systems, financial tracking and business process improvement — primarily developed in academic and prototype contexts.',
    details: [
      'ERP concepts and business process design',
      'Inventory management system development',
      'Booking and scheduling system prototypes',
      'Financial tracking and reporting systems',
      'Business process analysis and improvement',
      'Database-backed enterprise application development',
    ],
    tech: ['Oracle Database', 'Oracle APEX', 'SQL', 'PL/SQL', 'Python'],
    featured: false,
  },
];

export default function Projects() {
  const [active, setActive] = useState('01');
  const [showFlow, setShowFlow] = useState(false);
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
  const currentProject = connections.find(c => c.id === active)!;

  return (
    <section id="projects" className="relative bg-charcoal-950 py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/30 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-px h-64 bg-gradient-to-b from-transparent via-crimson/20 to-transparent pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={addRef(0)} className="reveal mb-16">
          <span className="section-label block mb-3">05 — PROJECTS</span>
          <h2 className="font-display font-black uppercase leading-none">
            <span className="block text-5xl sm:text-6xl lg:text-7xl text-white">CONFIDANT</span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl text-crimson">CONNECTIONS</span>
          </h2>
          <div className="w-16 h-0.5 bg-crimson mt-4" />
          <p className="mt-4 text-charcoal-400 font-body text-sm max-w-xl">
            Key projects and professional connections — each representing a distinct technical domain.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Connection list */}
          <div ref={addRef(1)} className="reveal lg:col-span-1">
            <div className="space-y-2">
              {connections.map((conn) => (
                <button
                  key={conn.id}
                  onClick={() => { setActive(conn.id); setShowFlow(false); }}
                  className={`w-full text-left border transition-all duration-300 p-5 group ${
                    active === conn.id
                      ? 'border-crimson bg-crimson/10'
                      : 'border-white/8 bg-white/[0.015] hover:border-crimson/40'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                      active === conn.id ? 'bg-crimson text-white' : 'border border-white/20 text-charcoal-500 group-hover:text-crimson group-hover:border-crimson/50'
                    }`}>
                      {conn.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-oswald text-crimson text-xs font-semibold">{conn.id}</span>
                      </div>
                      <p className={`font-display font-black text-sm uppercase leading-tight transition-colors duration-200 ${
                        active === conn.id ? 'text-white' : 'text-charcoal-200 group-hover:text-white'
                      }`}>
                        {conn.title}
                      </p>
                    </div>
                    <ChevronRight size={14} className={`flex-shrink-0 ml-auto transition-all duration-200 ${
                      active === conn.id ? 'text-crimson translate-x-0' : 'text-charcoal-600 -translate-x-1 group-hover:translate-x-0 group-hover:text-crimson'
                    }`} />
                  </div>

                  <div className="mt-3 pl-14 flex flex-wrap gap-1">
                    {conn.categories.map(cat => (
                      <span key={cat} className="tag-label text-[9px] text-charcoal-600 border border-charcoal-700 px-2 py-0.5">
                        {cat}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Project detail panel */}
          <div ref={addRef(2)} className="reveal lg:col-span-2">
            <div className="border border-white/8 bg-white/[0.02] p-8 h-full min-h-[500px]">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-oswald text-crimson text-sm font-semibold">CONNECTION {currentProject.id}</span>
                    <span className={`tag-label text-[9px] border px-2 py-0.5 ${currentProject.statusColor}`}>
                      {currentProject.status}
                    </span>
                  </div>
                  <h3 className="font-display font-black text-3xl text-white uppercase leading-tight">
                    {currentProject.title}
                  </h3>
                  <p className="font-body text-charcoal-500 text-sm mt-1">{currentProject.subtitle}</p>
                </div>
                <div className="text-crimson flex-shrink-0 opacity-40">{currentProject.icon}</div>
              </div>

              <div className="w-full h-px bg-white/8 mb-6" />

              {/* Description */}
              <p className="font-body text-charcoal-300 leading-relaxed mb-6 text-sm">
                {currentProject.description}
              </p>

              {/* SmartTicket flow diagram */}
              {currentProject.flow && (
                <div className="mb-6">
                  <button
                    onClick={() => setShowFlow(!showFlow)}
                    className="flex items-center gap-2 section-label text-[10px] hover:text-crimson transition-colors duration-200 mb-4"
                  >
                    <ExternalLink size={11} />
                    {showFlow ? 'HIDE' : 'SHOW'} SYSTEM FLOW
                  </button>
                  {showFlow && (
                    <div className="flex flex-wrap items-center gap-2">
                      {currentProject.flow.map((step, i) => (
                        <div key={step} className="flex items-center gap-2">
                          <div className="border border-crimson/40 bg-crimson/5 px-3 py-1.5">
                            <span className="font-display font-bold text-xs text-white uppercase tracking-wide">{step}</span>
                          </div>
                          {i < currentProject.flow!.length - 1 && (
                            <ChevronRight size={12} className="text-crimson flex-shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Capabilities */}
              <div className="mb-6">
                <p className="section-label text-[10px] mb-3">Key Capabilities</p>
                <div className="space-y-2">
                  {currentProject.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-crimson flex-shrink-0 mt-2" />
                      <span className="font-body text-sm text-charcoal-400">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack */}
              <div className="mb-6">
                <p className="section-label text-[10px] mb-3">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {currentProject.tech.map(tech => (
                    <span key={tech} className="tag-label text-[10px] border border-white/15 text-charcoal-300 px-3 py-1.5 hover:border-crimson/50 hover:text-white transition-all duration-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project links */}
              <div className="flex flex-wrap gap-3">
                {currentProject.link && (
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-3"
                  >
                    <ExternalLink size={15} /> View Live Project
                  </a>
                )}
                {currentProject.repo && (
                  <a
                    href={currentProject.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 border border-white/15 text-charcoal-200 font-display font-bold uppercase tracking-widest text-xs px-6 py-4 hover:border-crimson hover:text-crimson transition-all duration-200"
                  >
                    <Github size={15} /> View Repository
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

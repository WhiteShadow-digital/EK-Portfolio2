import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ITSupport from '@/components/ITSupport';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Education from '@/components/Education';
import Achievements from '@/components/Achievements';
import { ProfessionalDevelopment, CVSection, Contact, Footer } from '@/components/Extras';

export default function App() {
  return (
    <div className="bg-charcoal-950 text-charcoal-100 min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <ITSupport />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Achievements />
        <ProfessionalDevelopment />
        <CVSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

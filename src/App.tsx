import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { Achievements } from './components/Achievements';
import { Testimonials } from './components/Testimonials';
import { Philosophy } from './components/Philosophy';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-[#00FF66]/30 font-sans">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Services />
      <Achievements />
      <Testimonials />
      <Philosophy />
      <Contact />
      <Footer />
    </main>
  );
}


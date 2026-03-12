import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Achievements from '@/components/Achievements';
import TechStack from '@/components/TechStack';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <Navigation />
      <div className="pt-16">
        <About />
        <Achievements />
        <TechStack />
        <Experience />
        <Projects />
        <Contact />
      </div>
      
      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-zinc-400">
            © {new Date().getFullYear()} Tarun Kumar. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

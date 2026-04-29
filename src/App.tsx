import Nav from './components/Nav';
import Hero from './sections/Hero';
import About from './sections/About';
import Work from './sections/Work';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Contact from './sections/Contact';
import SideQuest from './sections/SideQuest';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Experience />
        <Education />
        <Contact />
        <SideQuest />
      </main>
      <footer
        style={{
          padding: 'var(--s-6) var(--s-5)',
          textAlign: 'center',
          color: 'var(--fg-dim)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          borderTop: '1px solid var(--border)',
        }}
      >
        // built with vite + react + ts + love ❤️ &nbsp;·&nbsp; deployed via github actions
      </footer>
    </>
  );
}

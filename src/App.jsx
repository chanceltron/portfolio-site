import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import { MarqueeSection } from './components/MarqueeSection';
import { NavBar } from './components/NavBar';
import { AlertMessage } from './components/AlertMessage';
import { Projects } from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      {/* <AlertMessage /> */}
      <NavBar />
      <Hero />
      <MarqueeSection />
      <Projects />
      <Experience />
      {/* <JobModal /> */}
      <Footer />
    </>
  );
}

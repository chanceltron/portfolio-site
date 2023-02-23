import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import { MarqueeSection } from './components/MarqueeSection';
import { JobModal } from './components/JobModal';
import { NavBar } from './components/NavBar';
import { AlertMessage } from './components/AlertMessage';
import { Projects } from './components/Projects';

export default function App() {
  return (
    <>
      <div className='h-screen w-full'>
        <AlertMessage />
        <div className='bg-stone-200'>
          <NavBar />
          <Hero />
        </div>
        <MarqueeSection />
      </div>
      <div className='bg-stone-200'>
        <Projects />
      </div>
      <Experience />
      <JobModal />
    </>
  );
}

import Experience from './components/Experience';
import { Hero } from './components/Hero';
import MarqueeSection from './components/MarqueeSection';
import { JobModal } from './components/JobModal';
import { NavBar } from './components/NavBar';
import { AlertMessage } from './components/AlertMessage';

export default function App() {
  return (
    <div className='h-screen w-full'>
      <AlertMessage />
      <div className='bg-stone-200'>
        <NavBar></NavBar>
        <Hero />
      </div>
      <MarqueeSection></MarqueeSection>
      <div className='bg-stone-200'>
        <div className='h-24'></div>
      </div>
      <Experience />
      <JobModal></JobModal>
    </div>
  );
}

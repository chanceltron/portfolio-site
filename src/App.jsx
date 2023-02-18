import Experience from './components/Experience';
import { Hero } from './components/Hero';
import { MarqueeSection } from './components/MarqueeSection';
import { NavBar } from './components/NavBar';

export default function App() {
  return (
    <div className='h-screen'>
      <div className='bg-stone-200'>
        <NavBar></NavBar>
        <Hero />
      </div>
      <MarqueeSection></MarqueeSection>
      <div className='bg-stone-200 h-96'>
        <Experience />
      </div>
    </div>
  );
}

import Hero from './components/Hero';
import { MarqueeSection } from './components/MarqueeSection';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <div className='h-screen flex flex-col justify-between'>
      <div className='bg-stone-200'>
        <NavBar></NavBar>
        <Hero className='h-full' />
      </div>
      <MarqueeSection></MarqueeSection>
    </div>
  );
}

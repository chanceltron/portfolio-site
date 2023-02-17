import Marquee from 'react-fast-marquee';
import Hero from './components/Hero';
import NavBar from './components/NavBar';

const images = [
  { src: 'html.svg' },
  { src: 'css.svg' },
  { src: 'javascript.svg' },
  { src: 'react.svg' },
  { src: 'node.svg' },
  { src: 'tailwind.svg' },
  { src: 'bootstrap.svg' },
];

export default function App() {
  return (
    <div>
      <div className='bg-stone-200'>
        <NavBar></NavBar>
        <Hero />
      </div>
      <div className='flex flex-col items-center py-8'>
        <h3 className='italic text-xl font-semibold'>
          "A different language is a different vision of life."
        </h3>
        <Marquee speed='30'>
          {images.map((img) => (
            <img className='w-36 m-10' src={`\\src\\assets\\${img.src}`} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

import Marquee from 'react-fast-marquee';
import Hero from './components/Hero';
import NavBar from './components/NavBar';

const images = [
  { src: 'html.svg' },
  { src: 'javascript.svg' },
  { src: 'css.svg' },
  { src: 'react.svg' },
  { src: 'node.svg' },
  { src: 'tailwind.svg' },
  { src: 'bootstrap.svg' },
];

export default function App() {
  return (
    <div className='h-screen flex flex-col justify-between'>
      <div className='bg-stone-200'>
        <NavBar></NavBar>
        <Hero />
      </div>
      <div className='flex flex-col'>
        <h3 className='italic text-xl text-right mr-32 font-semibold py-6'>
          "A different language is a different vision of life."
        </h3>
        <Marquee speed='30' className='my-6'>
          <div className='flex justify-around w-full'>
            {images.map((img, index) => (
              <img
                key={index}
                className='w-36 ml-6'
                src={`\\src\\assets\\${img.src}`}
              />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}

import Marquee from 'react-fast-marquee';

const images = [
  { src: 'html.svg' },
  { src: 'javascript.svg' },
  { src: 'css.svg' },
  { src: 'react.svg' },
  { src: 'node.svg' },
  { src: 'tailwind.svg' },
  { src: 'bootstrap.svg' },
];

export function MarqueeSection() {
  return (
    <div className='flex flex-col items-center justify-center py-4'>
      {/* <h3 className='italic text-lg text-right mr-32 font-semibold py-6'>
        "A different language is a different vision of life."
      </h3> */}
      <Marquee speed='30' className='my-6'>
        <div className='flex justify-around w-full'>
          {images.map((img, index) => (
            <img
              key={index}
              className='w-28 ml-6'
              src={`\\src\\assets\\${img.src}`}
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
}

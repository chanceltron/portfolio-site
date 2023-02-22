import Marquee from 'react-fast-marquee';
import { Icons } from '../assets/images';

export default function MarqueeSection() {
  return (
    <div className='flex flex-col items-center justify-center py-4'>
      <Marquee speed='30' className='my-6'>
        <div className='flex justify-around w-full'>
          {Object.values(Icons).map((img, index) => (
            <img key={index} className='w-28 ml-6' src={img} />
          ))}
        </div>
      </Marquee>
    </div>
  );
}

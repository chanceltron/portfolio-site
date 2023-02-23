import Marquee from 'react-fast-marquee';
import { Icons } from '../assets/images';

export function MarqueeSection() {
  return (
    <div className='items-center justify-center'>
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

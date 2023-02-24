import Marquee from 'react-fast-marquee';
import { Icons } from '../assets/images';

export function MarqueeSection() {
  return (
    <div className='flex justify-center items-center py-14 bg-white'>
      <Marquee speed='30' style={{ display: 'block' }}>
        <div className='flex justify-around w-full'>
          {Object.values(Icons).map((img, index) => (
            <img key={index} className='w-28' src={img} />
          ))}
        </div>
      </Marquee>
    </div>
  );
}

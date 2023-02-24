import React from 'react';
import Marquee from 'react-fast-marquee';
import { Images } from '../assets/images';
import { Icons } from '../assets/images';

export function Hero() {
  return (
    <section id='hero'>
      <div className='flex justify-center px-20 bg-stone-200'>
        <div className='bg-stone-200 h-full m-0 self-center max-w-lg text-stone-800'>
          <h1 className='text-5xl font-thin mb-1'>From System Admin</h1>
          <h1 className='text-5xl font-bold'>to Web Developer</h1>
          <p className='text-lg font-extralight mt-8'>
            I have a unique background in system administration and video
            engineering. With strong problem-solving skills and a proven track
            record of delivering results in high-pressure environments.
          </p>
        </div>
        <div className=''>
          <img
            src={Images.HeroImage}
            alt='Chance Ludwick hero image'
            className=''
          />
        </div>
      </div>
    </section>
  );
}

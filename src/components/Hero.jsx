import React from 'react';
import { Images } from '../assets/images';

export function Hero() {
  return (
    <section id='hero' className='flex justify-center px-20'>
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
          className='w-[30rem]'
        />
      </div>
    </section>
  );
}

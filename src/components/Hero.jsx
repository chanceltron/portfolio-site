import React from 'react';

export default function Hero() {
  return (
    <div className='flex justify-center'>
      <div className='bg-stone-200 px-20 h-full m-0 self-center'>
        <h1 className='text-5xl font-thin'>From System Admin</h1>
        <h1 className='text-5xl font-bold'>to Web Developer</h1>
        <h2 className='text-2xl mt-8'>
          Bringing technical expertise to the world of web design.
        </h2>
      </div>
      <div>
        <img
          src='src/assets/Chance_Ludwick-081-full.png'
          alt='Chance Ludwick profile picture'
          className='w-96'
        />
      </div>
    </div>
  );
}

import React from 'react';

export default function Hero() {
  return (
    <div className='flex flex-col justify-center align-middle'>
      <div>
        <h1>
          From system admin to web developer: Bringing technical expertise to
          the world of web design.
        </h1>
      </div>

      <div className='max-w-4xl flex flex-wrap justify-center gap-8'>
        <a href=''>
          <img className='w-40' src='src\assets\html.svg' alt='' />
        </a>
        <a href=''>
          <img className='w-40' src='src\assets\react.svg' alt='' />
        </a>
        <a href=''>
          <img className='w-40 ' src='src\assets\tailwind.svg' alt='' />
        </a>
        <a href=''>
          <img className='w-40' src='src\assets\javascript.svg' alt='' />
        </a>
        <a href=''>
          <img className='w-40' src='src\assets\node.svg' alt='' />
        </a>
        <a href=''>
          <img className='w-40' src='src\assets\css.svg' alt='' />
        </a>
        <a href=''>
          <img className='w-40' src='src\assets\bootstrap.svg' alt='' />
        </a>
      </div>
    </div>
  );
}

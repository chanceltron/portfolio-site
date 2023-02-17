import React from 'react';

export default function NavBar() {
  const links = [
    { content: 'About' },
    { content: 'Projects' },
    { content: 'Contact' },
  ];

  return (
    <div className='bg-stone-200'>
      <div className='bg-transparent text-stone-700 font-semibold px-3 py-2 flex justify-between align-middle'>
        <div id='logo'>
          <h1 className=''>Ludwick</h1>
        </div>
        <div id='navLinks'>
          <ul className='flex gap-4'>
            {links.map((link) => (
              <a href=''>
                <li>{link.content}</li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

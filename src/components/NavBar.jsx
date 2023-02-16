import React from 'react';

export default function NavBar() {
  return (
    <div>
      <div className='bg-slate-700 text-slate-50 px-3 py-2 flex justify-between align-middle'>
        <div id='logo'>
          <h1 className=''>Ludwick</h1>
        </div>
        <div id='navLinks'>
          <ul className='flex gap-4'>
            <li>
              <a href='' className='hover:text-slate-500'>
                About
              </a>
            </li>
            <li>
              <a href='' className='hover:text-slate-500'>
                Work Experience
              </a>
            </li>
            <li>
              <a href='' className='hover:text-slate-500'>
                Projects
              </a>
            </li>
            <li>
              <a href='' className='hover:text-slate-500'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

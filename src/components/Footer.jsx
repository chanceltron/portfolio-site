import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Images } from '../assets/images';

export default function Footer() {
  return (
    <footer className='p-8 bg-stone-200 sm:p-6 dark:bg-gray-900'>
      <div className='sm:flex sm:items-center sm:justify-between'>
        <div className='flex items-center gap-6'>
          <object data={Images.LudwickLogo} className='w-32' alt='' />
          <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © 2023 by Chance Ludwick. All Rights Reserved.
          </span>
        </div>
        <div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0'>
          <a
            href='#'
            target='_blank'
            className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
            <FaFacebook className='text-2xl' />
            <span className='sr-only'>Facebook page</span>
          </a>
          <a
            href='https://linkedin.com/in/chance-ludwick'
            target='_blank'
            className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
            <FaLinkedin className='text-2xl' />
            <span className='sr-only'>LinkedIn page</span>
          </a>
          <a
            href='https://github.com/chanceltron'
            target='_blank'
            className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
            <FaGithub className='text-2xl' />
            <span className='sr-only'>GitHub account</span>
          </a>
        </div>
      </div>
    </footer>

    // <footer className='p-4 bg-stone-900 sm:p-6'>
    //   <div className='md:flex md:justify-between'>
    //     <div className='mb-6 md:mb-0'>
    //       <a href='https://flowbite.com/' className='flex items-center'>
    //         <img
    //           src='https://flowbite.com/docs/images/logo.svg'
    //           className='h-8 mr-3'
    //           alt='FlowBite Logo'
    //         />
    //         <span className='self-center text-2xl font-semibold whitespace-nowrap text-white'>
    //           Flowbite
    //         </span>
    //       </a>
    //     </div>
    //     <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
    //       <div>
    //         <h2 className='mb-6 text-sm font-semibold uppercase text-white'>
    //           Resources
    //         </h2>
    //         <ul className='text-gray-400'>
    //           <li className='mb-4'>
    //             <a href='https://flowbite.com/' className='hover:underline'>
    //               Flowbite
    //             </a>
    //           </li>
    //           <li>
    //             <a href='https://tailwindcss.com/' className='hover:underline'>
    //               Tailwind CSS
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h2 className='mb-6 text-sm font-semibold uppercase text-white'>
    //           Follow us
    //         </h2>
    //         <ul className='text-gray-400'>
    //           <li className='mb-4'>
    //             <a
    //               href='https://github.com/themesberg/flowbite'
    //               className='hover:underline '>
    //               Github
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href='https://discord.gg/4eeurUVvTy'
    //               className='hover:underline'>
    //               Discord
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h2 className='mb-6 text-sm font-semibold uppercase text-white'>
    //           Legal
    //         </h2>
    //         <ul className='text-gray-400'>
    //           <li className='mb-4'>
    //             <a href='#' className='hover:underline'>
    //               Privacy Policy
    //             </a>
    //           </li>
    //           <li>
    //             <a href='#' className='hover:underline'>
    //               Terms &amp; Conditions
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    //   <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
    //   <div className='sm:flex sm:items-center sm:justify-between'>
    //     <span className='text-sm text-gray-400 sm:text-center'>
    //       © 2023{' '}
    //       <a href='https://flowbite.com/' className='hover:underline'>
    //         Chance Ludwick
    //       </a>
    //       . All Rights Reserved.
    //     </span>
    //     <div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0'>
    //       <a href='#' className='text-gray-500 hover:text-white'>
    //         <FaFacebook className='text-2xl' />
    //         <span className='sr-only'>Facebook page</span>
    //       </a>
    //       <a href='#' className='text-gray-500 hover:text-white'>
    //         <FaLinkedin className='text-2xl' />
    //         <span className='sr-only'>LinkedIn Page</span>
    //       </a>
    //       <a href='#' className='text-gray-500 hover:text-white'>
    //         <FaGithub className='text-2xl' />
    //         <span className='sr-only'>GitHub account</span>
    //       </a>
    //     </div>
    //   </div>
    // </footer>
  );
}

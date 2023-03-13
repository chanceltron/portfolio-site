import { Badge, Button, Card } from 'flowbite-react';
import { Images } from '../assets/images';
import { FaGithub } from 'react-icons/fa';
import { HiArrowUpRight } from 'react-icons/hi2';

const badges = {
  html: {
    label: 'html',
    styles: 'bg-orange-400 text-white',
  },
  css: {
    label: 'css',
    styles: 'bg-blue-600 text-white',
    link: '',
  },
  javascript: {
    label: 'javascript',
    styles: 'bg-yellow-200 text-stone-800',
  },
  typescript: {
    label: 'typescript',
    styles: 'bg-blue-600 text-white',
  },
  react: {
    label: 'react',
    styles: 'bg-cyan-400 text-white',
  },
  node: {
    label: 'node',
    styles: 'bg-lime-400 text-stone-800',
  },
  tailwind: {
    icon: 'tailwind',
    styles: 'bg-emerald-400 text-white',
  },
  bootstrap: {
    icon: 'bootstrap',
    styles: 'bg-purple-500 text-white',
  },
};
const { html, css, javascript, typescript, react, node, tailwind } = badges;

const cardData = [
  {
    imgSrc: `${Images.Folio}`,
    title: 'folio',
    badges: [html, css, javascript],
    link: {
      live: 'https://chanceltron.github.io/folio-website/',
      github: 'https://github.com/chanceltron/folio-website',
    },
  },
  {
    imgSrc: `${Images.DebtCalc}`,
    title: 'Debt Calculator',
    badges: [react, css],
    link: {
      live: 'https://chanceltron.github.io/debt-free-calc/',
      github: 'https://github.com/chanceltron/debt-free-calc',
    },
  },
  {
    imgSrc: `${Images.Battleship}`,
    title: 'Battleship',
    badges: [javascript, node],
    link: {
      live: 'https://github.com/chanceltron/node-battleship',
      github: 'https://github.com/chanceltron/node-battleship',
    },
  },
  {
    imgSrc: `${Images.SaaS}`,
    title: 'SaaS Starter',
    badges: [html, css],
    link: {
      live: 'https://chanceltron.github.io/SaaS-Website/',
      github: 'https://github.com/chanceltron/SaaS-Website',
    },
  },
  {
    imgSrc: `${Images.codeCommerce}`,
    title: 'codeCommerce',
    badges: [tailwind, react],
    link: {
      live: 'https://code-commerce-2.vercel.app/',
      github: 'https://github.com/chanceltron/code-commerce-2',
    },
  },
];

export function Projects() {
  return (
    <section
      id='projects'
      className='flex flex-wrap justify-center p-8 gap-6 bg-stone-200'>
      {cardData.map((card, index) => (
        <div
          key={index}
          className=' relative group transition-all max-w-sm hover:scale-110'>
          <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow transition-all group-hover:opacity-20'>
            <a href='#'>
              <img className='rounded-t-lg' src={card.imgSrc} alt='' />
            </a>
            <div className='p-5'>
              <a href='#'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight'>
                  {card.title}
                </h5>
              </a>
              <p className='mb-3 font-normal text-stone-700'>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <div className='flex flex-wrap gap-2'>
                {card.badges.map((badge, index) => {
                  return (
                    <span
                      key={index}
                      className={`${badge.styles} text-sm font-medium mr-2 px-2.5 py-0.5 rounded`}>
                      {badge.label}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className='absolute flex flex-col items-center gap-3 justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5 transition-all invisible group-hover:visible'>
            <a href={card.link.live} target='_blank'>
              <button
                type='button'
                className='mx-auto w-full flex justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2'>
                View Live Site <HiArrowUpRight className='ml-2 text-2xl' />
              </button>
            </a>
            <a href={card.link.github} target='_blank'>
              <button
                type='button'
                className='mx-auto w-full flex justify-center items-center text-white bg-purple-700 hover:bg-purple-800 focus:ring-1 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2'>
                View on GitHub <FaGithub className='ml-2 text-2xl' />
              </button>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

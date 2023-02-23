import { Badge, Button, Card } from 'flowbite-react';
import { Images } from '../assets/images';
import { FaGithub } from 'react-icons/fa';
import { Badges } from '../assets/images';
const { html, css, javascript, typescript, react, node, tailwind, bootstrap } =
  Badges;

const cardData = [
  {
    imgSrc: `${Images.Folio}`,
    title: 'folio',
    badges: [html, css, javascript],
    link: 'https://github.com/chanceltron/folio-website',
  },
  {
    imgSrc: `${Images.DebtCalc}`,
    title: 'Debt Calculator',
    badges: [react, css],
    link: 'https://github.com/chanceltron/debt-free-calc',
  },
  {
    imgSrc: `${Images.Battleship}`,
    title: 'Battleship',
    badges: [javascript, node],
    link: 'https://github.com/chanceltron/node-battleship',
  },
  {
    imgSrc: `${Images.SaaS}`,
    title: 'SaaS Starter',
    badges: [html, css],
    link: 'https://github.com/chanceltron/SaaS-Website',
  },
  {
    imgSrc: `${Images.codeCommerce}`,
    title: 'codeCommerce',
    badges: [typescript, react, css],
    link: 'https://github.com/chanceltron/code-commerce',
  },
];

export function Projects() {
  return (
    <section id='projects' className='flex flex-wrap justify-center p-8 gap-6'>
      {cardData.map((card, index) => (
        <div
          key={index}
          className=' relative group transition-all max-w-sm hover:scale-110'>
          <Card
            imgSrc={card.imgSrc}
            className='transition-all group-hover:opacity-20'>
            <h5 className='text-2xl font-bold tracking-tight text-stone-800'>
              {card.title}
            </h5>
            <p className='font-normal text-gray-700'></p>
            <div className='flex flex-wrap gap-2'>
              {card.badges.map((badge, index) => {
                return (
                  <Badge key={index} className={badge.styles}>
                    {badge.label}
                  </Badge>
                );
              })}
            </div>
          </Card>
          <a href={card.link} target='_blank'>
            <Button
              className='absolute flex justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5 transition-all invisible group-hover:visible'
              color='purple'
              pill={true}>
              View on GitHub <FaGithub className='ml-2 text-2xl' />
            </Button>
          </a>
        </div>
      ))}
    </section>
  );
}

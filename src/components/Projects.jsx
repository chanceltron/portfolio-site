import { Badge, Card } from 'flowbite-react';
import { Images } from '../assets/images';
import { Badges } from '../assets/images';

const cardData = [
  {
    imgSrc: `${Images.Folio}`,
    title: 'folio',
    badges: [
      {
        icon: 'html',
        bg: 'bg-[#f17844]',
        text: 'text-[#ffffff]',
      },
      {
        icon: 'css',
        bg: 'bg-[#1b73ba]',
        text: 'text-[#ffffff]',
      },
      {
        icon: 'javascript',
        bg: 'bg-[#f0db4f]',
        text: 'text-[#000000]',
      },
    ],
  },
  {
    imgSrc: `${Images.DebtCalc}`,
    title: 'Debt Calculator',
    badges: [
      {
        icon: 'react',
        bg: 'bg-[#61dafb]',
        text: 'text-[#ffffff]',
      },
      {
        icon: 'css',
        bg: 'bg-[#1b73ba]',
        text: 'text-[#ffffff]',
      },
    ],
  },
  {
    imgSrc: `${Images.Battleship}`,
    title: 'Battleship',
    badges: [
      {
        icon: 'javascript',
        bg: 'bg-[#f0db4f]',
        text: 'text-[#000000]',
      },
      {
        icon: 'node',
        bg: 'bg-[#8cc84b]',
        text: 'text-[#000000]',
      },
    ],
  },
  {
    imgSrc: `${Images.SaaS}`,
    title: 'SaaS Starter',
    badges: [
      {
        icon: 'html',
        bg: 'bg-[#f17844]',
        text: 'text-[#ffffff]',
      },
      {
        icon: 'css',
        bg: 'bg-[#1b73ba]',
        text: 'text-[#ffffff]',
      },
    ],
  },
];

export default function Projects() {
  return (
    <section id='projects' className='flex justify-center p-8 gap-6'>
      {cardData.map((card, index) => (
        <div
          key={index}
          className='transition-all max-w-sm hover:scale-110 hover:opacity-20'>
          <Card imgSrc={card.imgSrc}>
            <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {card.title}
            </h5>
            <p className='font-normal text-gray-700 dark:text-gray-400'></p>
            <div className='flex flex-wrap gap-2'>
              {card.badges.map((badge, index) => (
                <Badge key={index} className={`px-3 ${badge.bg} ${badge.text}`}>
                  {badge.icon}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      ))}
    </section>
  );
}

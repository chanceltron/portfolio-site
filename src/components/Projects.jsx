import { Card } from 'flowbite-react';

const cardData = [
  {
    imgSrc: 'https://flowbite.com/docs/images/blog/image-1.jpg',
    title: 'Noteworthy technology acquisitions 2021',
    description:
      'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
  },
];

export default function Projects() {
  return (
    <section id='projects'>
      {cardData.map((card, index) => (
        <div key={index} className='p-12 flex justify-center'>
          <div className='max-w-sm'>
            <Card imgSrc={card.imgSrc}>
              <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                {card.title}
              </h5>
              <p className='font-normal text-gray-700 dark:text-gray-400'>
                {card.description}
              </p>
            </Card>
          </div>
        </div>
      ))}
    </section>
  );
}

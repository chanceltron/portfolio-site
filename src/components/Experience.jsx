import React, { useState } from 'react';
import { Timeline, Button } from 'flowbite-react';
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';
import { BsFillCalendarMonthFill } from 'react-icons/bs';
import { useModal } from '../hooks/useModal';
import { JobModal } from './JobModal';
import jobData from '../data/jobData.json';

// TODO - write useModal hook
// TODO - implement useModal hook for each job button

export function Experience() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleLearnMoreClick = (jobId) => {
    setSelectedJob(jobId);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
    setOpenModal(false);
  };

  return (
    <ol class='items-center sm:flex'>
      <li class='relative mb-6 sm:mb-0'>
        <div class='flex items-center'>
          <div class='z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0'>
            <svg
              aria-hidden='true'
              class='w-3 h-3 text-blue-800 dark:text-blue-300'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                clip-rule='evenodd'></path>
            </svg>
          </div>
          <div class='hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700'></div>
        </div>
        <div class='mt-3 sm:pr-8'>
          <h3 class='text-lg font-semibold text-gray-900 dark:text-white'>
            Flowbite Library v1.0.0
          </h3>
          <time class='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            Released on December 2, 2021
          </time>
          <p class='text-base font-normal text-gray-500 dark:text-gray-400'>
            Get started with dozens of web components and interactive elements.
          </p>
        </div>
      </li>
      <li class='relative mb-6 sm:mb-0'>
        <div class='flex items-center'>
          <div class='z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0'>
            <svg
              aria-hidden='true'
              class='w-3 h-3 text-blue-800 dark:text-blue-300'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                clip-rule='evenodd'></path>
            </svg>
          </div>
          <div class='hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700'></div>
        </div>
        <div class='mt-3 sm:pr-8'>
          <h3 class='text-lg font-semibold text-gray-900 dark:text-white'>
            Flowbite Library v1.2.0
          </h3>
          <time class='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            Released on December 23, 2021
          </time>
          <p class='text-base font-normal text-gray-500 dark:text-gray-400'>
            Get started with dozens of web components and interactive elements.
          </p>
        </div>
      </li>
      <li class='relative mb-6 sm:mb-0'>
        <div class='flex items-center'>
          <div class='z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0'>
            <svg
              aria-hidden='true'
              class='w-3 h-3 text-blue-800 dark:text-blue-300'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                clip-rule='evenodd'></path>
            </svg>
          </div>
          <div class='hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700'></div>
        </div>
        <div class='mt-3 sm:pr-8'>
          <h3 class='text-lg font-semibold text-gray-900 dark:text-white'>
            Flowbite Library v1.3.0
          </h3>
          <time class='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            Released on January 5, 2022
          </time>
          <p class='text-base font-normal text-gray-500 dark:text-gray-400'>
            Get started with dozens of web components and interactive elements.
          </p>
        </div>
      </li>
    </ol>

    // <Timeline horizontal={true} className='px-10 py-24 max-w-[95%] mx-auto'>
    //   {jobData.map((job) => (
    //     <Timeline.Item key={job.id}>
    //       <Timeline.Point icon={HiCalendar} />
    //       <Timeline.Content>
    //         <Timeline.Title className='font-extrabold'>
    //           {job.startDate}
    //         </Timeline.Title>
    //         <Timeline.Title>{job.name}</Timeline.Title>
    //         <Timeline.Body>{job.hook}</Timeline.Body>
    //         <Button color='gray' onClick={() => handleLearnMoreClick(job.id)}>
    //           Learn More
    //           <HiArrowNarrowRight className='ml-2 h-3 w-3' />
    //         </Button>
    //       </Timeline.Content>
    //     </Timeline.Item>
    //   ))}
    //   <Timeline.Item>
    //     <Timeline.Point icon={BsFillCalendarMonthFill} className='text-6xl' />
    //   </Timeline.Item>
    //   <JobModal
    //     openModal={openModal}
    //     onClose={handleCloseModal}
    //     job={jobData.find((job) => job.id === selectedJob)}
    //   />
    // </Timeline>
  );
}

// <Timeline.Item>
//   <Timeline.Point icon={HiCalendar} />
//   <Timeline.Content>
//     <Timeline.Title>2017 - 2018</Timeline.Title>
//     <Timeline.Title>Rush Personnel Services</Timeline.Title>
//     <Timeline.Body>
//       Get started with dozens of web components and interactive elements.
//     </Timeline.Body>
//     <Button color='gray' value='rush'>
//       Learn More
//       <HiArrowNarrowRight className='ml-2 h-3 w-3' />
//     </Button>
//   </Timeline.Content>
// </Timeline.Item>
// <Timeline.Item>
//   <Timeline.Point icon={HiCalendar} />
//   <Timeline.Content>
//     <Timeline.Title>2018 - 2019</Timeline.Title>
//     <Timeline.Title>PioneerRx Pharmacy Software</Timeline.Title>
//     <Timeline.Body>
//       Get started with dozens of web components and interactive elements.
//     </Timeline.Body>
//     <Button color='gray' value='prx'>
//       Learn More
//       <HiArrowNarrowRight className='ml-2 h-3 w-3' />
//     </Button>
//   </Timeline.Content>
// </Timeline.Item>
// <Timeline.Item>
//   <Timeline.Point icon={HiCalendar} />
//   <Timeline.Content>
//     <Timeline.Title>2019 - Present</Timeline.Title>
//     <Timeline.Title>Superior Livestock Auction</Timeline.Title>
//     <Timeline.Body>
//       Get started with dozens of web components and interactive elements.
//     </Timeline.Body>
//     <Button color='gray' value='sla'>
//       Learn More
//       <HiArrowNarrowRight className='ml-2 h-3 w-3' />
//     </Button>
//   </Timeline.Content>
// </Timeline.Item>

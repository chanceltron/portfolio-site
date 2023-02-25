import React, { useState } from 'react';
import { Timeline, Button } from 'flowbite-react';
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';
import { BsFillCalendarMonthFill } from 'react-icons/bs';
import { useModal } from '../hooks/useModal';
import { JobModal } from './JobModal';
import jobData from '../data/jobData.json';

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
    <ol className='items-center sm:flex'>
      {jobData.map((job) => (
        <li className='relative mb-6 sm:mb-0' key={job.id}>
          <div className='flex items-center'>
            <div className='z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0'>
              <svg
                aria-hidden='true'
                className='w-3 h-3 text-blue-800 dark:text-blue-300'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                  clipRule='evenodd'></path>
              </svg>
            </div>
            <div className='hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700'></div>
          </div>
          <div className='mt-3 sm:pr-8'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              {job.name}
            </h3>
            <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
              {job.title}
            </time>
            <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
              {job.hook}
            </p>
          </div>
          <button
            type='button'
            onClick={() => handleLearnMoreClick(job.id)}
            className='flex justify-center items-center text-stone-800 hover:text-blue-700 border border-gray-200 hover:bg-gray-100 focus:ring-1 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
            Learn More <HiArrowNarrowRight className='ml-2 h-3 w-3' />
          </button>
        </li>
      ))}

      <JobModal
        openModal={openModal}
        onClose={handleCloseModal}
        job={jobData.find((job) => job.id === selectedJob)}
      />
    </ol>
  );
}

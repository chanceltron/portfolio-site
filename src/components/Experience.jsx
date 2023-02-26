import React, { useState } from 'react';
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';
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
    <ol className='items-center justify-center mx-10 py-24 lg:flex'>
      {jobData.map((job) => (
        <li className='relative mb-6 max-w-sm lg:mb-0' key={job.id}>
          <h3 className='mb-2 text-lg font-semibold text-gray-900'>
            {job.startDate}
          </h3>
          <div className='flex items-center'>
            <div className='z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white lg:ring-8 shrink-0'>
              <HiCalendar className='w-4 h-4 text-blue-800' />
            </div>
            <div className='hidden sm:flex w-full bg-gray-200 h-0.5'></div>
          </div>
          <div className='mt-3 sm:pr-8'>
            <h3 className='text-lg font-semibold text-gray-900 '>{job.name}</h3>
            <time className='block mb-2 text-sm font-normal leading-none text-gray-400 '>
              {job.title}
            </time>
            <p className='text-base font-normal text-gray-500 '>{job.hook}</p>
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

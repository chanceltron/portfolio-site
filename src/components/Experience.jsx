import React, { useState } from 'react';
import { Timeline, Button } from 'flowbite-react';
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';
import { useModal } from '../hooks/useModal';
import { JobModal } from './JobModal';
import jobData from '../data/jobData.json';

// TODO - write useModal hook
// TODO - implement useModal hook for each job button

export default function Experience() {
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
    <Timeline horizontal={true} className='px-10 py-24 max-w-[90%] mx-auto'>
      {jobData.map((job) => (
        <Timeline.Item key={job.id}>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Title>{job.time}</Timeline.Title>
            <Timeline.Title>{job.name}</Timeline.Title>
            <Timeline.Body>{job.hook}</Timeline.Body>
            <Button color='gray' onClick={() => handleLearnMoreClick(job.id)}>
              Learn More
              <HiArrowNarrowRight className='ml-2 h-3 w-3' />
            </Button>
          </Timeline.Content>
        </Timeline.Item>
      ))}
      <JobModal
        openModal={openModal}
        onClose={handleCloseModal}
        job={jobData.find((job) => job.id === selectedJob)}
      />
    </Timeline>
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

import { Modal, Button } from 'flowbite-react';
import jobData from '../data/jobData.json';

export function JobModal({ openModal, onClose, job }) {
  return (
    <Modal dismissible={true} show={openModal} onClose={onClose} size='4xl'>
      <Modal.Header>
        <p className='text-3xl'>
          {!job ? '' : `${job.name} | ${job.timeline}`}
        </p>
        <p className='text-xl font-normal text-gray-500'>
          {!job ? '' : job.title}
        </p>
      </Modal.Header>
      <Modal.Body>
        <div className='space-y-6'>
          <p className='text-base leading-relaxed text-stone-500 dark:text-stone-400'>
            {!job ? '' : job.description}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          type='button'
          onClick={onClose}
          className='flex justify-center items-center text-stone-800 hover:text-blue-700 border border-gray-200 hover:bg-gray-100 focus:ring-1 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

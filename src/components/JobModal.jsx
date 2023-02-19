import { Modal, Button } from 'flowbite-react';
import jobData from '../data/jobData.json';

export function JobModal({ openModal, onClose, job }) {
  return (
    <Modal dismissible={true} show={openModal} onClose={onClose} size='4xl'>
      <Modal.Header>
        <p>{!job ? '' : job.name}</p>
        <p className='text-gray-500 font-light italic ml-1'>
          {!job ? '' : job.time}
        </p>
      </Modal.Header>
      <Modal.Body>
        <div className='space-y-6'>
          <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
            {!job ? '' : job.description}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button color='gray' onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

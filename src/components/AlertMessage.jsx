import { Alert } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';

export function AlertMessage() {
  return (
    <div className='fixed top-6 w-full pointer-events-none'>
      <Alert
        color='failure'
        icon={HiInformationCircle}
        className='w-fit mx-auto'>
        <span>
          <span className='font-medium'>Under Construction!</span> This site is
          a work in progress. Please check back soon!
        </span>
      </Alert>
    </div>
  );
}

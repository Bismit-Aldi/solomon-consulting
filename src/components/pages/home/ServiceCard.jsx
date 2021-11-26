import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-6 px-10 py-6 bg-white w-80 rounded-2xl'>
      <div className='flex items-center justify-center w-40 h-40 p-8 text-white rounded-full bg-blue-solomon'>
        <FontAwesomeIcon icon={['fas', icon]} size={'6x'} />
      </div>
      <div className='flex flex-col items-center gap-2'>
        <span className='text-lg font-bold text-orange-solomon'>{title}</span>
        <span className='text-justify'>{description}</span>
      </div>
    </div>
  );
};

export default ServiceCard;

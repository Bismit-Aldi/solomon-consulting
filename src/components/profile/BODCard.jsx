import React from 'react';

const BODCard = ({ imageUrl, name, position }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-8 px-6 py-4 bg-white bg-opacity-50 rounded-2xl'>
      <img
        src={imageUrl}
        alt='board of directors'
        width={200}
        height={200}
        className='rounded-3xl'
      />
      <div className='flex flex-col items-center gap-2'>
        <span className='text-xl font-bold text-orange-solomon'>{name}</span>
        <span className='text-xl font-bold text-white'>{position}</span>
      </div>
    </div>
  );
};

export default BODCard;

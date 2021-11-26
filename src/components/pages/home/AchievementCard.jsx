import React from 'react';

const AchievementCard = ({ imageUrl, title, description }) => {
  return (
    <div className='flex flex-col items-center justify-center w-56 gap-8 px-6 py-4 bg-opacity-50 bg-blue-solomon rounded-2xl'>
      <img
        src={imageUrl}
        alt='board of directors'
        width={200}
        height={200}
        className='rounded-3xl'
      />
      <div className='flex flex-col items-center gap-2'>
        <span className='text-xl font-bold text-orange-solomon'>{title}</span>
        <span className='text-lg text-center text-white'>{description}</span>
      </div>
    </div>
  );
};

export default AchievementCard;

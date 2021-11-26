import React from 'react';

const HeadTitle = ({ title, color }) => {
  return (
    <h1 className='flex flex-col item-center'>
      <span className={`text-2xl font-bold ${color}`}>{title}</span>
      <div className='w-full h-2 rounded bg-orange-solomon'></div>
    </h1>
  );
};

export default HeadTitle;

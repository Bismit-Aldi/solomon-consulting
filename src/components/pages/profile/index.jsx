import React from 'react';
import { v4 as uuid } from 'uuid';
import HeadTitle from '../../global/HeadTitle';
import BODs from './utils/BOD';
import BODCard from './BODCard';

const Profile = () => {
  return (
    <>
      <section className='flex items-center justify-center w-full h-screen bg-cover bg-hero-pattern'>
        <div className='flex flex-col items-center gap-6'>
          <HeadTitle title={'Our Profile'} color={'text-white'} />
          <div className='flex flex-col items-center text-white'>
            <span className='font-semibold'>Vision</span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
          <div className='flex flex-col items-center text-white'>
            <span className='font-semibold'>Mission</span>
            <ol>
              <li>
                1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                3. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
            </ol>
          </div>
          <div className='flex gap-8'>
            {BODs.map(({ imageUrl, name, position }) => {
              return (
                <BODCard
                  key={uuid()}
                  imageUrl={imageUrl}
                  name={name}
                  position={position}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../../assets/images/logo_hero.svg';
const Home = () => {
  return (
    <div>
      <div className='flex items-center justify-center w-full h-screen bg-cover bg-hero-pattern'>
        <div className='flex flex-col items-center justify-center'>
          <img src={logo} />
          <FontAwesomeIcon
            className='text-white'
            size={'4x'}
            icon={['fas', 'angle-down']}
          />
          <p className='text-white'>Scroll Down to Dive in...</p>
        </div>
      </div>
      <div className='flex items-center justify-center w-full h-screen bg-white bg-cover'>
        <div className='flex flex-col items-center justify-center'>
          <p className='font-sans text-6xl font-black text-black'>About Us</p>
          <p className='text-white'>adasdasa</p>
          <div class='rounded-full py-2 px-24 bg-yellow-400 flex '></div>
          <p class='text-white'>aaaa</p>
          <p className='px-48'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, id
            magna convallis sagittis vel a mi. Arcu cursus amet, laoreet turpis
            nunc, senectus massa nulla. Dolor eu sagittis, lacus, felis risus.
            Orci vitae cursus vitae vivamus quis in consectetur pretium.
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, id
              magna convallis sagittis vel a mi. Arcu cursus amet, laoreet
              turpis nunc, senectus massa nulla. Dolor eu sagittis, lacus, felis
              risus. Orci vitae cursus vitae vivamus quis in consectetur
              pretium.
            </p>
          </p>
          <p class='text-white'>aaaa</p>
          <div class='rounded-full  py-1 px-20 bg-yellow-400 flex '>
            More About Us{' '}
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center w-full h-screen bg-cover bg-blue-solomon'>
        <div className='flex flex-col items-center justify-center'>
          <p className='font-sans text-4xl font-black text-white '>
            Our Services
          </p>
          <p className='text-blue-solomon'>adasdasa</p>
          <div class='rounded-full py-2 px-24 bg-yellow-400 flex '></div>
          <p className='text-blue-solomon'>aaaa</p>
          <div class='grid gap-x-8 gap-y-4 grid-cols-3'>
            <div className='flex px-40 py-20 bg-white rounded-2xl w-50 h-50'></div>
            <div className='flex px-40 py-20 bg-white rounded-2xl w-50 h-50'></div>
            <div className='flex px-40 py-20 bg-white rounded-2xl w-50 h-50'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

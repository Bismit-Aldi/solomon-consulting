import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import CountUp from 'react-countup';
import Slider from 'react-slick';
import logo from '../../../assets/images/logo_hero.svg';
import HeadTitle from '../../global/HeadTitle';
import ServiceCard from './ServiceCard';
import services from './utils/services';
import achievements from './utils/achievements';
import AchievementCard from './AchievementCard';
import partners from './utils/partners';

const Home = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className='flex items-center justify-center w-full h-screen bg-cover bg-hero-pattern'>
        <div className='flex flex-col items-center justify-center'>
          <img src={logo} alt='hero' />
          <FontAwesomeIcon
            className='text-white'
            size={'4x'}
            icon={['fas', 'angle-down']}
          />
          <p className='text-white'>Scroll Down to Dive in...</p>
        </div>
      </section>
      <section className='flex items-center justify-center w-full h-screen bg-white bg-cover'>
        <div className='flex flex-col items-center justify-center w-1/2 gap-6'>
          <HeadTitle title={'About Us'} />
          <p className='w-1/2 text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, id
            magna convallis sagittis vel a mi. Arcu cursus amet, laoreet turpis
            nunc, senectus massa nulla. Dolor eu sagittis, lacus, felis risus.
            Orci vitae cursus vitae vivamus quis in consectetur pretium.
          </p>
          <Link to='/profile'>
            <button class='rounded-xl bg-yellow-400 flex text-white font-bold py-2 px-5'>
              More About Us
            </button>
          </Link>
        </div>
      </section>
      <section className='flex items-center justify-center w-full h-screen bg-cover bg-blue-solomon'>
        <div className='flex flex-col items-center justify-center gap-6'>
          <HeadTitle title={'Our Services'} color={'text-white'} />
          <div class='flex gap-8'>
            {services.map(({ icon, title, description }) => {
              return (
                <ServiceCard
                  key={uuid()}
                  icon={icon}
                  title={title}
                  description={description}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className='flex items-center justify-center w-full h-screen bg-cover'>
        <div className='flex flex-col items-center justify-center w-full gap-16'>
          <HeadTitle title={'Our Achievements'} />
          <div class='w-full grid grid-cols-2'>
            <div className='flex justify-center col-span-1'>
              <div className='flex flex-col items-center justify-center'>
                <span className='text-lg font-bold text-black'>
                  Achieved Awards, So Far
                </span>
                <span className='font-bold text-9xl text-orange-solomon'>
                  <CountUp start={0} end={75} />
                </span>
              </div>
            </div>
            <div className='col-span-1 '>
              <Slider {...settings}>
                {achievements.map(({ imageUrl, title, description }) => {
                  return (
                    <AchievementCard
                      key={uuid()}
                      imageUrl={imageUrl}
                      title={title}
                      description={description}
                    />
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className='flex items-center justify-center w-full h-screen bg-cover'>
        <div className='flex flex-col items-center justify-center w-full gap-16'>
          <HeadTitle title={'Our Partners'} />
          <div class='w-full grid grid-cols-2'>
            <div className='col-span-1 '>
              <Slider {...settings}>
                {partners.map(({ imageUrl, title, description }) => {
                  return (
                    <AchievementCard
                      key={uuid()}
                      imageUrl={imageUrl}
                      title={title}
                      description={description}
                    />
                  );
                })}
              </Slider>
            </div>
            <div className='flex justify-center col-span-1'>
              <div className='flex flex-col items-center justify-center'>
                <span className='text-lg font-bold text-black'>
                  Partnered Companies, So Far
                </span>
                <span className='font-bold text-9xl text-orange-solomon'>
                  <CountUp start={0} end={75} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

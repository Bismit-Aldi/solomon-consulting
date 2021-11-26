import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/logo.svg';

const Navbar = () => {
  return (
    <nav className='fixed grid items-center w-full grid-cols-2 px-12 py-2 bg-opacity-25 bg-blue-solomon'>
      <div className='col-span-1'>
        <Link to='/'>
          <img src={Logo} alt='logo' />
        </Link>
      </div>
      <div className='flex justify-end col-span-1 gap-20 font-bold text-white'>
        <Link to='/'>Home</Link>
        <Link to='/profile'>Our Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;

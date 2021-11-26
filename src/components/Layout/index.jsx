import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';

const Navbar = () => {
  return (
    <nav className='w-full px-12 py-2 items-center grid grid-cols-2 bg-blue-solomon bg-opacity-25 max-h-96'>
      <div className='col-span-1'>
        <Link to='/'>
          <img src={Logo} alt='logo' />
        </Link>
      </div>
      <div className='col-span-1 flex justify-end gap-20 font-bold text-white'>
        <Link to='/'>Home</Link>
        <Link to='/profile'>Our Profile</Link>
        <Link to='/message'>Stay in Touch</Link>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <div className='py-6 border-b-2 border-b-orange-500'>
      <div className='container flex items-center justify-between mx-auto'>
        <Link
          to='/'
          className='text-3xl font-bold tracking-tight text-orange-500'>
          FoodickResto
        </Link>
        <div className='md:hidden'>
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Header;

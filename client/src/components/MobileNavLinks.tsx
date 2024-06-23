import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const MobileNavLinks = () => {
  return (
    <>
      <Link
        to='/user-profile'
        className='flex items-center font-bold bg-white hover:text-orange-500'>
        My Profile
      </Link>
      <Button className='flex items-center px-3 font-bold hover:bg-gray-500'>
        Logout
      </Button>
    </>
  );
};

export default MobileNavLinks;

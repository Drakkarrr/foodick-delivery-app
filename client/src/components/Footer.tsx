import React from 'react';

const Footer = () => {
  return (
    <div className='py-10 bg-orange-500'>
      <div className='container flex flex-col items-center justify-between mx-auto md:flex-row'>
        <span className='text-3xl font-bold tracking-tight text-white'>
          FoodickResto
        </span>
        <span className='flex gap-4 font-bold tracking-tight text-white'>
          <span>Privacy Policy</span>
          <span>Careers</span>
          <span>Contact Us</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;

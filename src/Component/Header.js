import React from 'react';
import img1 from '../Images/img1.jpg';

export default function Header() {
  return (
    <div className='container-md'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='md:col-span-1'>
          <div className='title'>
            <h1 className='text-4xl text-white font-first font-bold mb-2'>Welcome to Madrid Tours</h1>
            <h3 className='text-xl text-white font-second font-light'>Travelling has never been easier</h3>
          </div>
          <button type='button' className='p-2 rounded-xl bg-main hover:bg-green-700 transition-all duration-300 mt-5 font-bold font-second text-xl'>
            Browse our offers
          </button>
        </div>
        <div className='md:col-span-1 mt-5 mr-5'>
          <div className='card w-50'>
            <img src={img1} className='' alt='hu' />
            <div className=''>
              <div className='text-center'>
                <h1 className='text-3xl font-bold'>Book your Hajj tour now with us</h1>
                <p>
                  We provide accommodation, transportation, and guidance for our Pilgrims. Obtain
                  Hajj visa, budget for costs, and prioritize health and safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

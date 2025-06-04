import React from 'react'
import { assets } from '../assets/assets'


const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt='exchange_icon' />
            <p className='text-gray-400'>Demo Text 1</p>
            <p className='text-gray-400'>Demo Article 1, Demo Article 1</p>
        </div>

        <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt='exchange_icon' />
            <p className='text-gray-400'>Demo Text 1</p>
            <p className='text-gray-400'>Demo Article 1, Demo Article 1</p>
        </div>

        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt='exchange_icon' />
            <p className='text-gray-400'>Demo Text 1</p>
            <p className='text-gray-400'>Demo Article 1, Demo Article 1</p>
        </div>
    </div>
  )
}

export default OurPolicy
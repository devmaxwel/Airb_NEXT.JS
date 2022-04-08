import Image from 'next/image';
import React from 'react';
import { HeartIcon }  from '@heroicons/react/outline'
import {StarIcon } from '@heroicons/react/solid'

function InfoCard({image,location,title,description,star,price,total}) {
  return (
    <div className='flex py-9 px-2 border-b cursor-pointer hover:opacity-75 transition transform duration-200 ease-out  hover:shadow-lg first:border-t'>
      <div className="relative h-34 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image src={image} layout="fill" objectFit="cover" className='rounded-2xl' />
      </div>
      <div className='flex flex-col flex-grow pl-5'>
        <div className="flex justify-between">
          <p className="">{location}</p>
          <HeartIcon className="h-6 cursor-pointer" />
        </div>
        <h4 className='text-xl'>{title}</h4>
        <div className='border-b w-10 pt-2' />
        <p className='text-sm pt-2 text-gray-500 flex-grow'>{description}</p>
        <div className='flex justify-between items-end pt-5'>
            <p className='flex item-center'><StarIcon className='h-5 text-red-400'/>
            {star}
            </p>

            <div>
                <p className='text-lg font-semibold pb-2 lg:text-2xl'>{price}</p>
                <p className='text-right font-extralight'>{total}</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
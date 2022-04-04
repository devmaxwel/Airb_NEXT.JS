import Image from 'next/image';
import React from 'react'

function LargeCard({title,image}) {
  return (
    <div className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
      <div className="relative h-60 w-60">
        <Image alt={title} className='rounded-xl' src={image} layout="fill" />
      </div>
      <h3 className='text-2xl'>{title}</h3>
    </div>
  );
}

export default LargeCard;
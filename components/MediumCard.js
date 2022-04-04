import Image from 'next/image'
import React from 'react'

export default function MediumCard({image,title,description, buttonText}) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          alt={title}
          className="rounded-2xl"
          src={image}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-32 left-12 ">
        <h3 className="text-4xl w-64 mb-5 md:w-full">{title}</h3>
        <p>{description}</p>
        <button className="text-white  px-4 py-2 rounded-lg  bg-gray-900 mt-5">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

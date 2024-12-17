'use client'
import Tilt from 'react-parallax-tilt';
import React from 'react'
import Image from 'next/image';
type Props={
    building:{
        id: number;
        title: string;
        description: string;
        image: string;
    }
}
const BuildingFeatureCard = ({building}:Props) => {
  return (
    <Tilt className='rounded-lg shadow-md p-4 bg-white min-h-[240px] flex flex-col justify-between'>
        <div className='w-16 h-16 ml-auto flex items-center justify-center flex-col bg-gray-100 rounded-full'>
            <Image src={building.image} alt={building.title} width={40} height={40}/>
        </div>
        <div className='p-2'>
            <p className='mt-6 text-red-600 font-bold text-xl '>0{building.id}</p>
            <p className='text-lg text-gray-700 font-bold mb-2'>{building.title}</p>
            <p className='text-sm opacity-70 text-gray-700'>{building.description}</p>
        </div>
    </Tilt>
  )
}

export default BuildingFeatureCard

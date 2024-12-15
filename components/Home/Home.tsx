import React from 'react'
import Hero from './Hero/Hero'
import Appartmenttype from './AppartmentType/AppartmentType'
import Properties from './Properties/Properties'

const Home = () => {
  return (
    <div className='overflow-hidden '>
      <Hero/>
      <Appartmenttype/>
      <Properties/>
    </div>
  )
}

export default Home


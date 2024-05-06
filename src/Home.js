import React from 'react'
import Navbar from './Component/Navbar'
import Header from './Component/Header'
import { Card } from "./Component/Card";
import { Button } from './Component/Button'

const Home = () => {
  return (
    <div className='bg-black'>
      <Navbar activeId={1} />
      
      <div className='grid sm:grid-cols-12 z-1'>
        <div className=' w-full h-80 bg-main absolute z-0 bottom-48 left-0'></div>
        <div className='sm:col-span-6 z-1'>
          <Header/>
          <Button text='Brouse our offers'/>
        </div>
        <div className='sm:col-span-6 mx-auto'> 
          <Card />
        </div>
      </div>
    </div>
  )
}
export default Home


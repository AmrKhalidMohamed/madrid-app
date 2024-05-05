import React from 'react'
import Navbar from './Component/Navbar'
import Header from './Component/Header'
import { Card } from "./Component/Card";
import { Button } from './Component/Button'

const Home = () => {
  return (
    <div className='bg-black container-sm'>
      <Navbar/>
      <div className='grid sm:grid-cols-12 '>
        <div className='sm:col-span-6 '>
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


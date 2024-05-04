import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Religion.css'
import img3 from '../Images/img3.jpeg'
export default function Religion({data}) {
  return (
    <div>
        <div className='container  mt-5 ' >
        <div className='first '>
            <h1>Religious tourism</h1>
            <FontAwesomeIcon className='icon-2 ms-4'  icon="fa-solid fa-arrow-right" />
        </div>
  
        <div className='row' >
        <div className='col-md-4 mt-5  '  >
             <div className='card-3 ' >
                 <img  src={img3} className='img3' alt='img2' /> 
                 
             </div>
             <div className='alaa'>
           <h1 className='title-2 '>Hajj Tours</h1>
         </div>
           
         </div>
        </div>
         </div>
    </div>
  )
}

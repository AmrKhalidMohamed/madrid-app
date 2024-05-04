import React from 'react'
import './Offers.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img2 from "../Images/img2.jpeg"

export default function Offers() {
  return (
    <div className='container  mt-5 ' >
        <div className='special'>
            <h1>special Offers</h1>
            <FontAwesomeIcon className='icon ms-4'  icon="fa-solid fa-arrow-right" />
        </div>
      
       <div className='row' >
        
     
                <div className='col-md-4 mt-5  '  >
              <div className='card-2' >
                  <img  src={img2} className='img2' alt='img2' />  
              </div>
              <div className='alaa'>
                <h1 className='fathi '></h1>
              </div>
            
          </div> 
              
          
              
           
        
        
        
       </div>
    </div>
  )
}

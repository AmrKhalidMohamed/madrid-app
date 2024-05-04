import React from 'react'
import img4 from '../Images/img4.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Foreign.css"

export default function Forigen() {
  return (
    <div className='container  mt-5 ' >
    <div className='forigen'>
        <h1>Foreign tourism</h1>
        <FontAwesomeIcon className='icon ms-4'  icon="fa-solid fa-arrow-right" />
    </div>
  
   <div className='row' >
     <div className='col-md-4 mt-5  '  >
         <div className='card-4' >
             <img  src={img4} className='img4' alt='img2' />  
         </div>
         <div className='mm'>
           <h1 className='title-4 '>Traveling visas</h1>
         </div>
       
     </div>
    
   </div>
</div>
  )
}

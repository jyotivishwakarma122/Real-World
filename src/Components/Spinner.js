import React from 'react'
import Loading from './Loading.gif'
const Spinner=()=>{
  
    return (
      <div className='text-center '>
        <img src={Loading} alt='Loading' height={30} width={30}></img>
        
      </div>
    )
  
}

export default Spinner

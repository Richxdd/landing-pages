import React from 'react'
import Wasapi from '../img/Wasap.svg'

const Wasap = () => {
    return (
        <div className=' fixed   left-3 bottom-2 z-50'>

           <div className=''>
        <a href='https://wa.me/51937815062' className=' bg-[#00E676] h-10 w-52 rounded-full justify-center items-center text-[11px] flex flex-row gap-2  text-white font-bold'>   
        
            <img src={Wasapi}/> 
            <p > 
        ¿En qué podemos ayudarte
        </p> 
        </a>
        </div>
        </div> 
    )
}

export default Wasap

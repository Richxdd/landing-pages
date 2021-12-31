import React, { useState } from 'react'
import Menuhead from '../img/Menu.png'
import Guide from '../img/Guide.png'

const Header = ({apretando, setApretando}) => {

    const handleClick =()=>{
        setApretando(!apretando)
        
    }
    return (
        
        
        <div className='w-full  bg-azul fixed flex z-50 '>
            <div className='container w-full gap-1 flex  py-3 p-2 items-center px-8 lg:px-28 relativo'>
                <div className=' lg:flex-none h-8 w-8 lg:h-16 lg:w-16 relative'>
                    <img src={Guide} layout='fill' className='' />
                </div>

                <div className=' flex-1 lg:flex-1 lg:items-end  flex-col lg:mr-10   px-1 flex items-center justify-center  '>
                    <p className=' lg:text-sm text-blanco text-[8px]'>Antes de matricularte obten una</p>
                    <button
                        type='submit'
                        className='lg:text-2xl bg-rojo rounded-3xl lg:w-48 lg:h-10 w-28 h-6 text-sm flex : ;
                        items-center justify-center text-blanco font-medium uppercase lg:font-bold'>clase gratis
                    </button>
                </div>
                
                <div className='   flex  lg:flex-none h-8 w-8 lg:h-12 lg:w-12 '>
                    <img src={Menuhead} onClick={handleClick} alt='menu' />
                </div>
                
            </div>
            
        </div>
        
        
        
         
       
    )
}

export default Header

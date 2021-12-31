import React from 'react'

import Civil from '../img/Civil.svg'
import Militar from '../img/Militar.svg'

const Cuerpo4 = () => {
  return (
    <div className='w-full  z-20'>
      <div className='container w-full gap-10 flex flex-col  items-center justify-center  '>

        <div className='flex flex-row  justify-center items-center pt-10 '>
          <h1 className='font-bold text-3xl lg:text-5xl text-center'>¿A quienés nos dirigimos?</h1>
        </div>
        <div className='flex  flex-col lg:flex-row justify-center items-center p-8 gap-16 lg:gap-60  '>
          <div className='flex flex-col items-center gap-4'>
            <div className='    flex  h-48 w-48 bg-[#8297E0] hover:flex justify-center items-center rounded-full relative  '>
              <div className=' absolute rounded-full  h-[100%]  w-[100%]  cursor-pointer'>
                <img src={Civil} className='h-48 w-48' />
              </div>
              <div className=' absolute rounded-full flex items-center justify-center h-48 w-48 bg-[#8297E0] cursor-pointer p-2 opacity-0 hover:opacity-100 transition-opacity'>
                <p className=' text-center text-sm  font-bold text-white   '>Jóvenes que deseen postular a las Escuelas de Oficiales y Sub oficiales (FF. AA. & PNP)</p>
              </div>
            </div>
            <div>
              <p className='font-semibold text-2xl'>Civiles</p>
            </div>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <div className='    flex  h-48 w-48 bg-[#8297E0] hover:flex justify-center items-center rounded-full relative  '>
              <div className=' absolute rounded-full  h-[100%]  w-[100%]  cursor-pointer'>
                <img src={Militar} className='h-48 w-48' />
              </div>
              <div className=' absolute rounded-full flex items-center justify-center h-48 w-48 bg-[#8297E0] cursor-pointer p-2 opacity-0 hover:opacity-100 transition-opacity'>
                <p className=' text-center text-sm  font-bold text-white   '>Jóvenes que deseen postular a las Escuelas de Oficiales y Sub oficiales (FF. AA. & PNP)</p>
              </div>
            </div>
            <div>
              <p className='font-semibold text-2xl'>Servicio Militar</p>
            </div>
          </div>
        </div>

      </div >

    </div>
  )
}

export default Cuerpo4

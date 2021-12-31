import React from 'react'

import Tropa from '../img/Tropa.png'

const Cuerpo1 = () => {
  return (
    <div className='w-full  bg-plomo  mt-[60px] '>
      <div className='container w-full gap-1  items-center justify-center pt-8 lg:pt-20   lg:px-56'>
        <div className='flex flex-row-reverse items-center justify-center lg:justify-between bg-contain lg:pb-0 relative '>
            <img src={Tropa}  className=' opacity-50 lg:opacity-100'  />
          <div className=' flex flex-col justify-center items-center lg:bg-right  absolute lg:static'>
            <p className=' uppercase text-negro font-bold text-4xl lg:text-5xl  text-center lg:text-justify '>Prepárate para <br />
              ingresar a las<br />
              escuelas de las<br />
              ff.aa. o pnp<br />
            </p>
            <button type='submit' 
              className=' text-3xl lg:text-4xl bg-rojo rounded-full h-12 w-56 lg:w-72 lg:h-16  
              flex mt-12 items-center justify-center text-white font-medium	 uppercase'>Inscribirme
            </button>
          </div>
        </div>
      </div >

    </div>
  )
}

export default Cuerpo1

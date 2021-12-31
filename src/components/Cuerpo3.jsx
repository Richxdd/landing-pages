import React from 'react'

const Cuerpo3 = () => {
  return (
    <div className='w-full bg-plomo z-20 '>
      <div className='container w-full gap-10 flex flex-col  items-center justify-center p-10  '>
        <div className='flex flex-row  justify-center  '>
          <h1 className='font-bold text-3xl lg:text-5xl '>¿Por qué nosotros?</h1>
        </div>
        <div className='flex flex-col gap-6  items-center lg:items-stretch pt-10 p-10 lg:flex-row lg:justify-center lg:gap-40'>
          <p className='text-9xl text-blue-900 flex flex-col font-bold'>+5<span className='text-2xl text-black font-medium text-center mt-0 lg:mt-5'>Más de 5 años de <br />experiencia</span></p>
          <p className='  text-9xl text-blue-900 flex flex-col font-bold'>50<span className='text-2xl text-black font-medium text-center mt-0 lg:mt-5'>profesores e <br />instructores.</span></p>

          <div className=' justify-end items-center flex flex-col  '>
            <div className=''>
              <p className='text-9xl text-blue-900 flex flex-row font-bold'>90<span className='  text-7xl text-blue-900 flex font-extrabold flex-col pt-12'>%</span></p>
            </div>
            <p className='text-2xl text-black font-medium text-center mt-0 lg:mt-5'>de nuestros<br /> estudiantes alcanzan <br /> una vacante</p>
          </div>
        </div>
      </div>
    </div >


  )
}

export default Cuerpo3

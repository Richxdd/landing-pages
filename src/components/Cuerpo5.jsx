import React from 'react'

import EMCH from '../img/EMCH.png'
import ESNA from '../img/ESNA.png'
import FAP from '../img/FAP.png'
import EOPNP from '../img/EOPNP.png'
import ETE from '../img/ETE.png'
import CITEN from '../img/CITEN.png'
import ESOFA from '../img/ESOFA.png'
import ETSPNP from '../img/ETSPNP.png'
import BECA from '../img/BECA.png'
import IESTFFAA from '../img/IESTFFAA.png'
import Polygon1 from '../img/Polygon1.svg'
import Polygon2 from '../img/Polygon2.svg'
import Polygon3 from '../img/Polygon3.svg'
import Polygon4 from '../img/Polygon4.svg'

const Cuerpo5 = () => {
  return (
    <div className='w-full  z-20 bg-plomo'>
      <div className='container w-full gap-8 flex flex-col  items-center justify-center p-10  '>

        <h1 className='text-3xl lg:text-5xl bg text-center font-bold'>Descubre lo que te enseñaremos</h1>
        <div className='text-center  text-base lg:text-2xl flex flex-col justify-center items-center px-2 '>
          <p className='  font-semibold'>Conoce más sobre nuestros horarios, las asignaturas que dictaremos y los </p>
          <p className=' font-semibold'>pasos para matricularte descargando el temario de la Escuela a donde </p>
          <p className=' font-semibold' > desees postular.</p>
          <br />
          <p className='text-center font-semibold text-base lg:text-2xl'>(Seleciona una insignia)</p>
        </div>


        <div className='p-10 pt-4 flex flex-col lg:flex-row gap-20'>
          <div className='bg-white h-96 w-72 rounded-3xl  border-r-4 border-b-4	shadow-lg shadow-gray-500 flex flex-col items-center justify-center pt-3'>
            <h1 className='font-bold text-2xl mb-1'>Oficiales</h1>
            <div className='grid grid-cols-2  p-3 gap-6 mb-2'>
              <img src={EMCH} className=' h-20 w-20' />
              <img src={ESNA} className=' h-20 w-20' />
              <img src={FAP} className=' h-20 w-20' />
              <img src={EOPNP} className=' h-20 w-20' />
            </div>
            <button type='submit ' className='font-bold bg-[#F00109] rounded-xl w-36 h-16 text-white text-center text-xl' >Descargar Temario</button>
          </div>
          <div className='bg-white h-96 w-72 rounded-3xl  border-r-4 border-b-4	shadow-lg shadow-gray-500 flex flex-col items-center justify-center pt-3'>
            <h1 className='font-bold text-2xl'>Sub Oficiales</h1>
            <div className='grid grid-cols-2  p-3 gap-6 mb-2'>
              <img src={ETE} className=' h-20 w-20 ' />
              <img src={CITEN} className=' h-20 w-20' />
              <img src={ESOFA} className=' h-20 w-20' />
              <img src={ETSPNP} className=' h-20 w-20' />
            </div>
            <button type='submit ' className='font-bold bg-[#F00109] rounded-xl w-36 h-16 text-white text-center text-xl' >Descargar Temario</button>
          </div>
          <div className='bg-white h-96 w-72 rounded-3xl  border-r-4 border-b-4	shadow-lg shadow-gray-500 flex flex-col items-center justify-center pt-3'>
            <h1 className='font-bold text-xl'>Beca 18/ IESTFFAA</h1>
            <div className='flex flex-col p-5 gap-10 mb-2 items-center justify-center content-center'>
              <img src={BECA} className=' h-12 w-44' />
              <img src={IESTFFAA} className=' h-20 w-20' />

            </div>
            <button type='submit ' className='font-bold bg-[#F00109] rounded-xl w-36 h-16 text-white text-center text-xl' >Descargar Temario</button>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row items-center gap-5 justify-center'>

          <img src={Polygon3} className='h-20 w-20 lg:invisible lg:h-0 lg:w-0' />
          <div className='invisible lg:visible lg:flex '>
            <img src={Polygon1} className='h-0 w-0 lg:h-20 lg:w-20' />
            <img src={Polygon1} className='h-0 w-0 lg:h-20 lg:w-20' /></div>




          <div className='bg-azul w-72 h-48 lg:w-96 lg:h-64 rounded-3xl  flex flex-col p-3 text-3xl lg:text-5xl text-white font-bold items-center '>
            <p >Desde</p>
            <div className='flex items-end gap-4'>
              <h1 className='text-4xl lg:text-6xl'>s/ <span className=' text-8xl lg:text-9xl'>450</span></h1>
            </div>

            <p>el ciclo</p>
          </div>
          <img src={Polygon4} className='h-20 w-20 lg:invisible lg:h-0 lg:w-0' />
          <div className='invisible lg:visible lg:flex '>
            <img src={Polygon2} className='h-0 w-0 lg:h-20 lg:w-20' />
            <img src={Polygon2} className='h-0 w-0 lg:h-20 lg:w-20' /></div>

        </div>

      </div >

    </div>
  )
}

export default Cuerpo5

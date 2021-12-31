import React from 'react'
import Mapa from '../img/Mapa.svg'
import Telefono from '../img/Telefono.svg'
import Mensaje from '../img/Mensaje.svg'
import Relog from '../img/Relog.svg'
import Face from '../img/Face.svg'
import Insta from '../img/Insta.svg'
import Youtube from '../img/Youtube.svg'
import Guide from '../img/Guide.png'


const Footer = () => {
    return (
      <div className='bg-zinc-700 '>
        <footer className='container w-full px-10 pt-3 pb-12 lg:px-40 flex  flex-col text-white lg:flex-row lg:justify-between lg:items-center lg:pb-3 lg:py-0 lg:gap-20 '>
            <div className='flex flex-row-reverse justify-between px-4 py-5 lg:flex-row lg:gap-44  lg:flex-1 lg:justify-start'>
           
          <img src={Guide} className='h-24 w-24 '/>
          
          <div className='flex flex-col gap-2'>  
            <ul className='flex items-start justify-start '>
            <li className='list-none lis text-3xl font-semibold'>Conócenos</li>
            </ul>
            <ul className='list-disc  pl-5  text-xl font-normal'>
            <li className=''>Aula Virtual</li>
            <li>Blog</li>
            </ul>
            <div/> 
            </div>
          
          </div>
          
          <div className=' flex flex-col items-start gap-10 pt-8 justify-start   lg:flex-0 lg:justify-center'>
          
            <div className='flex items-start flex-col justify-start text-white  lg:flex-row lg:gap-2 lg:px-10 '>
            <div className='flex flex-col gap-4 p-4'>
            <p className='list-none lis text-3xl font-semibold '>Contacto</p>
            
            <div className='list-none  text-xl font-normal flex flex-col gap-2 '>
            <div className='flex flex-row gap-2'>
              <img src={Mapa} className='h-8 w-8'/>
            <p className=''>Av. Alfredo Benavides 1944, piso 09, Miraflores 15048.</p>
            </div>
            <div className='flex flex-row gap-2'>
            <img src={Telefono} className='h-8 w-8'/>
            <p className=''>938 561 890</p>
            </div>
            <div className='flex flex-row gap-2'>
            <img src={Mensaje} className='h-8 w-8'/>
            <p className=''>info@guideasesores.com</p>
            </div>
            <div className='flex flex-row gap-2'>
            <img src={Relog} className='h-8 w-8'/>
            <p className=''>10:00 am a 07:30 pm</p>
            </div>
            </div>
            </div>

            <div className='flex flex-col items-start gap-5 mt-5 mb-5'>
              <p className='text-2xl font-bold'>Redes</p>
              <div className='flex items-center gap-7'>
               <img src={Face} className='h-12 w-12'/> 
               <img src={Insta} className='h-12 w-12'/> 
               <img src={Youtube} className='h-12 w-12'/> 
               </div>
            </div>
            
            </div>
           
          </div>
          
            </footer>
            </div>
    )
}

export default Footer

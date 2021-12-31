import React from 'react'

const Menu = () => {
    return (

        <div className='container relative'>
        <div className='p-8 mt-14 bg-white rounded-bl-3xl rounded-br-3xl w-full  lg:w-auto lg:top-8 lg:right-[7rem] z-40 absolute'>
        <div className='justify-end mt-12 lg:mt-0'>
            <ul className='flex flex-col justify-end items-center  text-black  text-xl  gap-6 lg:text-base lg:gap-2 '>
                <li className=' w-full border-b-4 border-black font-semibold lg:border-b-2'><a href='/'>Acerca de GUIDE</a></li>
                <li className=' w-full border-b-4 border-black font-semibold lg:border-b-2'><a href='/'>¿Por qué nosotros?</a></li>
                <li className=' w-full border-b-4 border-black font-semibold lg:border-b-2'><a href='/'>¿A quiénes nos dirigimos?</a></li>
                <li className=' w-full border-b-4 border-black font-semibold lg:border-b-2'><a href='/'>Descubre lo que te enseñaremos</a></li>
                <li className=' w-full border-b-4 border-black font-semibold lg:border-b-2'><a href='/'>Explora nuestra aula virtual</a></li>
                <li className=' w-full border-b-4 border-black font-semibold lg:border-b-2'><a href='/'>Nuestros ingresantes</a></li>
            </ul>
        </div>
        </div>
        </div>
      
    )
}

export default Menu

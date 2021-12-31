
import Etrella from '../img/Estrella.svg'
import Comentario from '../img/Comentario.png'
import Comentario2 from '../img/Comentario2.png'
import Comentario3 from '../img/Comentario3.png'

const Cuerpo7 = () => {
    return (
        <div className='w-full  z-20 bg-plomo'>
            <div className='container w-full gap-8 flex flex-col  items-center justify-center p-10  '>
                <h1 className='text-4xl lg:text-5xl bg text-center font-bold'>Conoce a nuestros ingresantes</h1>


                <div className='flex flex-col lg:flex-row gap-10 pb-28'>
                    <div className=' rounded-3xl h-[23rem] w-[24rem] border-r-4 border-b-4	shadow-lg text-center bg-white flex flex-col items-center justify-center pb-8  pt-8  px-7 gap-5 '>
                        <div className='flex flex-col '>
                            <p className=' flex-1 mt-5 text-xl font-semibold text-center'>Gracias a GUIDE logré mi ingreso. lo que más me gustó fueron los profesores y clases grabadas.

                            </p>
                        </div>
                        <div className='flex flex-row w-full justify-start items-center  px-6 gap-10 '>
                            <img src={Comentario} className='h-20 w-20' />
                            <p className='text-xl'>Erick Arancibia <br /><span className='text-sm'>Ingresante ESOFA</span></p>

                        </div>
                        <div className=' flex  '>
                            <img src={Etrella} className='w-14 h-14' />
                            <img src={Etrella} className='w-14 h-14' />
                            <img src={Etrella} className='w-14 h-14' />
                            <img src={Etrella} className='w-14 h-14' />
                            <img src={Etrella} className='w-14 h-14' />
                        </div>
                    </div>

                    <div className=' rounded-3xl h-[23rem] w-[24rem] border-r-4 border-b-4	shadow-lg text-center bg-white flex flex-col items-center justify-center pb-8  pt-8  px-7 gap-5 invisible lg:visible absolute lg:static'>
                        <div className='flex flex-col '>
                            <p className=' flex-1 mt-5 text-xl font-semibold text-center'>Gracias a GUIDE logré mi ingreso. lo que más me gustó fueron los profesores y clases grabadas.

                            </p>
                        </div>
                        <div className='flex flex-row w-full justify-start items-center  px-6 gap-10 '>
                            <img src={Comentario2} className='h-20 w-20' />
                            <p className='text-xl'>Erick Arancibia <br /><span className='text-sm'>Ingresante ESOFA</span></p>

                        </div>
                        <div className=' flex  '>
                            <img src={Etrella} className='w-14 h-14' />
                            <img src={Etrella} className='w-14 h-14' />
                            <img src={Etrella} className='w-14 h-14' />
                            <img src={Etrella} className='w-14 h-14' />
                            <img src={Etrella} className='w-14 h-14' />
                        </div>
                    </div>
                    <div className=' rounded-3xl h-[23rem] w-[24rem] border-r-4 border-b-4	shadow-lg text-center bg-white flex flex-col items-center justify-center pb-8  pt-8  px-7 gap-5  invisible lg:visible absolute lg:static'>
                        <div className='flex flex-col '>
                            <p className=' flex-1 mt-5 text-xl font-semibold text-center'>Gracias a GUIDE logré mi ingreso. lo que más me gustó fueron los profesores y clases grabadas.

                            </p>
                        </div>
                        <div className='flex flex-row w-full justify-start items-center  px-6 gap-10 '>
                            <img src={Comentario3} className='h-20 w-20' />
                            <p className='text-xl'>Erick Arancibia <br /><span className='text-sm'>Ingresante ESOFA</span></p>

                        </div>
                        <div className=' flex  '>
                            <img src={Etrella} className='w-14 h-14' />
                            <img src={Etrella} className='w-14 h-14' />
                            <img src={Etrella} className='w-14 h-14' />
                            <img src={Etrella} className='w-14 h-14' />
                            <img src={Etrella} className='w-14 h-14' />
                        </div>
                    </div>
                </div>
            </div >

        </div>
    )
}

export default Cuerpo7

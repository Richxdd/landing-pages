import Estudiantes from '../img/Estudiantes.png'

const Cuerpo2 = () => {
    return (
        <div className='w-ful  z-20'>
        <div className='container w-full  gap-10 flex flex-col p-10 lg:py-16  items-center justify-center lg:justify-between lg:flex-row lg:px-56 '>
        
            <div className=' flex flex-col items-center  '>
              <h1 className=' text-zinc-400 font-bold text-3xl lg:text-5xl  mb-10'>Acerca de GUIDE</h1>
              <div className='w-80'>
                <p className=' text-black font-medium  text-base lg:text-1xl mb-5 text-justify '>
                  Somos una academia de preparación
                  exclusiva para jóvenes que están próximos a
                  postular a una escuela de Oficiales, Sub
                  Oficiales, Beca 18 y el IESTFFAA. Contamos con
                  la mejor plana de docentes e instructores
                  con amplia experiencia en el uso de
                  herramientas digitales, además de tener un
                  moderno método de enseñanza que
                  garantizarán resultados positivos.
                </p>
              </div>
            </div>
            <div className='col-start-2 flex justify-center items-center'>
              <img src={Estudiantes} className='' />
            </div>
          </div>
          
          
        </div >

      
    )
}

export default Cuerpo2

import { useState } from 'react'
import Header from '../src/components/Header'
import Cuerpo1 from './components/Cuerpo1'
import Cuerpo2 from './components/Cuerpo2'
import Cuerpo3 from './components/Cuerpo3'
import Cuerpo4 from './components/Cuerpo4'
import Cuerpo5 from './components/Cuerpo5'
import Cuerpo6 from './components/Cuerpo6'
import Cuerpo7 from './components/Cuerpo7'
import Footer from './components/Footer'
import Menu from './components/Menu'

import Wasap from './components/Wasap'

function App() {

  const [apretando, setApretando] = useState(false)


  return (
    <div className='flex flex-col relative -z-10'>
      
      <Header apretando={apretando} setApretando={setApretando}/>
      
      {apretando && (<Menu />)}
      
      <Wasap/>
      <Cuerpo1 />
      <Cuerpo2 />
      <Cuerpo3 />
      <Cuerpo4 />
      <Cuerpo5/>
      <Cuerpo6/>
      <Cuerpo7/>

      <Footer/>

    </div>
  )
}

export default App

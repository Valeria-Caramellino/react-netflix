import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './style/App.scss'
//importazione Bootstrap
import * as bootstrap from 'bootstrap'

import Header from './Header'
import Footer from "./Footer";
import AppMain from './AppMain';


function App() {
 
  return (
    <>
      <div className='container-fluid'>
        <Header/>
        
        <AppMain/>
         
        <Footer/>
      </div>
     
    </>
  )
}

export default App

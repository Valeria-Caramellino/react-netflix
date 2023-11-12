import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './style/App.scss'
//importazione Bootstrap
import * as bootstrap from 'bootstrap'

import Header from './Header'
import Footer from "./Footer";
import AppHome from './AppHome';


function App() {
 
  return (
    <>
      <div className='container-fluid'>
        <Header/>
        
        <AppHome/>
         
        <Footer/>
      </div>
     
    </>
  )
}

export default App

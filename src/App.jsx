import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style/App.scss'
//importazione Bootstrap
import * as bootstrap from 'bootstrap'

import Header from './Header'
import Footer from "./Footer";
import AppHome from './pages/AppHome';
import AppFilm from './pages/AppFilm';
import AppSerie from './pages/AppSerie';




function App() {
 
  return (
    <div className='container-fluid'>
      <Router>
        <Header /> 
          <Routes>
            <Route path="/" element={<AppHome />} />
            <Route path="/film" element={<AppFilm />} />
            <Route path='/serie' element={<AppSerie/>} />
          </Routes>
        <Footer /> 
      </Router>
    </div>
  )
}

export default App

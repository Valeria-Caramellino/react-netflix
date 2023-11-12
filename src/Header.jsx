import React from 'react';
import { NavLink } from "react-router-dom";
import arrayHeader from './data/DatiHeader';

const TextForHeader = arrayHeader.map((el , index) =>(
    <NavLink to={el.path} key={index} className="col">{el.label}</NavLink>
))
const Header = () => {
    return(
        <header>
            <nav className="row align-items-center justify-content-around">           
                
                <div className="col-1">
                    <img src="/logo.svg" alt="logo" />
                </div>
                
                <div className=" col-5 h-100 d-flex align-items-center justify-content-center text-center">

                    {TextForHeader}
            
                </div>

                <div className='col-1'>

                    <img src="/icon.png" alt="icon" />

                </div>
                
            </nav>
        </header>
    )
}

export default Header
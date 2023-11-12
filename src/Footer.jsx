import React from "react"

const Footer = () =>{

    const linkedin= 'https://www.linkedin.com/in/valeriacaramellino/';
    const github='https://github.com/Valeria-Caramellino/react-netflix';

    return(
        <footer className='row align-items-center justify-content-center'>
            
            <div className="col-5 text-center d-flex align-items-center text-light justify-content-center">
                <a href={linkedin} target="_blank" className="text-light">

                    <i className="fa-brands fa-linkedin mx-2"></i>
               
                </a>
                
                <p className="">Valeria Caramellino Progetto Netflix con React e Vite</p>
                
                <a href={github} target="_blank" className="text-light">
                    
                    <i className="fa-brands fa-github mx-2"></i>

                </a>
            </div>
           
        </footer>
    )
}
export default Footer
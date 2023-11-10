import StyleFooter from './style/Footer.scss';

const Footer = () =>{
    return(
        <footer className='row align-items-center justify-content-center'>
            
            <div className="col-5 text-center d-flex align-items-center text-light">
                <i className="fa-brands fa-linkedin mx-2"></i>
                
                <p className="">Valeria Caramellino Progetto Netflix con React e Vite</p>
                
                <i className="fa-brands fa-github mx-2"></i>
            </div>
           
        </footer>
    )
}
export default Footer
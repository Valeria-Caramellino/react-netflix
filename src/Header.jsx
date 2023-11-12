import arrayHeader from './data/DatiHeader';

const TextForHeader = arrayHeader.map((el , index) =>(
    <p key={index} className="col">{el}</p>
))
const Header = () => {
    return(
        <header>
            <nav className="row align-items-center justify-content-around">           
                
                <div className="col">
                    <img src="/logo.svg" alt="logo" />
                </div>
                
                <div className=" col-8 h-100 d-flex align-items-center text-center">

                    {TextForHeader}
                
                </div>
                
            </nav>
        </header>
    )
}

export default Header
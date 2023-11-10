import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SectionSearch from './SectionSearch';
import SectionFilm from './SectionFilm';
const AppMain = () =>{
    
    const [testo, setTesto] = useState('');
    const [ArrayFilm, setArrayFilm] = useState([]);
    const [ArraySerie, setArraySerie] = useState([]);
    
    const ApiFilm = 'https://api.themoviedb.org/3/search/movie?api_key=1847c7cbe402614342fdc15b9be4bd97&query=';
    const ApiSerie = 'https://api.themoviedb.org/3/search/tv?api_key=1847c7cbe402614342fdc15b9be4bd97&query=';

    const change = () => {
        const indirizzoFilm = ApiFilm + testo;
        const indirizzoSerie = ApiSerie + testo;
    
        getApi(indirizzoFilm, indirizzoSerie);

    };
    
    const getApi = (indirizzoFilm, indirizzoSerie) => {
        axios.get(indirizzoFilm).then((response) => {
          setArrayFilm(response.data.results);
          console.log(response.data.results);
        });
    
        axios.get(indirizzoSerie).then((response) => {
          setArraySerie(response.data.results);
          console.log(response.data.results);
        });
    };
    useEffect(() => {
        change();
    }, []);
    return(
        <main className='container-fluid'> 
       
            <SectionSearch testo={testo} setTesto={setTesto} UpChange={change}/>
            
            <div className="row my_bg justify-content-center align-items-center ">
                
                <h3 className="col-4 p-2 m-0 text-center text-light ">LISTA FILM</h3>
                
            
            </div>

            <div className="row">
                <div className="mio d-flex justify-content-around">


                    {ArrayFilm.map((oggetto) => (

                        <SectionFilm key={oggetto.id} oggetto={oggetto}/>
                    ))}

                    {ArrayFilm.length === 0 && (
                        
                        <p className="text-light">Nessun risultato trovato</p>
                        
                    )}

                </div>
            </div>
            
            <div className="row justify-content-center align-items-center my_bg">
                
                <h3 className="col-4 p-2 m-0 text-center text-light ">LISTA TELEFILM</h3>
                
            
            </div>
            <div className="row">
                <div className="mio d-flex  justify-content-around">


                    {ArraySerie.map((oggetto) => (

                        <SectionFilm key={oggetto.id} oggetto={oggetto}/>
                    ))}
                    
                    {ArraySerie.length === 0 && (
                        
                        <p className="text-light">Nessun risultato trovato</p>
                        
                    )}

                </div>
            </div>
          
            
        </main>
        
        
    )
}
export default AppMain
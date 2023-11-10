import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SectionSearch from './SectionSearch';
import SectionList from './SectionList';
const AppMain = () =>{
    
    const [testo, setTesto] = useState('');
    const [ArrayFilm, setArrayFilm] = useState([]);
    const [ArraySerie, setArraySerie] = useState([]);

    const initialApiFilm = 'https://api.themoviedb.org/3/search/movie?api_key=1847c7cbe402614342fdc15b9be4bd97&query=al';
    const initialApiSerie = 'https://api.themoviedb.org/3/search/tv?api_key=1847c7cbe402614342fdc15b9be4bd97&query=an';
    
    
    const change = () => {
        
        const ApiFilm = `https://api.themoviedb.org/3/search/movie?api_key=1847c7cbe402614342fdc15b9be4bd97&query=${testo}`;
        const ApiSerie = `https://api.themoviedb.org/3/search/tv?api_key=1847c7cbe402614342fdc15b9be4bd97&query=${testo}`;;
        
        const indirizzoFilm = testo ? ApiFilm : initialApiFilm;
        const indirizzoSerie = testo ? ApiSerie : initialApiSerie;
    
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
        getApi(initialApiFilm, initialApiSerie);
        
    }, []);
    return(
        <main className='container-fluid'> 
       
            <SectionSearch testo={testo} setTesto={setTesto} UpChange={change}/>
            
            <SectionList title="LISTA FILM" dataArray={ArrayFilm} />

            <SectionList title="LISTA TELEFILM" dataArray={ArraySerie} />
          
            
        </main>
        
        
    )
}
export default AppMain
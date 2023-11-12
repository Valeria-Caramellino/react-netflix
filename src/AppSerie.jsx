import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SectionSearch from "./SectionSearch";
import SectionList from "./SectionList";

const Serie = () => {

  const [testo, setTesto] = useState('');
  const [ArraySerie, setArraySerie] = useState([]);

  const initialApiSerie = 'https://api.themoviedb.org/3/search/tv?api_key=1847c7cbe402614342fdc15b9be4bd97&query=an';
    

  const change = () => {
    const ApiSerie = `https://api.themoviedb.org/3/search/tv?api_key=1847c7cbe402614342fdc15b9be4bd97&query=${testo}`;

    const indirizzoSerie = testo ? ApiSerie : initialApiSerie;

    getApi(indirizzoSerie);
  };
  
  const getApi = (indirizzoSerie) => {
      axios.get(indirizzoSerie).then((response) => {
        setArraySerie(response.data.results);
        console.log(response.data.results);
      } ) 
  };
  useEffect(() => {
    getApi(initialApiSerie);
  }, []);



  return(
  
  <main className='container-fluid'>
    <SectionSearch testo={testo} setTesto={setTesto} UpChange={change}/>
    
    <SectionList title="LISTA SERIE TV" dataArray={ArraySerie}/>
    
    
  </main>
  )
};

export default Serie;
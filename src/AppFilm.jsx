
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SectionSearch from "./SectionSearch";
import SectionList from "./SectionList";

const Film = () => {

  const [testo, setTesto] = useState('');
  const [ArrayFilm, setArrayFilm] = useState([]);

  const initialApiFilm = 'https://api.themoviedb.org/3/search/movie?api_key=1847c7cbe402614342fdc15b9be4bd97&query=b';

  

  const change = () => {
    const ApiFilm = `https://api.themoviedb.org/3/search/movie?api_key=1847c7cbe402614342fdc15b9be4bd97&query=${testo}`;

    const indirizzoFilm = testo ? ApiFilm : initialApiFilm;

    getApi(indirizzoFilm);
  };
  
  const getApi = (indirizzoFilm) => {
      axios.get(indirizzoFilm).then((response) => {
        setArrayFilm(response.data.results);
        console.log(response.data.results);
      } ) 
  };
  useEffect(() => {
    getApi(initialApiFilm);
  }, []);



  return(
  
  <main className='container-fluid'>
    <SectionSearch testo={testo} setTesto={setTesto} UpChange={change}/>
    
    <SectionList title="LISTA FILM" dataArray={ArrayFilm}/>
    
    
  </main>
  )
};

export default Film;
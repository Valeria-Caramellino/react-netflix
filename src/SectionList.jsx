import React from 'react';
import SectionFilm from './SectionFilm';

const SectionList = ({ title, dataArray }) => {
  return (
    <div>
      <div className="row my_bg justify-content-center align-items-center">
        <h3 className="col-4 p-2 m-0 text-center text-light">{title}</h3>
      </div>

      <div className="row">
        <div className="mio d-flex justify-content-around">
          
          {dataArray.map((oggetto) => (
            <SectionFilm key={oggetto.id} oggetto={oggetto} />
          ))}

          {dataArray.length === 0 && 
          <p className="text-light">Nessun risultato trovato</p>}
          
        </div>
      </div>
    </div>
  );
};

export default SectionList;
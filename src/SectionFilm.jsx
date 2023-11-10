const SectionFilm = (props) =>{

    const img_path = 'https://image.tmdb.org/t/p/w780';
    const placeholderImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';

    if (!props.oggetto || props.oggetto.length === 0) {
        // Se props.oggetto è undefined o null, o se non ci sono dati significativi, mostra il messaggio "Nessun dato disponibile"
        return (
          <div className="card col-3 m-3">
            <p className="text-light">Nessun dato disponibile</p>
          </div>

        );
    }
    return(
       
   <div className="card col-3 m-2">
         
      {/* {props.oggetto.name && <p>{props.oggetto.name}</p>}
      {props.oggetto.title && <p>{props.oggetto.title}</p>} */}
      
      {props.oggetto.poster_path ? (
        <img src={`${img_path}${props.oggetto.poster_path}`} alt="" />
      ) : (
        <img src={placeholderImageUrl} alt="" />
      )}
    
    </div>
            
    )
}
export default SectionFilm
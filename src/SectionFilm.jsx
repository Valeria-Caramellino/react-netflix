const SectionFilm = (props) =>{

    const img_path = 'https://image.tmdb.org/t/p/w780';
    const placeholderImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';

    //operatore ternario
    const imageUrl = props.oggetto.poster_path
    ? `${img_path}${props.oggetto.poster_path}`
    : placeholderImageUrl;

    return(
       
   <div className="card col-3 m-2">
         
        {(props.oggetto.name || props.oggetto.title) && (

            <div className="row h-100 align-items-center text-center">
                <p>
                    Titolo: {props.oggetto.name || props.oggetto.title}
                </p>
            </div>
        )}
      
      <img src={imageUrl} alt="img" />    
        
    </div>
            
    )
}
export default SectionFilm
import React from "react";

const SectionFilm = (props) =>{

    //const img
    const img_path = 'https://image.tmdb.org/t/p/w780';
    const placeholderImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';

    //operatore ternario per img
    const imageUrl = props.oggetto.poster_path
    ? `${img_path}${props.oggetto.poster_path}`
    : placeholderImageUrl;

    //const per media voto
    const star = 5;

    return(
       
   <div className="card col-3 m-2">
         
        {(props.oggetto.name || props.oggetto.title) && (

            <div className="row h-100 align-items-center text-center">
                <p>
                    Titolo: {props.oggetto.name || props.oggetto.title}
                </p>
                <p>
                    Lingua : {props.oggetto.original_language}
                </p>
                <p>
                    Voto:

                {[...Array(star).keys()].map((el) => (
                    
                    <React.Fragment key={el}>
                        
                        {Math.ceil(props.oggetto.vote_average / 2) >= el + 1  ? (
                            <span>
                                <i className="fa-solid fa-star"></i>
                            </span> 
                                
                        ) : (
                            <span>
                               <i className="fa-regular fa-star"></i>
                            </span>   
                        )}

                    </React.Fragment>

                ))}
                </p>
                
            </div>
            
        )}
      
      <img src={imageUrl} alt="img" />    
        
    </div>
            
    )
}
export default SectionFilm
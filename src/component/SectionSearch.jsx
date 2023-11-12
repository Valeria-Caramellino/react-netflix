import React from 'react';

const SectionSearch = (props) =>{
    return (
        <div className="row search">
            <div className="col">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text"  placeholder="Cerca " value={props.testo}
            onChange={(e) => props.setTesto(e.target.value)}  onKeyUp={props.UpChange}/>
            
            </div>
        </div>
    )
}
export default SectionSearch
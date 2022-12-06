import { useState } from 'react';


const JikanItem = ({ jikan }) => {

    const { images: { jpg: { image_url }}, title, title_english, 
        title_japanese, type, episodes, 
        status, airing, rating, 
        synopsis, background, season, 
        producers, studios, genres, themes } = jikan;



    return (
        <li className="temporary">
            <img src={image_url}></img>
            <h4>{title}</h4>
            <h3>{title_japanese}</h3>
            <p>{synopsis}</p>
        
        </li>
    );
};

export default JikanItem;

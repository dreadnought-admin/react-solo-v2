import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const JikanDetail = () => {
    const [jikan, setJikan] = useState(null);
    
    const { title } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/animes/${title}`)
        .then((r) => r.json())
        .then((jikan) => {
            setJikan(jikan);
        })
    }, [id])

    if (!jikan) { return <div></div> }

    const { images: { jpg: { image_url }}, title,
    title_japanese, type, episodes,
    status, airing, rating,
    synopsis, background
    } = jikan;

    return (
        <div>
        <ul className="temporary">
            <img className="tempImg" src={image_url}></img>
            <h4>{title}</h4>
            <h3>{title_japanese}</h3>
            <p>{synopsis}</p>
            <p>{background}</p>
        </ul>
 
        <ul>
            <button>Airing: { airing ? "Yes" : "No" }</button>
            <p>Type: {type} | Episodes: {episodes}</p>
            <p>Status: {status} | Rating: {rating}</p>
        </ul>
        </div>
        
    );
};

export default JikanDetail;


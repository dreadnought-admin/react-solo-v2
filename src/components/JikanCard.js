const JikanItem = ({ jikan }) => {
 
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
 
export default JikanItem;

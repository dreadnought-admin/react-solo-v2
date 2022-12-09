
const JikanItem = ({ jikan }) => {
 
    const { images: { jpg: { image_url }}, trailer: { youtube_id }, title,
        title_japanese, type, episodes,
        status, airing, rating,
        synopsis, background
        } = jikan;
 
    return (
 
        <div className="jikanContainer">
        <ul className="">
            <img className="jikanImage" src={image_url}></img>
            <div className="trailer">
                <iframe
                width="700"
                height="500"
                src={`http://www.youtube.com/embed/${youtube_id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                />

            </div>
            <h2>{title}</h2>
            <h3>{title_japanese}</h3>
            <p>{synopsis}</p>
            <p>{background}</p>
            
 
    
            <button className="airing" style={{backgroundColor: airing ? "pink" : "yellow"}}>Airing: { airing ? "Yes" : "No" }</button>
            <p>Type: {type} | Episodes: {episodes}</p>
            <div className="statusRating">
                <p>Status: {status} | Rating: {rating}</p>
            </div>
        </ul>
        </div>
    );
};
 
export default JikanItem;

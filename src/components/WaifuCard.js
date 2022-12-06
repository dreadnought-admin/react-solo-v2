
const WaifuCard = ({ waifu }) => {

    const { url } = waifu

    return (
        <div className="temporary">
            <img className="tempImg" src={url}></img>
            <div>
                <button className="kawaii" onClick={console.log("uwu!")}>
                    Kawaii!
                </button>
            </div>
        </div>
    );
};

export default WaifuCard;

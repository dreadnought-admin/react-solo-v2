
const WaifuCard = ({ waifu }) => {

    const { url } = waifu

    const handleKawaii = () => {
        console.log("uwu! what's this?")
    }

    const handleGenerate = () => {
        console.log("o-onii-san!")
    }

    return (
        <div className="temporary">
            <div>
                <h1>Presenting...</h1>
                <h2><em>Your Waifu!</em></h2>
            </div>
            <img className="tempImg" src={url}></img>
            <div>
                <button className="kawaii" onClick={handleKawaii}>
                    Kawaii!
                </button>
                <button className="generate" onClick={handleGenerate}>
                    <em>*slams fist against table*</em> Bring Me Another!
                </button>
            </div>
        </div>
    );
};

export default WaifuCard;

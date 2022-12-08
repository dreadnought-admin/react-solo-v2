
const WaifuCard = ({ waifu }) => {
 
    const { url } = waifu
 
    const handleKawaii = () => {
        console.log("uwu! what's this?")
    }
 
    const handleGenerate = async(e) => {
        console.log("owo?")
        window.location.reload();
    }
 
    const handleTouch = () => {
        alert("o-onii-san! (⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)")
    }
 
    return (
        <div className="temporary">
            <div>
                <h1>Presenting...</h1>
                <h2><em>Your Waifu!</em></h2>
            </div>
            <img className="tempImg" src={url} onClick={handleTouch}></img>
            <div>
                <button className="kawaii" onClick={handleKawaii}>
                    Kawaii! `(´｡• ᵕ •｡`) ♡`
                </button>
                <button className="generate" onClick={handleGenerate}>
                    <em>*slams fist against table*</em> Bring Me Another!
                </button>
            </div>
        </div>
    );
};
 
export default WaifuCard;
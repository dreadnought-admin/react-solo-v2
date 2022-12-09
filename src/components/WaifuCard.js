
const WaifuCard = ({ waifu, isKawaii, onToggleKawaii }) => {

    const buttonText = isKawaii ? "Kawaii! `(´｡• ᵕ •｡`) ♡`" : "T-Thank you s-senpai! (*´∀`*)";
 
    const { url } = waifu
 
    const handleKawaii = () => {
        console.log("uwu! what's this?")
        onToggleKawaii();
    }
 
    const handleGenerate = async(e) => {
        console.log("owo?")
        window.location.reload();
    }
 
    const handleTouch = () => {
        alert("o-onii-san! (⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)")
    }

   
    return (
        <div className="presentWaifu">
            <div className="waifuText">
                <h1>Presenting...</h1>
                <h2><em>Your Waifu!</em></h2>
            </div>
            <img className="waifu" src={url} onClick={handleTouch}></img>
            <div className="kawaiiContainer">
                <button className="kawaii" onClick={handleKawaii}>
                    {buttonText}
                </button>
            </div>
            <div className="generateContainer">
                <button className="kawaii" onClick={handleGenerate}>
                    Bring Me Another! ヾ( ･`⌓´･)ﾉﾞ💢💢💢
                </button>
            </div>
        </div>
    );
};
 
export default WaifuCard;
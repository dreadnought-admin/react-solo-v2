const Header = ({ isDarkMode, onToggleDarkMode }) => {
    const buttonTextContent = isDarkMode ? "Turn Off the Lights!" : "Turn On the Lights!"

    return (
        <header>
            <nav>
                <div className="logo">
    
                    <img className="siteLogo" src="../images/weebLogo.png"></img>
                    
                </div>
                <div className="buttonBar">
                <a className="button" href="">
                        Search Database 🔍
                    </a>
                    <a className="button" href="">
                        Add to Database 🖉
                    </a>
                    <a className="button" href="">
                        Waifu Generator 💖
                    </a>
                    <button onClick={onToggleDarkMode}>{buttonTextContent}</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;

const Header = ({ isDarkMode, onToggleDarkMode }) => {
    const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode"

    return (
        <header>
            <nav>
                <div className="navigation">
    
                    <img className="siteLogo" src="../images/weebLogo.png"></img>
                    
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
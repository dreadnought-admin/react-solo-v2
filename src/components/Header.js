import { NavLink } from 'react-router-dom'

const Header = ({ isSakura, onToggleSakuraMode }) => {
    const buttonTextContent = isSakura ? "🌸" : "💮"

    return (
        <header>
            <nav className="navigation">
                <div className="logoContainer">
    
                    <img className="siteLogo" src="../images/weebLogo.png"></img>
                    
                </div>
                <div className="buttonBar">
                <NavLink className="navButton" to="/">
                    Home 👹
                </NavLink>
                <NavLink className="navButton" to="/database">
                        Search Database 🔍
                    </NavLink>
                    <NavLink className="navButton" to="/database/new">
                        Add to Database 🖉
                    </NavLink>
                    <NavLink className="navButton" to="/waifu">
                        Waifu Generator 💖
                    </NavLink>
                    <button className="cherryButton" onClick={onToggleSakuraMode}>{buttonTextContent}</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
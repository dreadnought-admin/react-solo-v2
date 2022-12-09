import { NavLink } from 'react-router-dom'

const Header = ({ isDarkMode, onToggleDarkMode }) => {
    const buttonTextContent = isDarkMode ? "Turn Off the Lights!" : "Turn On the Lights!"

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
                    <button onClick={onToggleDarkMode}>{buttonTextContent}</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
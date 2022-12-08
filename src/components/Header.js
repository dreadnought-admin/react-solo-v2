import { NavLink } from 'react-router-dom';

const Header = ({ isDarkMode, onToggleDarkMode }) => {
    const buttonTextContent = isDarkMode ? "Turn Off the Lights!" : "Turn On the Lights!"

    return (
        <header>
            <nav>
                <div className="logo">
    
                    <img className="siteLogo" src="../images/weebLogo.png"></img>
                    
                </div>
                <div className="buttonBar">
                <NavLink className="button" to="/database">
                        Search Database 🔍
                    </NavLink>
                    <NavLink className="button" to="/database/new">
                        Add to Database 🖉
                    </NavLink>
                    <NavLink className="button" to="/waifu">
                        Waifu Generator 💖
                    </NavLink>
                    <button onClick={onToggleDarkMode}>{buttonTextContent}</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
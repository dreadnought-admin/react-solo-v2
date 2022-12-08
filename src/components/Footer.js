import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <nav>
                <div className="navigation">
                    <NavLink className="button" to="https://jikan.moe/">
                        Jikan API
                    </NavLink>
                    <NavLink className="button" to="https://www.waifu.im/">
                        WAIFU.IM
                    </NavLink>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;


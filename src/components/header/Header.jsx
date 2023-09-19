import { NavLink } from 'react-router-dom';

const Header = (props) => {
    const { myCity, headerClasses, openMobileMenu, day, month, changeTheme } =
        props;
    return (
        <header className={headerClasses}>
            <div className="header-container _container">
                <NavLink
                    to={`../${myCity}/${day}.${month}`}
                    relative="route"
                    className="header-logo"
                    title="Погода у вашому місті"
                >
                    <span></span>
                    <div className="header-logo-label">Weather app</div>
                </NavLink>
                <div className="theme-switch" onClick={() => changeTheme(true)}>
                    <label className="switch">
                        <input type="checkbox"></input>
                        <span className="slider theme-switch-input"></span>
                    </label>
                    <div className="icon-dark"></div>
                    <div className="icon-light"></div>
                </div>
                <nav className="header-nav">
                    <ul className="header-nav-list">
                        <li
                            className="header-nav-list-item"
                            onClick={openMobileMenu}
                        >
                            <NavLink to={`${myCity}/${day}.${month}`}>
                                Погода у вашому місті
                            </NavLink>
                        </li>
                        <li className="header-nav-list-item">
                            <NavLink to="favorite" onClick={openMobileMenu}>
                                Погода в обраних містах
                            </NavLink>
                        </li>
                        <li
                            className="header-nav-list-item"
                            onClick={openMobileMenu}
                        >
                            <NavLink to="weathers">Погода в містах</NavLink>
                        </li>
                    </ul>
                </nav>
                <button onClick={openMobileMenu} className="header-menu-icon">
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;

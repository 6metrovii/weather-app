import { NavLink } from 'react-router-dom';

const NotFound = ({ city, day, month }) => {
    return (
        <div className="PageNotFound">
            <div className="PageNotFound-container _container">
                <h2 className="PageNotFound-title">
                    Нажаль сторінка не знайдена
                </h2>
                <div className="PageNotFound-icon icon-not-found"></div>
                <nav className="PageNotFound-nav">
                    <h3 className="PageNotFound-nav-title">
                        Сторінки які можуть вас зацікавити:
                    </h3>
                    <ul className="PageNotFound-nav-list">
                        <li className="PageNotFound-nav-list-item">
                            <NavLink
                                to={`../${city}/${day}.${month}`}
                                relative="route"
                            >
                                Погода у вашому місті
                            </NavLink>
                        </li>
                        <li className="PageNotFound-nav-list-item">
                            <NavLink to="favorite">
                                Погода в обраних містах
                            </NavLink>
                        </li>
                        <li className="PageNotFound-nav-list-item">
                            <NavLink to="weathers">
                                Погода в містах України
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default NotFound;

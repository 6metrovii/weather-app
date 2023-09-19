import { NavLink } from 'react-router-dom';
import WeatherItem from './WeatherItem';

const WeatherPageFavorite = (props) => {
    const { citys, setCitys, changeToggleFaforite, day, month } = props;
    const favoriteArray = citys.filter((item) => item.isFavorite === true);

    return (
        <div className="weatherPage-favorite">
            <div className="weatherPage-favorite-container _container">
                {favoriteArray.length > 0 ? (
                    <>
                        <h2 className="weatherPage-favorite-title">
                            Погода в обраних містах України
                        </h2>
                        {favoriteArray.map((item) => (
                            <WeatherItem
                                day={day}
                                month={month}
                                citys={citys}
                                setCitys={setCitys}
                                changeToggleFaforite={changeToggleFaforite}
                                key={item.id}
                                {...item}
                            />
                        ))}
                    </>
                ) : (
                    <div className="not-favorite _container">
                        <div className="not-favorite-icon icon-ups"></div>
                        <span>Список обраних міст порожній</span>
                        <NavLink
                            className="not-favorite-link icon-arrow-back"
                            to="../weathers"
                            relative="path"
                        >
                            Обрати місто
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WeatherPageFavorite;

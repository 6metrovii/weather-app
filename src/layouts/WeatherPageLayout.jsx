import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import loadWeather from '../services/loadWeather';
import WeatherPageMenu from '../components/weather/WeatherPageMenu';

const WeatherPageLayout = ({ city, citys, day, month }) => {
    const { slug } = useParams();
    const [weatherData, setWeatherData] = useState(null);

    const cityPage = slug
        ? citys.find((item) => item.city === slug)
        : citys.find((item) => item.city === city);

    useEffect(() => {
        loadWeather(cityPage.lat, cityPage.lng, setWeatherData);
    }, [cityPage, setWeatherData]);

    return (
        <div className="weatherPage">
            <div className="weatherPage-container _container">
                {!city ? (
                    <NavLink
                        className="weatherPage-link-back icon-arrow-back"
                        to="../.."
                        relative="path"
                    >
                        Погода в інших містах України
                    </NavLink>
                ) : null}
                <div className="weather-city-name">{cityPage.city}</div>
                <WeatherPageMenu
                    day={day}
                    month={month}
                    city={cityPage.city}
                    weatherData={weatherData}
                />
                <Outlet />
            </div>
        </div>
    );
};

export default WeatherPageLayout;

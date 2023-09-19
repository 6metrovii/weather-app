import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import loadWeather from '../../services/loadWeather';
import weaterCitys from '../../data/weatherCitys';

const WeatherItem = (props) => {
    const {
        city,
        lat,
        lng,
        id,
        isFavorite,
        changeToggleFaforite,
        citys,
        day,
        month,
    } = props;
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        loadWeather(lat, lng, setWeatherData);
    }, [lat, lng, setWeatherData]);

    let thisCity = weaterCitys.find((item) => item.city === city),
        newObject = { ...thisCity, temp: weatherData?.current.temp };
    thisCity = newObject;

    return (
        <>
            {!weatherData ? (
                <div className="loading">
                    <img src="../../loading.svg" alt="spinner" />
                </div>
            ) : (
                <div className="weather-city">
                    <div className="weather-header">
                        <div className="weather-main">
                            <NavLink
                                title="Детальний прогноз погоди"
                                to={`${city}/${day}.${month}`}
                                {...weatherData}
                                className="weather-city-name icon-arrow-back"
                            >
                                {city}
                            </NavLink>
                            <div className="weather-status">
                                {weatherData?.current.weather[0].description}
                            </div>
                        </div>
                        <div className="wheather-icon">
                            <img
                                src={`http://openweathermap.org/img/w/${weatherData?.current.weather[0].icon}.png`}
                                alt="weater icon"
                            />
                        </div>
                    </div>
                    <div className="wheather-temp">
                        <span>{Math.round(weatherData?.current.temp)}</span>
                    </div>
                    <div className="weather-feels-like">
                        Відчувається як:
                        <span>
                            {Math.round(weatherData?.current.feels_like)}
                        </span>
                    </div>
                    <button
                        onClick={() => changeToggleFaforite(citys, id)}
                        title="Додати до обраних міст"
                        className={
                            isFavorite
                                ? 'weather-favorite favorite icon-heart'
                                : 'weather-favorite icon-heart'
                        }
                    />
                </div>
            )}
        </>
    );
};

export default WeatherItem;

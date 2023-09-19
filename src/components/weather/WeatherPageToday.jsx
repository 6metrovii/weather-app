import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import weaterCitys from '../../data/weatherCitys';
import loadWeather from '../../services/loadWeather';

const WeatherPageToday = ({ city }) => {
    const { slug } = useParams();
    const [weatherData, setWeatherData] = useState(null);

    const cityPage = slug
        ? weaterCitys.find((item) => item.city === slug)
        : weaterCitys.find((item) => item.city === city);

    useEffect(() => {
        loadWeather(cityPage.lat, cityPage.lng, setWeatherData);
    }, [cityPage, setWeatherData]);

    const data = weatherData?.current;
    const weatherDescr =
        data?.weather[0].description[0].toUpperCase() +
        data?.weather[0].description.slice(1);

    return (
        <>
            {!data ? (
                <div className="loading">
                    <img src="../../loading.svg" alt="spinner icon" />
                </div>
            ) : (
                <>
                    <div className="weather-info">
                        <div className="weatherPage-header">
                            <div className="weather-status">
                                {weatherDescr}
                                <div className="wheather-icon">
                                    <img
                                        src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                                        alt="weater icon"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="weatherPage-body">
                            <div className="weatherPage-temp-now _weather-info _temp">
                                <span>Температура зараз:</span>
                                <span>{Math.round(data.temp)}</span>
                            </div>
                            <div className="weatherPage-temp-like _weather-info _temp">
                                <span>Відчувається як:</span>
                                <span>{Math.round(data.feels_like)}</span>
                            </div>
                            <div className="weatherPage-humidity _weather-info ">
                                <span>Вологість:</span>
                                <span>{` ${Math.round(
                                    data.humidity
                                )} % `}</span>
                            </div>
                            <div className="weatherPage-pressure _weather-info ">
                                <span>Тиск:</span>
                                <span>{` ${Math.round(
                                    data.pressure
                                )} мм `}</span>
                            </div>
                            <div className="weatherPage-wind _weather-info ">
                                <span>Вітер:</span>
                                <span>{` ${data.wind_speed} км/год`}</span>
                            </div>
                            <div className="weatherPage-wind _weather-info ">
                                <span>Порив вітру:</span>
                                <span>{` ${data.wind_gust} км/год`}</span>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default WeatherPageToday;

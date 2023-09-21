import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const WeatherPageDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { data } = location.state;
    let weatherDescr =
        data?.weather[0].description[0].toUpperCase() +
        data?.weather[0].description.slice(1);

    useEffect(() => {
        if (!data) {
            return navigate('..', { relative: 'path' });
        }
    }, [data, navigate]);

    console.log(data);

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
                                <div className="_weather-info-icon icon-day"></div>
                                <span>Температура вдень:</span>
                                <span>{Math.round(data.temp.day)}</span>
                            </div>
                            <div className="weatherPage-temp-like _weather-info _temp">
                                <div className="_weather-info-icon icon-night"></div>
                                <span>Температура вночі:</span>
                                <span>{Math.round(data.temp.night)}</span>
                            </div>
                            <div className="weatherPage-temp-now _weather-info _temp">
                                <div className="_weather-info-icon icon-temp">
                                    <span>max</span>
                                </div>
                                <span>Максимальна температура :</span>
                                <span>{Math.round(data.temp.max)}</span>
                            </div>
                            <div className="weatherPage-temp-like _weather-info _temp">
                                <div className="_weather-info-icon icon-temp">
                                    <span>min</span>
                                </div>
                                <span>Мінімальна температура:</span>
                                <span>{Math.round(data.temp.min)}</span>
                            </div>
                            <div className="weatherPage-humidity _weather-info ">
                                <div className="_weather-info-icon icon-humidity"></div>
                                <span>Вологість:</span>
                                <span>{` ${Math.round(
                                    data.humidity
                                )} % `}</span>
                            </div>
                            <div className="weatherPage-pressure _weather-info ">
                                <div className="_weather-info-icon icon-pressure"></div>
                                <span>Тиск:</span>
                                <span>{` ${Math.round(
                                    data.pressure
                                )} мм `}</span>
                            </div>
                            <div className="weatherPage-wind _weather-info ">
                                <div className="_weather-info-icon icon-wind"></div>
                                <span>Вітер:</span>
                                <span>{` ${data.wind_speed} км/год`}</span>
                            </div>
                            <div className="weatherPage-wind _weather-info ">
                                <div className="_weather-info-icon icon-wind2"></div>
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

export default WeatherPageDetails;

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
                                <span>Температура вдень:</span>
                                <span>{Math.round(data.temp.day)}</span>
                            </div>
                            <div className="weatherPage-temp-like _weather-info _temp">
                                <span>Температура вночі:</span>
                                <span>{Math.round(data.temp.night)}</span>
                            </div>
                            <div className="weatherPage-temp-now _weather-info _temp">
                                <span>Максимальна температура :</span>
                                <span>{Math.round(data.temp.max)}</span>
                            </div>
                            <div className="weatherPage-temp-like _weather-info _temp">
                                <span>Мінімальна температура:</span>
                                <span>{Math.round(data.temp.min)}</span>
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

export default WeatherPageDetails;

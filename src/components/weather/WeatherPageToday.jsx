import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import weaterCitys from '../../data/weatherCitys';
import loadWeather from '../../services/loadWeather';
import ScaleTemp from './ScaleTemp';

const WeatherPageToday = ({ myCity, city, appClasses }) => {
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
    const weatherDataHourly = weatherData?.hourly;

    let hourNow = new Date().getHours();
    let minutesNow = new Date().getMinutes();

    hourNow = hourNow < 10 ? ('0' + hourNow).slice(-2) : hourNow;
    minutesNow = minutesNow < 10 ? ('0' + minutesNow).slice(-2) : minutesNow;

    const hourlyWeather = weatherData?.hourly;
    const hourlyHumidity = [];
    const hourlyTemps = [];
    hourlyWeather?.forEach((item) => {
        hourlyTemps.push(item.temp);
        hourlyHumidity.push(item.humidity);
    });
    const angle = '°C';
    const percent = '%';

    function formatHours(hour) {
        if (hour === 24) hour = 0;
        if (hour === 25) hour = 1;
        if (hour === 26) hour = 2;
        if (hour === 27) hour = 3;
        if (hour === 28) hour = 4;
        if (hour === 29) hour = 5;
        if (hour === 30) hour = 6;
        if (hour === 31) hour = 7;
        if (hour === 32) hour = 8;
        if (hour === 33) hour = 9;
        if (hour === 34) hour = 10;
        if (hour === 35) hour = 11;
        if (hour === 36) hour = 12;
        if (hour === 37) hour = 13;
        if (hour === 38) hour = 14;
        if (hour === 39) hour = 15;
        if (hour === 40) hour = 16;
        if (hour === 41) hour = 17;
        if (hour === 42) hour = 18;
        if (hour === 43) hour = 19;
        if (hour === 44) hour = 20;
        if (hour === 45) hour = 21;
        if (hour === 46) hour = 22;
        if (hour === 47) hour = 23;
        if (hour === 48) hour = 0;
        if (hour === 49) hour = 1;
        if (hour === 50) hour = 2;
        if (hour === 51) hour = 3;
        if (hour === 52) hour = 4;
        if (hour === 53) hour = 5;
        if (hour === 54) hour = 6;
        if (hour === 55) hour = 7;
        if (hour === 56) hour = 8;
        if (hour === 57) hour = 9;
        if (hour === 58) hour = 10;
        if (hour === 59) hour = 11;
        if (hour === 60) hour = 12;
        if (hour === 61) hour = 13;
        if (hour === 62) hour = 14;
        if (hour === 63) hour = 15;
        if (hour === 64) hour = 16;
        if (hour === 65) hour = 17;
        if (hour === 66) hour = 18;
        if (hour === 67) hour = 19;
        if (hour === 68) hour = 20;
        if (hour === 69) hour = 21;
        if (hour === 70) hour = 22;
        if (hour === 71) hour = 23;
        if (hour === 72) hour = 0;
        if (hour === 73) hour = 1;
        if (hour === 74) hour = 2;
        if (hour === 75) hour = 3;
        if (hour === 76) hour = 4;
        if (hour === 77) hour = 5;
        if (hour === 78) hour = 6;
        if (hour === 79) hour = 7;
        hour = hour < 10 ? ('0' + hour).slice(-2) : hour;
        return hour;
    }

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
                            <div className="weatherPage-body-items">
                                <div className="weatherPage-temp-now _weather-info _temp ">
                                    <div className="_weather-info-icon icon-temp"></div>
                                    <span>Температура зараз:</span>
                                    <span>{Math.round(data.temp)}</span>
                                </div>
                                <div className="weatherPage-temp-like _weather-info _temp ">
                                    <div className="_weather-info-icon icon-temp"></div>
                                    <span>Відчувається як:</span>
                                    <span>{Math.round(data.feels_like)}</span>
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
                                <div className="weatherPage-wind _weather-info  ">
                                    <div className="_weather-info-icon icon-wind2"></div>
                                    <span>Порив вітру:</span>
                                    <span>{` ${data.wind_gust} км/год`}</span>
                                </div>
                            </div>
                            <div className="weatherPage-body-scale">
                                <h2 className="weatherPage-body-scale-title">
                                    Графік зміни температури на наступні 48
                                    годин
                                </h2>
                                <ScaleTemp
                                    myCity={myCity}
                                    appClasses={appClasses}
                                    formatHours={formatHours}
                                    minutesNow={minutesNow}
                                    hourNow={hourNow}
                                    hourlyInfo={hourlyTemps}
                                    sign={angle}
                                />
                            </div>
                            <div className="weatherPage-body-scale">
                                <h2 className="weatherPage-body-scale-title">
                                    Графік зміни вологості повітря на наступні
                                    48 годин
                                </h2>
                                <ScaleTemp
                                    myCity={myCity}
                                    appClasses={appClasses}
                                    formatHours={formatHours}
                                    minutesNow={minutesNow}
                                    hourNow={hourNow}
                                    hourlyInfo={hourlyHumidity}
                                    sign={percent}
                                />
                            </div>
                        </div>
                        <div className="weatherPage-weather-hours">
                            <h2 className="weatherPage-weather-hours-title">
                                Детальний погодинний прогноз погоди на сьогодні
                            </h2>
                            <div className="weatherPage-weather-hour-wrapper">
                                <div className="weatherPage-weather-hour">
                                    <h3 className="weatherPage-weather-hour-title">
                                        {formatHours(hourNow + 3)}:{minutesNow}
                                    </h3>
                                    <div className="weatherPage-weather-hour-icon">
                                        <img
                                            src={`http://openweathermap.org/img/w/${weatherDataHourly[3].weather[0].icon}.png`}
                                            alt="weater icon"
                                        />
                                    </div>
                                    <div className="weatherPage-weather-hour-temp _weather-details ">
                                        <div className="weather-info-icon icon-temp"></div>
                                        <span className="_details-temp">
                                            {Math.round(
                                                weatherDataHourly[3].temp
                                            )}
                                        </span>
                                    </div>
                                    <div className="weatherPage-weather-hour-humidity _weather-details ">
                                        <div className="weather-info-icon icon-humidity"></div>
                                        <span>{` ${Math.round(
                                            weatherDataHourly[3].humidity
                                        )} % `}</span>
                                    </div>
                                    <div className="weatherPage-weather-hour-pressure _weather-details ">
                                        <div className="weather-info-icon icon-pressure"></div>
                                        <span>{` ${Math.round(
                                            weatherDataHourly[3].pressure
                                        )} мм `}</span>
                                    </div>
                                    <div className="weatherPage-weather-hour-wind _weather-details ">
                                        <div className="weather-info-icon icon-wind"></div>
                                        <span>{` ${weatherDataHourly[3].wind_speed} км/год`}</span>
                                    </div>
                                    <div className="weatherPage-weather-hour-wind2 _weather-details ">
                                        <div className="weather-info-icon icon-wind2"></div>
                                        <span>{` ${weatherDataHourly[3].wind_gust} км/год`}</span>
                                    </div>
                                </div>
                                <div className="weatherPage-weather-hour">
                                    <h3 className="weatherPage-weather-hour-title">
                                        {formatHours(hourNow + 6)}:{minutesNow}
                                    </h3>
                                    <div className="weatherPage-weather-hour-icon">
                                        <img
                                            src={`http://openweathermap.org/img/w/${weatherDataHourly[6].weather[0].icon}.png`}
                                            alt="weater icon"
                                        />
                                    </div>
                                    <div className="weatherPage-weather-hour-temp _weather-details ">
                                        <div className="weather-info-icon icon-temp"></div>
                                        <span className="_details-temp">
                                            {Math.round(
                                                weatherDataHourly[6].temp
                                            )}
                                        </span>
                                    </div>
                                    <div className="weatherPage-weather-hour-humidity _weather-details ">
                                        <div className="weather-info-icon icon-humidity"></div>
                                        <span>{` ${Math.round(
                                            weatherDataHourly[6].humidity
                                        )} % `}</span>
                                    </div>
                                    <div className="weatherPage-weather-hour-pressure _weather-details ">
                                        <div className="weather-info-icon icon-pressure"></div>
                                        <span>{` ${Math.round(
                                            weatherDataHourly[6].pressure
                                        )} мм `}</span>
                                    </div>
                                    <div className="weatherPage-weather-hour-wind _weather-details ">
                                        <div className="weather-info-icon icon-wind"></div>
                                        <span>{` ${weatherDataHourly[6].wind_speed} км/год`}</span>
                                    </div>
                                    <div className="weatherPage-weather-hour-wind2 _weather-details ">
                                        <div className="weather-info-icon icon-wind2"></div>
                                        <span>{` ${weatherDataHourly[6].wind_gust} км/год`}</span>
                                    </div>
                                </div>
                                <div className="weatherPage-weather-hour">
                                    <h3 className="weatherPage-weather-hour-title">
                                        {formatHours(hourNow + 9)}:{minutesNow}
                                    </h3>
                                    <div className="weatherPage-weather-hour-icon">
                                        <img
                                            src={`http://openweathermap.org/img/w/${weatherDataHourly[9].weather[0].icon}.png`}
                                            alt="weater icon"
                                        />
                                    </div>
                                    <div className="weatherPage-weather-hour-temp _weather-details ">
                                        <div className="weather-info-icon icon-temp"></div>
                                        <span className="_details-temp">
                                            {Math.round(
                                                weatherDataHourly[9].temp
                                            )}
                                        </span>
                                    </div>
                                    <div className="weatherPage-weather-hour-humidity _weather-details ">
                                        <div className="weather-info-icon icon-humidity"></div>
                                        <span>{` ${Math.round(
                                            weatherDataHourly[9].humidity
                                        )} % `}</span>
                                    </div>
                                    <div className="weatherPage-weather-hour-pressure _weather-details ">
                                        <div className="weather-info-icon icon-pressure"></div>
                                        <span>{` ${Math.round(
                                            weatherDataHourly[9].pressure
                                        )} мм `}</span>
                                    </div>
                                    <div className="weatherPage-weather-hour-wind _weather-details ">
                                        <div className="weather-info-icon icon-wind"></div>
                                        <span>{` ${weatherDataHourly[9].wind_speed} км/год`}</span>
                                    </div>
                                    <div className="weatherPage-weather-hour-wind2 _weather-details ">
                                        <div className="weather-info-icon icon-wind2"></div>
                                        <span>{` ${weatherDataHourly[9].wind_gust} км/год`}</span>
                                    </div>
                                </div>
                                <div className="weatherPage-weather-hour">
                                    <h3 className="weatherPage-weather-hour-title">
                                        {formatHours(hourNow + 12)}:{minutesNow}
                                    </h3>
                                    <div className="weatherPage-weather-hour-icon">
                                        <img
                                            src={`http://openweathermap.org/img/w/${weatherDataHourly[12].weather[0].icon}.png`}
                                            alt="weater icon"
                                        />
                                    </div>
                                    <div className="weatherPage-weather-hour-temp _weather-details ">
                                        <div className="weather-info-icon icon-temp"></div>
                                        <span className="_details-temp">
                                            {Math.round(
                                                weatherDataHourly[12].temp
                                            )}
                                        </span>
                                    </div>
                                    <div className="weatherPage-weather-hour-humidity _weather-details ">
                                        <div className="weather-info-icon icon-humidity"></div>
                                        <span>{` ${Math.round(
                                            weatherDataHourly[12].humidity
                                        )} % `}</span>
                                    </div>
                                    <div className="weatherPage-weather-hour-pressure _weather-details ">
                                        <div className="weather-info-icon icon-pressure"></div>
                                        <span>{` ${Math.round(
                                            weatherDataHourly[12].pressure
                                        )} мм `}</span>
                                    </div>
                                    <div className="weatherPage-weather-hour-wind _weather-details ">
                                        <div className="weather-info-icon icon-wind"></div>
                                        <span>{` ${weatherDataHourly[12].wind_speed} км/год`}</span>
                                    </div>
                                    <div className="weatherPage-weather-hour-wind2 _weather-details ">
                                        <div className="weather-info-icon icon-wind2"></div>
                                        <span>{` ${weatherDataHourly[12].wind_gust} км/год`}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default WeatherPageToday;

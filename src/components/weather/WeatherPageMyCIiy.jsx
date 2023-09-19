import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import WeatherPageLayout from '../../layouts/WeatherPageLayout';
//import weaterCitys from '../../data/weatherCitys';

const WeatherPageMyCity = ({ city, citys, setMyCity, day, month }) => {
    const [inputValue, setInputValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const navigate = useNavigate();

    const citysName = citys.map((item) => item.city);

    function changeSearchForm(e) {
        e.preventDefault();
        const newCity = citysName.filter((item) => item === inputValue);
        if (newCity.length > 0) {
            setMyCity(inputValue);
            localStorage.setItem('myCity', JSON.stringify(inputValue));
            navigate(`../${inputValue}/${day}.${month}`, { relative: 'route' });
            setInputValue('');
        } else setInputValue('');
    }
    function changeSearchInput(text) {
        setInputValue(text);
        setSearchResult(searchProjects(citysName, text));
    }

    function SelectMyCity(text) {
        setMyCity(text);
        localStorage.setItem('myCity', JSON.stringify(text));
        navigate(`../${text}/${day}.${month}`, { relative: 'route' });
        setInputValue('');
    }

    function searchProjects(projects, key) {
        //key = key.toLowerCase();
        const searchProjects = [...projects];
        if (!key) return searchProjects;
        //const newArray = searchProjects.map((item) => item.toLowerCase());
        return searchProjects.filter((item) => item.indexOf(key) > -1);
    }

    return (
        <div className="MycityPage">
            <div className="MycityPage-container _container">
                <div className="MycityPage-title">
                    Ваше місто: <span>{city}</span>
                </div>
                {/* <div className="MycityPage-select-block">
                    {weaterCitys.length > 0 && (
                        <select
                            onChange={(e) => SelectMyCity(e.target.value)}
                            placeholder="Обрати інше місто"
                        >
                            <option defaultValue>Обрати інше місто</option>
                            {weaterCitys.map((item) => (
                                <option key={item.id} value={item.city}>
                                    {item.city}
                                </option>
                            ))}
                        </select>
                    )}
                </div> */}
                <div className="section-weather-form">
                    <h3 className="section-weather-form-title">
                        Знайти своє місто:
                    </h3>
                    <form
                        onSubmit={changeSearchForm}
                        className="section-weather-form-form"
                    >
                        <input
                            className="section-weather-form-input"
                            placeholder="Назва міста"
                            value={inputValue}
                            onChange={(e) => changeSearchInput(e.target.value)}
                        />
                        <button
                            className="section-weather-form-button"
                            type="submit"
                        >
                            Знайти
                        </button>
                        <div
                            className={
                                !!inputValue
                                    ? 'section-weather-form-results active'
                                    : 'section-weather-form-results'
                            }
                        >
                            {searchResult.length > 0 ? (
                                searchResult.map((item, index) => (
                                    <button
                                        onClick={() => SelectMyCity(item)}
                                        className="section-weather-form-results-button"
                                        key={index}
                                    >
                                        {item}
                                    </button>
                                ))
                            ) : (
                                <h3 className="section-weather-form-results-text">
                                    Співпадінь не знайдено
                                </h3>
                            )}
                        </div>
                    </form>
                </div>
            </div>
            {
                <WeatherPageLayout
                    day={day}
                    month={month}
                    citys={citys}
                    city={city}
                />
            }
        </div>
    );
};

export default WeatherPageMyCity;

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import WeatherPageLayout from '../../layouts/WeatherPageLayout';
import weaterCitys from '../../data/weatherCitys';

const WeatherPageMyCity = ({ city, citys, setMyCity, day, month }) => {
    const [inputValue, setInputValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const navigate = useNavigate();
    const citysName = citys.map((item) => item.city);

    let resultSearchArray = localStorage.getItem('searchResult')
        ? JSON.parse(localStorage.getItem('searchResult'))
        : [];

    function unique(arr) {
        let result = [];
        for (let str of arr) {
            if (!result.includes(str)) {
                result.push(str);
            }
        }
        return result;
    }

    function changeSearchForm(e) {
        e.preventDefault();
        if (inputValue) {
            const newMyCity = inputValue[0].toUpperCase() + inputValue.slice(1);
            const newCity = citysName.filter((item) => item === newMyCity);
            if (newCity[0]) resultSearchArray.unshift(newCity[0]);

            resultSearchArray = unique(resultSearchArray);
            localStorage.setItem(
                'searchResult',
                JSON.stringify(resultSearchArray)
            );
            if (newCity.length > 0) {
                setMyCity(newMyCity);
                localStorage.setItem('myCity', JSON.stringify(newMyCity));
                navigate(`../${inputValue}/${day}.${month}`, {
                    relative: 'route',
                });
                setInputValue('');
            } else setInputValue('');
        }
    }

    function changeSearchInput(text) {
        setInputValue(text);
        setSearchResult(searchProjects(citysName, text));
    }

    function searchProjects(projects, key) {
        if (key.length > 0) key = key[0].toUpperCase() + key.slice(1);
        const searchProjects = [...projects];
        if (!key) return searchProjects;
        const newArray = searchProjects.map(
            (item) => item[0].toUpperCase() + item.slice(1)
        );
        return newArray.filter((item) => item.indexOf(key) > -1);
    }

    function SelectMyCity(text) {
        text = text[0].toUpperCase() + text.slice(1);
        setMyCity(text);
        localStorage.setItem('myCity', JSON.stringify(text));
        resultSearchArray.unshift(text);
        resultSearchArray = unique(resultSearchArray);
        localStorage.setItem('searchResult', JSON.stringify(resultSearchArray));
        navigate(`../${text}/${day}.${month}`, { relative: 'route' });
        setInputValue('');
    }

    function selectMyCity(text) {
        setMyCity(text);
        localStorage.setItem('myCity', JSON.stringify(text));
        navigate(`../${text}/${day}.${month}`, { relative: 'route' });
        setInputValue('');
    }
    return (
        <div className="MycityPage">
            <div className="MycityPage-container _container">
                <div className="MycityPage-title">
                    Ваше місто: <span>{city}</span>
                </div>
                <div className="MycityPage-select-block">
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
                </div>
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
                                        title={`Погода у місті ${item}`}
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
                    <div className="section-weather-form-search-memory">
                        {resultSearchArray.length > 0 &&
                            resultSearchArray.map((item, index) =>
                                index < 4 ? (
                                    <button
                                        title={`Погода у місті ${item}`}
                                        className="section-weather-form-search-memory-button"
                                        onClick={() => selectMyCity(item)}
                                        key={index}
                                    >
                                        {item}
                                    </button>
                                ) : null
                            )}
                    </div>
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

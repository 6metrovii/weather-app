//import { useState } from 'react';
import WeatherItem from './WeatherItem';

const Weathers = ({ citys, setCitys, changeToggleFaforite, day, month }) => {
    let mainCitys = [];
    citys.forEach((item, index) => (index < 25 ? mainCitys.push(item) : null));

    const SORT_KEYS = [
        ...new Set(
            citys.reduce((arr, obj) => [...arr, ...Object.keys(obj)], [])
        ),
    ];

    function sortProjects(projects, key) {
        const sortedprojects = [...projects];
        if (!key || !SORT_KEYS.includes(key)) return sortedprojects;
        if (key === 'population') {
            sortedprojects.sort((a, b) => (a[key] < b[key] ? 1 : -1));
        } else {
            sortedprojects.sort((a, b) => (a[key] > b[key] ? 1 : -1));
        }
        return sortedprojects;
    }

    function changeSortCitys(text) {
        setCitys(sortProjects(mainCitys, text));
    }
    return (
        <section className="section-weather">
            <div className="section-weather-container _container">
                <div className="section-weather-header">
                    <h2 className="section-weather-title">
                        Погода в містах України
                    </h2>
                    <div className="section-weather-header-actions">
                        <div className="header-filter">
                            <h3 className="header-filter-title">
                                Фільтрувати за:
                            </h3>
                            <select
                                onChange={(e) =>
                                    changeSortCitys(e.target.value)
                                }
                                className="header-filter-select"
                            >
                                <option defaultValue value="population">
                                    К-тю населення
                                </option>
                                <option value="city">Назвою</option>
                            </select>
                            {/* <div className="header-filter-buttons">
                                <button
                                    onClick={() =>
                                        changeSortCitys(citys, 'city')
                                    }
                                    className="header-filter-button"
                                >
                                    Назвою
                                </button>
                                <button
                                    onClick={() =>
                                        changeSortCitys(citys, 'population')
                                    }
                                    className="header-filter-button"
                                >
                                    К-тю населення
                                </button>
                                <button
                                    onClick={() =>
                                        changeSortCitys(citys, 'temp')
                                    }
                                    className="header-filter-button"
                                >
                                    Температурою
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
                {mainCitys.length > 0 && (
                    <>
                        {mainCitys.map((weater, id) =>
                            id < 25 ? (
                                <WeatherItem
                                    day={day}
                                    month={month}
                                    citys={citys}
                                    setCitys={setCitys}
                                    changeToggleFaforite={changeToggleFaforite}
                                    key={weater.id}
                                    {...weater}
                                />
                            ) : null
                        )}
                    </>
                )}
            </div>
        </section>
    );
};

export default Weathers;

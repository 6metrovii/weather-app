import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import weaterCitys from './data/weatherCitys';
import Weathers from './components/weather/Weathers';
import MainLayout from './layouts/MainLayout';
import WeatherPageDetails from './components/weather/WeatherPageDetails';
import WeatherPageToday from './components/weather/WeatherPageToday';
import WeatherPageLayout from './layouts/WeatherPageLayout';
import Header from './components/header/Header';
import WeatherPageFavorite from './components/weather/WeatherPageFavorite';
import WeatherPageMyCity from './components/weather/WeatherPageMyCIiy';
import EmplyPage from './components/weather/EmplyPage';
import NotFound from './components/NotFound/NotFound';
import './App.sass';

const App = () => {
    const [myCity, setMyCity] = useState(
        localStorage.getItem('myCity')
            ? JSON.parse(localStorage.getItem('myCity'))
            : 'Kharkiv'
    );
    const [citys, setCitys] = useState(
        localStorage.getItem('citysWeather')
            ? JSON.parse(localStorage.getItem('citysWeather'))
            : weaterCitys
    );
    const [headerClasses, setHeaderClasses] = useState('header');
    const [appClasses, setAppClasses] = useState('App');

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    day = day < 10 ? ('0' + day).slice(-2) : day;
    month = month < 10 ? ('0' + month).slice(-2) : month;

    useEffect(() => {
        localStorage.setItem('citysWeather', JSON.stringify(citys));
    }, [citys]);
    function changeToggleFaforite(citys, index) {
        citys.forEach((item) =>
            item.id === index
                ? item.isFavorite === false
                    ? (item.isFavorite = true)
                    : (item.isFavorite = false)
                : null
        );
        setCitys([...citys]);
    }

    function openMobileMenu() {
        headerClasses === 'header'
            ? setHeaderClasses('header active')
            : setHeaderClasses('header');
    }
    // Theme
    const saveUserTheme = localStorage.getItem('user-theme');
    let userTheme;

    if (window.matchMedia) {
        userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'App dark'
            : 'App light';
    }
    window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', () => {
            if (!saveUserTheme) changeTheme();
        });

    useEffect(() => {
        saveUserTheme ? setAppClasses(saveUserTheme) : setAppClasses(userTheme);
    }, [saveUserTheme, userTheme]);

    function changeTheme(saveTheme = false) {
        let newTheme;
        appClasses === 'App light'
            ? (newTheme = 'App dark')
            : (newTheme = 'App light');
        setAppClasses(newTheme);
        if (saveTheme) localStorage.setItem('user-theme', newTheme);
    }

    return (
        <BrowserRouter>
            <div className={appClasses}>
                <Header
                    myCity={myCity}
                    headerClasses={headerClasses}
                    openMobileMenu={openMobileMenu}
                    setHeaderClasses={setHeaderClasses}
                    day={day}
                    month={month}
                    changeTheme={changeTheme}
                />
                <Routes>
                    <Route
                        path="/*"
                        element={
                            <NotFound city={myCity} day={day} month={month} />
                        }
                    />
                    <Route path="/" to={<MainLayout city={myCity} />}></Route>
                    <Route
                        index={true}
                        element={
                            <EmplyPage city={myCity} day={day} month={month} />
                        }
                    />
                    <Route
                        path="favorite"
                        element={
                            <WeatherPageFavorite
                                citys={citys}
                                setCitys={setCitys}
                                changeToggleFaforite={changeToggleFaforite}
                                day={day}
                                month={month}
                            />
                        }
                    />
                    <Route
                        path="weathers"
                        element={
                            <Weathers
                                citys={citys}
                                setCitys={setCitys}
                                changeToggleFaforite={changeToggleFaforite}
                                day={day}
                                month={month}
                            />
                        }
                    />
                    <Route
                        path={`/weathers/:slug/`}
                        element={
                            <WeatherPageLayout
                                day={day}
                                month={month}
                                citys={citys}
                            />
                        }
                    >
                        <Route index={true} element={<WeatherPageToday />} />
                        <Route
                            path={`${day}.${month}`}
                            element={<WeatherPageToday />}
                        />
                        <Route
                            path={`${day + 1}.${month}`}
                            element={<WeatherPageDetails />}
                        />
                        <Route
                            path={`${day + 2}.${month}`}
                            element={<WeatherPageDetails />}
                        />
                        <Route
                            path={`${day + 3}.${month}`}
                            element={<WeatherPageDetails />}
                        />
                        <Route
                            path={`${day + 4}.${month}`}
                            element={<WeatherPageDetails />}
                        />
                        <Route
                            path={`${day + 5}.${month}`}
                            element={<WeatherPageDetails />}
                        />
                        <Route
                            path={`${day + 6}.${month}`}
                            element={<WeatherPageDetails />}
                        />
                        <Route
                            path={`${day + 7}.${month}`}
                            element={<WeatherPageDetails />}
                        />
                    </Route>
                    <Route
                        path={`/favorite/:slug/`}
                        element={
                            <WeatherPageLayout
                                day={day}
                                month={month}
                                citys={citys}
                            />
                        }
                    >
                        <Route index={true} element={<WeatherPageToday />} />
                        <Route
                            path={`${day}.${month}`}
                            element={<WeatherPageToday />}
                        />
                        <Route
                            path={`${day + 1}.${month}`}
                            element={<WeatherPageDetails />}
                        />
                        <Route
                            path={`${day + 2}.${month}`}
                            element={<WeatherPageDetails />}
                        />
                        <Route
                            path={`${day + 3}.${month}`}
                            element={<WeatherPageDetails />}
                        />
                        <Route
                            path={`${day + 4}.${month}`}
                            element={<WeatherPageDetails />}
                        />
                        <Route
                            path={`${day + 5}.${month}`}
                            element={<WeatherPageDetails />}
                        />
                        <Route
                            path={`${day + 6}.${month}`}
                            element={<WeatherPageDetails />}
                        />
                        <Route
                            path={`${day + 7}.${month}`}
                            element={<WeatherPageDetails />}
                        />
                    </Route>
                    <Route
                        path={`${myCity}`}
                        element={
                            <WeatherPageMyCity
                                setMyCity={setMyCity}
                                citys={citys}
                                city={myCity}
                                day={day}
                                month={month}
                            />
                        }
                    >
                        <Route
                            index={true}
                            element={<WeatherPageToday city={myCity} />}
                        />
                        <Route
                            path={`${day}.${month}`}
                            element={<WeatherPageToday city={myCity} />}
                        />
                        <Route
                            path={`${day + 1}.${month}`}
                            element={<WeatherPageDetails city={myCity} />}
                        />
                        <Route
                            path={`${day + 2}.${month}`}
                            element={<WeatherPageDetails city={myCity} />}
                        />
                        <Route
                            path={`${day + 3}.${month}`}
                            element={<WeatherPageDetails city={myCity} />}
                        />
                        <Route
                            path={`${day + 4}.${month}`}
                            element={<WeatherPageDetails city={myCity} />}
                        />
                        <Route
                            path={`${day + 5}.${month}`}
                            element={<WeatherPageDetails city={myCity} />}
                        />
                        <Route
                            path={`${day + 6}.${month}`}
                            element={<WeatherPageDetails city={myCity} />}
                        />
                        <Route
                            path={`${day + 7}.${month}`}
                            element={<WeatherPageDetails city={myCity} />}
                        />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
};
export default App;

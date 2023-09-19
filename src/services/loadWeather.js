const loadWeather = async (lat, lng, func, func2) => {
    //const SERVER_API = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=ae37d0f34c22fd9a903d82d1b960b5e6`;
    const SERVER_API2 = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&units=metric&appid=ae37d0f34c22fd9a903d82d1b960b5e6`;
    const response = await fetch(SERVER_API2, {
        method: 'GET',
    });
    const responseResult = await response.json();
    try {
        if (func2) func2(false);
        func(responseResult);
    } catch (error) {
        console.log(error.message);
    }
};

export default loadWeather;

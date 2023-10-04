import { NavLink } from 'react-router-dom';

const WeatherPageMenu = ({ weatherData, day, month }) => {
    const date = new Date();

    function getDayWeek(numb) {
        let dayWeek = date.getDay();
        dayWeek += numb;
        if (dayWeek) {
            if (dayWeek === 1) dayWeek = 'Понеділок';
            if (dayWeek === 2) dayWeek = 'Вівторок';
            if (dayWeek === 3) dayWeek = 'Середа';
            if (dayWeek === 4) dayWeek = 'Четвер';
            if (dayWeek === 5) dayWeek = "П'ятниця";
            if (dayWeek === 6) dayWeek = 'Субота';
            if (dayWeek === 7) dayWeek = 'Неділя';
            if (dayWeek === 8) dayWeek = 'Понеділок';
            if (dayWeek === 9) dayWeek = 'Вівторок';
            if (dayWeek === 10) dayWeek = 'Середа';
            if (dayWeek === 11) dayWeek = 'Четвер';
            if (dayWeek === 12) dayWeek = "П'ятниця";
            if (dayWeek === 13) dayWeek = 'Субота';
            if (dayWeek === 14) dayWeek = 'Неділя';
        }
        return dayWeek;
    }
    return (
        <nav>
            <div className="weatherPage-links">
                <NavLink
                    to={`${day}.${month}`}
                    state={{ data: weatherData?.current }}
                    className="weatherPage-link "
                >
                    Сьогодні
                    <span>
                        {day}.{month}
                    </span>
                </NavLink>
                <NavLink
                    className="weatherPage-link"
                    to={`${day + 1}.${month}`}
                    state={{ data: weatherData?.daily[0] }}
                >
                    завтра
                    <span>
                        {Number(day + 1)}.{month}
                    </span>
                </NavLink>
                <NavLink
                    className="weatherPage-link"
                    to={`${day + 2}.${month}`}
                    state={{ data: weatherData?.daily[1] }}
                >
                    {getDayWeek(2)}
                    <span>
                        {day + 2}.{month}
                    </span>
                </NavLink>
                <NavLink
                    className="weatherPage-link"
                    to={`${day + 3}.${month}`}
                    state={{ data: weatherData?.daily[2] }}
                >
                    {getDayWeek(3)}
                    <span>
                        {day + 3}.{month}
                    </span>
                </NavLink>
                <NavLink
                    className="weatherPage-link"
                    to={`${day + 4}.${month}`}
                    state={{ data: weatherData?.daily[3] }}
                >
                    {getDayWeek(4)}
                    <span>
                        {day + 4}.{month}
                    </span>
                </NavLink>
                <NavLink
                    className="weatherPage-link"
                    to={`${day + 5}.${month}`}
                    state={{ data: weatherData?.daily[4] }}
                >
                    {getDayWeek(5)} <span>{`${day + 5}.${month}`}</span>
                </NavLink>
                <NavLink
                    className="weatherPage-link"
                    to={`${day + 6}.${month}`}
                    state={{ data: weatherData?.daily[5] }}
                >
                    {getDayWeek(6)}
                    <span>
                        {day + 6}.{month}
                    </span>
                </NavLink>
                <NavLink
                    className="weatherPage-link"
                    to={`${day + 7}.${month}`}
                    state={{ data: weatherData?.daily[6] }}
                >
                    {getDayWeek(7)}
                    <span>
                        {day + 7}.{month}
                    </span>
                </NavLink>
            </div>
        </nav>
    );
};

export default WeatherPageMenu;

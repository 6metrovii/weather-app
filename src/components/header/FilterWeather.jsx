import React from 'react';

const FilterWeather = () => {
    return (
        <div className="header-filter">
            <h3 className="header-filter-title">filter by:</h3>
            <div className="header-filter-buttons">
                <button className="header-filter-button">name</button>
                <button className="header-filter-button">peoples</button>
            </div>
        </div>
    );
};

export default FilterWeather;

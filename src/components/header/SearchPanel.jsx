import { useContext, useState } from 'react';
import SearchPanelContext from '../../context/searchPanelContext';
const SearchPanel = () => {
    const { searchInputValue, setSearchInputValue } =
        useContext(SearchPanelContext);
    const [inputValue, setInputValue] = useState(searchInputValue);

    function changeForm(e) {
        e.preventDefault();
        setSearchInputValue(e.target.formInput.value);
        setInputValue('');
    }
    function changeInput(text) {
        setInputValue(text);
    }
    return (
        <form className="header-form" onSubmit={changeForm}>
            <input
                className="header-form-input"
                name="formInput"
                placeholder="search city"
                onChange={(e) => changeInput(e.target.value)}
                value={inputValue}
            ></input>
            <button className="header-form-button" type="submit">
                Search
            </button>
        </form>
    );
};

export default SearchPanel;

import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchFilter = ({onClick, darkMode}) => {
    return <>
    <div className="inputs">
    <div className={`search-input ${darkMode ? 'darkMode' : ''}`}>
    <SearchIcon />
    <input type='text' placeholder='Search for a country...' />
    </div>

    <div className={`select-region ${darkMode ? 'darkMode' : ''}`}>
<select>
    <option value="Filter by region">Filter by Region</option>
    <option value="Africa">Africa</option>
    <option value="America">America</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Oceania">Oceania</option>
</select>
     </div>
    </div>
    </>
}

export default SearchFilter;
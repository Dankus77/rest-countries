import React, {useState, useEffect} from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';

const PageHeader = ({onClick, darkMode}) => {
    return <>
    <div className={`header ${darkMode ? 'darkMode' : ''}`}>
    <div className="header-wrapper">
    <h1 className="query">Where in the world?</h1>
    <div className="toggle-mode" onClick={onClick}>
    <DarkModeIcon />
    <h2 className="darkMode">Dark Mode</h2>
    </div>
    </div>
    </div>
    </>
}

export default PageHeader;
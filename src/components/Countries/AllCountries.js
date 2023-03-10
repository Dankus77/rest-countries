import React, {useState, useEffect} from "react";

const AllCountries = ({darkMode}) => {
     return <>
     <div className={`country ${darkMode ? 'darkMode' : ''}`}>
<div className="flag-box">
    <img src="" alt="" />
</div>

<div className="country-details">
    <h3 className="name">Name: {}</h3>
    <h4 className={`values ${darkMode ? 'darkMode' : ''}`}>Population: {}</h4>
    <h4 className={`values ${darkMode ? 'darkMode' : ''}`}>Region: {}</h4>
    <h4 className={`values ${darkMode ? 'darkMode' : ''}`}>Capital: {}</h4>
</div>
     </div>
     </>
}

export default AllCountries;
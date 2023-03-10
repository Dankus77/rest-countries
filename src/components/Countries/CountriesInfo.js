import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowBack from "@mui/icons-material/ArrowBack";

const CountriesInfo = ({darkMode}) => {
    
return <>
<div className="countryInfo-details">
<button className={`back ${darkMode ? 'darkMode' : ''}`}>
<ArrowBack />
    <p>Go Back</p>
</button>

<div className="countryInfo-details-body">

<div className="img-box">
<img src="" alt="" />
</div>

<div className="info">
<h2>Name</h2>
<div className="info-container">
    <div className="left-info">
    <p>Native Name:{}
    <span className="values">Test</span>
</p>
<p>Population:{}
    <span className={`values ${darkMode ? 'darkMode' : ''}`}>Test</span>
</p>
<p>Region:{}
    <span className={`values ${darkMode ? 'darkMode' : ''}`}>Test</span>
</p>
<p>Sub region:{}
    <span className={`values ${darkMode ? 'darkMode' : ''}`}>Test</span>
</p>
    </div>

    <div className="right-info">
<p>Capital:{}
    <span className={`values ${darkMode ? 'darkMode' : ''}`}>Test</span>
</p>
<p>Top-level Domain:{}
    <span className={`values ${darkMode ? 'darkMode' : ''}`}>Test</span>
</p>
<p>Currencies:{}
    <span className={`values ${darkMode ? 'darkMode' : ''}`}>Test</span>
</p>
<p>Languages:{}
    <span className={`values ${darkMode ? 'darkMode' : ''}`}>Test</span>
</p>

    </div>
</div>

Border Countries:
<div className={`border-country ${darkMode ? 'darkMode' : ''}`}>
<p>Test</p>
</div>
<div className={`border-country ${darkMode ? 'darkMode' : ''}`}>
<p>Test</p>
</div>
<div className={`border-country ${darkMode ? 'darkMode' : ''}`}>
<p>Test</p>
</div>
</div>

</div>
</div>
</>
}

export default CountriesInfo;
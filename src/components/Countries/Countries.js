import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const url = "https://restcountries.com/v2/all";

const Country = () => {

const [countries, setCountries] = useState([]);

useEffect(() =>{
const fetchCountries = async() =>{
const response = await fetch(url);
const countries = await response.json();
setCountries(countries);
}
fetchCountries();
}, [])

const removeCountry = (numericCode) => {
    const newCountry = countries.filter((country) => country.numericCode !== numericCode)
    setCountries(newCountry)
}

return (
<>
<section className="grid">
{countries.map(country => {
const {name, population, region, capital, flag, numericCode} = country;

return <article key={numericCode}>
<img src={flag} alt={name} />
<div className="info">
    <h3>Name: {name}</h3>
    <h4>Population: {population}</h4>
    <h4>Region: {region}</h4>
    <h4>Capital: {capital}</h4> 
    <button className='btn' onClick={()=> removeCountry(numericCode)}>Remove Country</button>
</div>
</article>
})}
</section>
</>
)
}

export default Country;
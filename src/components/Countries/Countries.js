import React, {useState, useEffect} from 'react';

const url = "https://restcountries.com/v2/all";

const Countries = () => {

const [countries, setCountries] = useState([]);

useEffect(() =>{
const fetchCountries = async() =>{
const response = await fetch(url);
const data = await response.json();
setCountries(data);
}
fetchCountries();
}, [])



return (
<>
<section className="grid">
{countries.map(country => {
const {name, population, region, capital, flag, alpha2Code} = country;

return <article key={alpha2Code} className="country-container">
<div className='country-flag'>
<img src={flag} alt={name} />
</div>

<div className="info">
    <h3>Name: {name}</h3>
    <h4>Population: {population}</h4>
    <h4>Region: {region}</h4>
    <h4>Capital: {capital}</h4> 
</div>
</article>
})}
</section>
</>
)
}

export default Countries;
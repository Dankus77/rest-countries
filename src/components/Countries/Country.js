import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import './country.css';

const Country = () => {
    const [country, setCountry] = useState([]);
    const {name} = useParams();

    useEffect(() =>{
        const fetchCountry = async() =>{
            const response = await fetch(`https://restcountries.com/v2/name/${name}`)
            const country = await response.json()
            setCountry(country);
        }
        fetchCountry();
    }, [])

    return (
        <>
    <Link to="/" className='btn btn-ligth'>
        <i className="fas fa-arrow-left"> Back Home</i>
    </Link>
    <section className='country'>{country.filter(item => {
        const {alpha2Code, name, flag, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders } = item;
        return (
            <article key={alpha2Code}>
                <div className='inner'>
                <div className='flag'>
                <img src={flag} alt={name} />
                </div>
                <div className='country-info'>
                <h2>{name}</h2>
                <div>
                <h5>Native Name: {nativeName}</h5>
                <h5>Population: {population}</h5>
                <h5>Region: {region}</h5>
                <h5>Sub Region: {subregion}</h5>
                <h5>Capital: {capital}</h5>
                </div>

                <div>
                <h5>Top Level Domain: {topLevelDomain}</h5>
                <h5>Currencies: {currencies[0].name}</h5>
                <h5>Languages:{languages[0].name}</h5>
                </div>
                </div>

                <div>
                <h3>Border Countries: </h3>
               <div className='borders'>
               {borders.map((border) => {
                   return(
                <ul key={border}>
                    <li>{border}</li>
                </ul>
                   ) 
                })}
               </div>
                </div>
                
                </div>
            </article>
        )
    })}</section>
        </>
    )
}

export default Country;
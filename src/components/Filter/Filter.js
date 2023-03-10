import React, { useEffect } from 'react';

const Filter = ({searchInput, setSearchInput, setFiltered, setCountries, countries}) => {
    
    const regions = [
         {name: "Filter by region", desc: "All"}, {name: "Africa", desc: "Africa"},
        {name: "Americas", desc: "Americas"}, {name: "Asia", desc: "Asia"}, {name: "Europe", desc: "Europe"},
        {name: "Oceania", desc: "Oceania"}
      ]

      const handleSubmit = (e) => {
        e.preventDefault();
      }
    
      const searchCountries = (searchValue) => {
        setSearchInput(searchValue);

        if(searchInput) {
            const filteredCountries = countries.filter((country) => Object.values(country).join("")
            .toLowerCase()
            .includes(searchValue.toLowerCase())
            )
            setFiltered(filteredCountries)
        }else {
            setFiltered(countries)
        }
      }

      const filterRegions = async (region) => {
        const url = `https://restcountries.eu/rest/v2/region/${region}`;
        const response = await fetch(url);
        const data = await response.json();
        setCountries(data)
      }

      useEffect(() =>{
        
        filterRegions()
      }, [])

    return (
    <section className='filter'>
    <form className='search-form' id='form' onSubmit={handleSubmit}>
        <input type="search" name="search" id="search" placeholder='Search for a country...' onChange={(e) => searchCountries(e.target.value)}/>
    </form>

    <div className="selection">
    <select name="select" id="select" className="select" onChange={(e) => filterRegions(e.target.value)} value={regions.name}>
        <option value="Filter by region">Filter by region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
    </select>
        </div>
    
    </section>
    )
}

export default Filter;
import React from 'react';
import './app.css';
import PageHeader from './components/Header/PageHeader';
import SearchFilter from './components/Filter/SearchFilter';
import AllCountries from './components/Countries/AllCountries';
import {Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import CountriesInfo from './components/Countries/CountriesInfo';

function App() {
const [darkMode, setDarkMode] = useState(false);

const switchMode = () => {
  setDarkMode((prevState) => !prevState)
}


  return (
    
      <div className={`app ${darkMode ? 'darkMode' : ''}`}>
        
        <PageHeader onClick={switchMode} darkMode={darkMode}/>
        <Routes>
          <Route exact path='/' element={
            < div className='app-body'>
             <SearchFilter />
             <div className='countries'>
               <AllCountries darkMode={darkMode}/>
             </div>
             </div>
          } />
       <Route path='country-details' element={<CountriesInfo darkMode={darkMode} />} />
        </Routes>
        
      </div>
      
  )
}

export default App;


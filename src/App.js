import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Country from './components/Countries/Country';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Filter />
        <Routes>
        <Route  path="/" element={<Countries />} />
      
        <Route path="/countries/:name" element={<Country />} />
        </Routes>
        
      </>
    </Router>
  )
}

export default App;

// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterDetail from './components/CharacterDetail'; // Adjust the path as needed
import SearchForm from './components/SearchForm ';
import SearchResults from './components/SearchResults ';
import PlanetDetail from './components/PlanetDetail';

const App = () => {
  const [currentApiType, setCurrentApiType] = useState("");
  const [currentApiNumber, setCurrentApiNumber] = useState("");

  const setingTheAPI = (currentApiTypee, currentApiNumberr) => {
    setCurrentApiType(currentApiTypee);
    setCurrentApiNumber(currentApiNumberr);
  }

  return (
    // <Router>
    // </Router>
    <div>
      <nav>
        <SearchForm setingTheAPI={setingTheAPI} />
      </nav>
      <Routes>
        <Route path="/" element={<div>Welcome to the Star Wars API App!</div>} />
        <Route path="/:characterType/:characterId" element={<CharacterDetail currentApiType={currentApiType} currentApiNumber={currentApiNumber} />} />
      </Routes>
    </div>
  );
};

export default App;

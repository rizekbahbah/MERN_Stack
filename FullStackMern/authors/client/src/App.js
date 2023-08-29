import React from 'react';
import {
  Routes,
  Route,
  Link 
} from "react-router-dom";  
import ListAuthor from './components/ListAuthor';
import CreateAuthor from './components/CreateAuthor';
import EditAuthor from './components/EditAuthor';
function App() {
  return (
    <div className="App">
      <h1>Favorite Authors </h1>
      <Routes>
        <Route path="/authors" element={<ListAuthor />} />
        <Route path="/authors/new" element={<CreateAuthor />} />
        <Route path="/authors/:id/edit" element={<EditAuthor />} />
      </Routes>
    </div>
  );
}

export default App;

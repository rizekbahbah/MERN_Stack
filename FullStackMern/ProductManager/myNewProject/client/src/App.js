import React, { useEffect, useState } from 'react';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';
import Detail from './components/Detail';
import Update from './components/Update';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";// Example import for React Router

function App() {
  return (
    <div className="App">
      <h1>hello my friend</h1>
      <Routes>
        <Route path="/" element={<PersonForm/>} />
        <Route element={<Detail/>} path="/people/:id" />
        <Route element={<Update/>} path="/people/:id/edit"/>
      </Routes>
    </div>
  );
}
export default App;


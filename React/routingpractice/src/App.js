import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home'
import NotHome from './components/NotHome'
import ReallyNotHome from './components/ReallyNotHome'

function App() {
  return (
    <div>
      <h1>Routing Example</h1>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:word" element={<NotHome />} />
        <Route path="/:word/:col/:backg" element={<ReallyNotHome />} />
      </Routes>
    </div>
  );
}

export default App


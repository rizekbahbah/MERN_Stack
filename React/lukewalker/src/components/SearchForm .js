// components/SearchForm.js
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const types = [
  "people",
  "planets",
  "starships"
];
const numbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11
];
const SearchForm = (props) => {
  const [selectedTypee, setSelectedTypee] = useState("");
  const [selectedNumberr, setSelectedNumberr] = useState();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    props.setingTheAPI(selectedTypee, selectedNumberr);
    navigate(`/${selectedTypee}/${selectedNumberr}`);


  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select value={selectedTypee} onChange={e => setSelectedTypee(e.target.value)}>
          {types.map((typee, idx) =>
            <option key={idx} value={typee}>{typee}</option>
          )}
        </select>
        <select value={selectedNumberr} onChange={e => setSelectedNumberr(e.target.value)}>
          {numbers.map((numberss, idx) =>
            <option key={idx} value={numberss}>{numberss}</option>
          )}
        </select>
        <button>Stars Fight Begins</button>
      </form>
    </div>
  );
};

export default SearchForm;

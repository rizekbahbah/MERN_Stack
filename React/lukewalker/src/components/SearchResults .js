// src/components/SearchResults.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SearchResults = () => {
  // const { query } = useParams();
  const [results, setResults] = useState([]);

  // useEffect(() => {
  //   // Fetch search results based on the query parameter
  //   // Update the state with fetched results
  //   fetch(`https://swapi.dev/api/people/?search=${query}`)
  //     .then(response => response.json())
  //     .then(data => setResults(data.results))
  //     .catch(error => console.error(error));
  // }, [query]);

  return (
    <div>
    
    </div>
  );
};

export default SearchResults;

import React, { useState } from 'react';
    
const Pokemen = (props) => {
    const [poke, setPoke] = useState([]);
    const Api= () => {
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => {
            // not the actual JSON response body but the entire HTTP response
            return response.json();
        }).then(response => {
            setPoke(response.results)
            
            // we now run another promise to parse the HTTP response into usable JSON
        })
    }
    return (
        
        <div>
            <h1>Hello World !</h1>
            <button onClick={Api}>Press Me!!</button>
            <ul>
            {poke.map( (poke, i) => 
            <li key={ i }>{ poke.name }</li> )}

            {console.log(Api)}
            </ul>
        </div>
    )
}
    
export default Pokemen;

import React , {useState} from 'react';
import axios from 'axios';
    
const AxiosApi = (props) => {
    const [poke, setPoke] = useState([]);

    const Api= () => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
        .then(response => {
            // not the actual JSON response body but the entire HTTP response
            return response;
        }).then(response => {
            setPoke(response.data.results)
            
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
    
export default AxiosApi;

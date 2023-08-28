import React , {useState} from 'react';
import { useParams } from "react-router"; 

    
const ReallyNotHome = (props) => {
    const { backg } = useParams();
    const { col } = useParams();
    const { word } = useParams();
    return (
        <div>
            
        <h1 style={{color: col ,backgroundColor:backg} }>The word is: {word}</h1>
        
        </div>
    )
}
    
export default ReallyNotHome;
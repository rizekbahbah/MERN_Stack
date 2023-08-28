import React , {useState} from 'react';
import { useParams } from "react-router"; 

    
const NotHome = (props) => {
    const { word } = useParams();
    return (
        <div>
            {isNaN(word) ? (
        <h1>The word is: {word}</h1>
        ) : (
        <h1>The input is a number: {word}</h1>
        )}
        </div>
    )
}
    
export default NotHome;
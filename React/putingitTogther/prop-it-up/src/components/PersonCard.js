import React, { useState } from 'react';


const PersonCard = (props) => {

    // const [count , setCount] = useState(props.age);

    // const handleClick = () => setCount(count + 1);


    const [state, setState] = useState({
        clickCount: props.age,
        heighCount: 5
    });
    const incrementAge = () => setState(
        {clickCount:state.clickCount+1,
            heighCount: state.heighCount+1
        });
    return(
        <div>
            <h1 style={{color:"red"}}>{props.lastName}, {props.firstName}</h1>
            <p>Age: {state.clickCount}</p>
            <p>Hair Color: {props.hairColor} {state.heighCount} </p>
            <button onClick={incrementAge}>Birthday Button for {props.firstName}</button>
        </div>
    );}

export default PersonCard;



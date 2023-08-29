import React, { useEffect, useState } from 'react'
import axios from 'axios';
    
const PersonList = (props) => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/people')
            .then(res=>{
                setPeople(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);
    return (
        <div>
            {people.map( (person, i) =>
                <p key={i}>{person.bookTitle}, {person.bookPrice}, {person.bookDescription} </p>
            )}
        </div>
    )
}
    
export default PersonList;


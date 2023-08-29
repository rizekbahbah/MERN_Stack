import React, { useState,useEffect } from 'react'
import axios from 'axios';

import {
  Link 
} from "react-router-dom";
const PersonForm = (props) => {
    
    //keep track of what is being typed via useState hook
    const [bookTitle, setBookTitle] = useState(""); 
    const [bookPrice, setBookPrice] = useState("");
    const [bookDescription, setBookDescription] = useState("");
    
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/people', {
            bookTitle,
            bookPrice,
            bookDescription
        })
            .then(res=>console.log(res))
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 

    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id !== personId));
    }

    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/people')
            .then(res=>{
                setPeople(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[people]);
    const deletePerson = (personId) => {
        axios.delete('http://localhost:8000/api/people/' + personId)
            .then(res => {
                removeFromDom(personId)
            })
            .catch(err => console.error(err));
    }
    //onChange to update firstName and lastName
    return (
        <div>
            <div>

        <form onSubmit={onSubmitHandler}>
        {errors.map((err, index) => <p style={{color: "red"}} key={index}>{err}</p>)}
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setBookTitle(e.target.value)} value={bookTitle}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange={(e)=>setBookPrice(e.target.value)} value={bookPrice}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setBookDescription(e.target.value)} value={bookDescription}/>
            </p>
            <input type="submit"/>
        </form>
            </div>

        <div>
            {loaded && people.map( (person, i) =><h3>

                
                    <Link to={`/people/${person._id}`}><p key={i}>{person.bookTitle}, {person.bookPrice}, {person.bookDescription} </p></Link> 
                    |
                    <button onClick={(e)=>{deletePerson(person._id)}}>Delete</button>
            </h3>
                    
                    
                    
            )}
        </div>
        </div>
    )
}

export default PersonForm;


import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import {
    Routes,
    Route,
    Link 
  } from "react-router-dom";
    
const Detail = (props) => {
    const [person, setPerson] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' +id)
            .then(res => {setPerson(res.data)
            console.log(res)})
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
    <Link to={"/"}>Go Home</Link>
            <p>Title: {person.bookTitle}</p>
            <p>Price: {person.bookPrice}</p>
            <p>Description: {person.bookDescription}</p>
            <Link to={"/people/" + person._id + "/edit"}>
    Edit
</Link>
        </div>
    )
}
    
export default Detail;


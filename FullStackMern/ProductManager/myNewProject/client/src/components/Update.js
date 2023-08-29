import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import {
    Link,
    useNavigate
  } from "react-router-dom";
    
const Update = (props) => {
    const { id } = useParams();
    const [bookTitle, setBookTitle] = useState(""); 
    const [bookPrice, setBookPrice] = useState("");
    const [bookDescription, setBookDescription] = useState("");
    const navigate = useNavigate()
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' + id)
            .then(res => {
                setBookTitle(res.data.bookTitle);
                setBookPrice(res.data.bookPrice);
                setBookDescription(res.data.bookDescription);
            })
    }, [id]);
    
    const updatePerson = e => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/people/' + id, {
            bookTitle,
            bookPrice,
            bookDescription
        })
            .then(res => {navigate('/')})
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <Link to={"/"}>Go Home</Link>
            <h1>Update a Person</h1>
            <form onSubmit={updatePerson}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="bookTitle" 
                    value={bookTitle} 
                    onChange={(e) => { setBookTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number" 
                    name="bookPrice"
                    value={bookPrice} 
                    onChange={(e) => { setBookPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="bookDescription"
                    value={bookDescription} 
                    onChange={(e) => { setBookDescription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
    
export default Update;


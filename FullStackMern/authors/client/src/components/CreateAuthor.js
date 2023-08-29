import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import axios from 'axios';
import {
    Routes,
    Route,
    Link 
  } from "react-router-dom"; 
    
const CreateAuthor = (props) => {
    const [fullName, setFullName] = useState(""); 
    const [errors, setErrors] = useState([]); 
    const navigate = useNavigate();

    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/author', {
            fullName
        })
            .then(res=>{
                console.log(res)
                navigate("/authors");
                })
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
    return (
        <div>
            <Link to={"/authors"}>Home</Link>
            <h2>Add a new Author</h2>
            {errors.map((err, index) => <p style={{ color: "red" }} key={index}>{err}</p>)}
            
            <form onSubmit={onSubmitHandler}>
            <p>
                <label>Full Name</label><br/>
                <input type="text" onChange={(e)=>setFullName(e.target.value)} value={fullName}/>
            </p>

            <input type="submit"/>
            {console.log(errors)}
            </form>
        </div>
    )
}
    
export default CreateAuthor;
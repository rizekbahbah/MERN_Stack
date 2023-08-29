import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import axios from 'axios';
import {
    Routes,
    Route,
    Link 
  } from "react-router-dom"; 
    
const EditAuthor = (props) => {
    const [fullName, setFullName] = useState('');
    const [errors, setErrors] = useState([]); 
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setFullName(res.data.fullName);

                
            })
    }, []);

    const updateAuthor = e => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/author/' + id, {
            fullName
        })
            .then(res => navigate("/authors"))
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
            <h2>Edit an Author</h2>
            {errors.map((err, index) => <p style={{ color: "red" }} key={index}>{err}</p>)}
            <form onSubmit={updateAuthor}>
                <p>
                    <label>Name</label><br />
                    <input type="text" 
                    name="fullName" 
                    value={fullName} 
                    onChange={(e) => { setFullName(e.target.value) }} />
                </p>
                
                <input type="submit" />
            </form>

        </div>
    )
}
    
export default EditAuthor;
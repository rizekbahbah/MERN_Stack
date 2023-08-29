import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import axios from 'axios';

import {
    Routes,
    Route,
    Link 
  } from "react-router-dom"; 
    
const ListAuthor = (props) => {
    const [listAllAuthors, setListAllAuthors] = useState([]);  
    const [loaded, setLoaded] = useState(false);  
    useEffect(()=>{
        axios.get('http://localhost:8000/api/allauthors')
            .then(res=>{
                setListAllAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    const deleteAuthor = (personId) => {
        axios.delete('http://localhost:8000/api/author/' + personId)
            .then(res => {
                console.log("Deleted succefully")
            })
            .catch(err => console.error(err));
    }


    return (
        <div>
            <Link to={"/authors/new"}>Add an Author</Link>

            <h2>We have quotes by:</h2>
            <table>
                <tbody>

                <tr>
                    <th>Author Name</th>
                    <th>Actions Available</th>
                </tr>

            {listAllAuthors.map( (person, i) =>
            <tr key={i}>
                <td >{person.fullName}</td>
                <td ><Link to={"/authors/" + person._id + "/edit"}>Edit</Link> <button onClick={(e)=>{deleteAuthor(person._id)}}>
                    Delete
                    </button> </td>
            </tr>
                
                )}
                </tbody>

                </table>
        </div>
    )
}
    
export default ListAuthor;
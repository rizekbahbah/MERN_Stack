import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [firstError, setFirstError] = useState("");
    const [lastError, setLastError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passError, setPassError] = useState("");
    const [confPassError, setConfPassError] = useState("");
    const handleFirstName = (e) => {
        setFirstName(e.target.value)
        if (e.target.value.length < 1) {
            setFirstError("Name is Required");
        }
        else if (e.target.value.length < 2) {
            setFirstError("Name shoud be More Than 2 Charcters");
        }

        else {
            setFirstError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 1) {
            setLastError("Name is Required");
        }
        else if (e.target.value.length < 2) {
            setLastError("Name shoud be More Than 2 Charcters");
        }

        else {
            setLastError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("Email is Required");
        }
        else if (e.target.value.length < 5) {
            setEmailError("Email shoud be More Than 5 Charcters");
        }

        else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1) {
            setPassError("Password is Required");
        }
        else if (e.target.value.length < 8) {
            setPassError("Password shoud be More Than 8 Charcters");
        }
        else {
            setPassError("");
        }
    }

    const handleConfPassword = (e) => {
        setConfPassword(e.target.value);
        if (e.target.value != password) {
            setConfPassError("Password is not matching");
        }
        else {
            setConfPassError("");
        }
    }

    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();

        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
    };

    return (
        <form onSubmit={createUser}>
            <div>
                <label>First Name: </label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} onChange={handleFirstName} />
                {
                    firstError ?
                        <p>{firstError}</p> :
                        ''
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} onChange={handleLastName} />
                {
                    lastError ?
                        <p>{lastError}</p> :
                        ''
                }
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} onChange={handleEmail} />
                {
                    emailError ?
                        <p>{emailError}</p> :
                        ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} onChange={handlePassword} />
                {
                    passError ?
                        <p> {passError} </p> :
                        ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} onChange={handleConfPassword} /> <br />
                {
                    confPassError ?
                        <p>{confPassError}</p> :
                        ''
                }
                <input type="submit" value="Create User" />
            </div>


            <div>
                <h1>
                    First Name : {firstName}
                </h1>
                <h1>
                    Last Name : {lastName}
                </h1>
                <h1>
                    email : {email}
                </h1>
                <h1>
                    Password : {password}
                </h1>
            </div>
        </form>
    );
};

export default UserForm;
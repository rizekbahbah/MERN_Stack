import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();

        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstName,lastName , email, password };
        console.log("Welcome", newUser);
    };

    return (
        <form onSubmit={createUser}>
            <div>
                <label>First Name: </label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" value="Create User"/>
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
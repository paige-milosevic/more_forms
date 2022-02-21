import React, { useState } from 'react';

const UserForm = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCon, setPasswordCon] = useState("");

    const createUser = (e) => {
        e.preventDefault();

        const newUser = {firstName, lastName, email, password, passwordCon};
        console.log("Welcome", newUser);
    };

    return(
        <form onSubmit={createUser}>
            <div>
                <label>First Name:</label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            { firstName.length < 2 && firstName.length > 0 ? (
                <p>First Name must be at least 2 characters</p>
            ) : null}
            <div>
                <label>Last Name:</label>
                <input type="text" onChange={(e) => setLastName(e.target.value)}/>
            </div>
            { lastName.length < 2 && lastName.length > 0 ? (
                <p>Last Name must be at least 2 characters</p>
            ) : null}
            <div>
                <label>Email:</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            { email.length < 5 && email.length > 0 ? (
                <p>Email must be at least 5 characters</p>
            ) : null}
            <div>
                <label>Password:</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <label>Password Confirmed:</label>
                <input type="password" onChange={(e) => setPasswordCon(e.target.value)}/>
            </div>
            { password !== passwordCon ? (
                <p>Passwords do not match</p>
            ) : null}
            <div>
                <h3>Your Form Data</h3>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Password Confirmed: {passwordCon}</p>
            </div>
        </form>
    )
}
export default UserForm;
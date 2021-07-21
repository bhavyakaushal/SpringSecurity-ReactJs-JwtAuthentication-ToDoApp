import React, {useRef, useState} from 'react'
import AuthService from '../Services/auth.service';

function Register(props) {

    const form = useRef();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };  

    const handleRegister = (e) => {
        e.preventDefault();
        AuthService.register(username, password).then(
            (res) => {
                console.log("Registered succesfully!")
                props.history.push("/login");
                window.location.reload();
            },
            (error) => {
                console.log("Registration failed!");
            }
        )
    }

    return (
        <>
        <div className="full-container">
            <form 
            onSubmit={handleRegister}
            ref={form}
            className="form-container">
                    <h1>Register</h1><br />
                    <label for="username">Username: </label>
                    <input type="username" 
                    placeholder="username"                     
                    value={username}
                    onChange={onChangeUsername}
                    required
                    ></input>
                    <label for="password">Password: </label>
                    <input type="password" 
                    placeholder="password"
                    value={password}
                    onChange={onChangePassword}                    
                    required></input>
                    <button>Register</button>
                    
            </form>
        </div>
            
        </>
    )
}

export default Register

import React, {useRef, useState} from 'react'
import { Link } from 'react-router-dom';
import AuthService from '../Services/auth.service';

function Login(props) {

    const form = useRef();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    }

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    }

    const handleLogin = (e) => {
        e.preventDefault();

        AuthService.login(username, password).then(
            () => {
                props.history.push("/todo");
                window.location.reload();
            },
            (error) => {
                console.log("authentication failed!");
            }
        )
        
    }

    return (
        <>
         <p>If not registered before, please go to <Link to="/register">Register</Link></p>
            <form 
            onSubmit={handleLogin}
            ref={form}
            className="form-container">
                    <h1>Login</h1><br />
                    <label for="username">Username: </label>
                    <input type="username" placeholder="username" 
                    value={username}
                    onChange={onChangeUsername}
                    required></input>
                    <label for="password">Password: </label>
                    <input type="password" placeholder="password"
                    required
                    value={password}
                    onChange={onChangePassword}
                    ></input>
                    <button>Login</button>
            </form>
           
        </>
    )
}

export default Login

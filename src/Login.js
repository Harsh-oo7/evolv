import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {addRole} from './redux/action/index';
import './Login.css';

function Login() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const onLogin = () => {
        if(email === "admin@gmail.com" && password === "admin123")
        {
            let obj = {};
            obj.role="admin";
            obj.email = email;
            obj.password = password;
            dispatch(addRole(obj));
            history.push('/admin');
        }
        else if(email === "user@gmail.com" && password === "user123") {
            let obj = {};
            obj.role="user";
            obj.email = email;
            obj.password = password;
            dispatch(addRole(obj));
            history.push('/');
        } 
        else {
            alert("Please Check Your Email & Password")
        }
        
    }
    return (
        <div className="login">
            <h1>Login</h1>
            <div className="login__first">
                <label htmlFor="email">Enter email : </label>
                <input type="email" id="email" value={email} onChange={event => setEmail(event.target.value)}/>
            </div>
            <div className="login__second">
                <label htmlFor="password">Enter password : </label>
                <input type="password" id="password" value={password} onChange={event => setPassword(event.target.value)}/>
            </div>
            <button type="button" onClick={onLogin}>Login</button>
        </div>
    )
}

export default Login;

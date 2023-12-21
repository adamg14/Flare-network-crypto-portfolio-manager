import React, {useState, useEffect} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm(){

    const [emailInput, setEmailInput] = useState();
    const [password, setPasswordInput] = useState();

    function handleEmailChange(event){
        setEmailInput(event.target.value);
    }

    function handlePasswordChange(event){
        setPasswordInput(event.target.value);
    }

    function handleLoginSubmition(){

    }

    return (
        <div>
            <h1>Log In</h1>
            <form action="/" method="POST">
            <div className="mb-3">
                <label htmlFor="email-input" className="form-label">E-mail</label>
                <input type="email" className="form-control" id="email-input" placeholder="adam@email.com"/>
            </div>
            <div className="mb-3">
                <label htmlFor="password-input" className="form-label">Password</label>
                <input type="password" className="form-control" id="password-input" placeholder="Enter password here - do not share with anyone"/>
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary mb-3">Login In</button>
            </div>
            </form>
            {/* login form response here */}
        </div>
    )
}

export default LoginForm;
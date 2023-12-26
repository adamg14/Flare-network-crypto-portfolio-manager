import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function RegisterForm(){
    const [nameInput, setNameInput] = useState();
    const [emailInput, setEmailInput] = useState();
    const [passwordInput, setPasswordInput] = useState();
    const [successMessage, setSuccessMessage] = useState();
    const [failureMessage, setFailureMessage] = useState();

    function handleNameChange(event){
        setNameInput(event.target.value);
    }

    function handleEmailChange(event){
        setEmailInput(event.target.value);
    }

    function handlePasswordChange(event){
        setPasswordInput(event.target.value);
    }

    function handleClick(){
        console.log("button clicked");

        const postRequestData = {
            name: nameInput,
            email: emailInput,
            password: passwordInput
        };

        axios.post("http://localhost:4000/register", postRequestData).then((registerResponse) => {
            console.log("THIS SHOULD BE THE ANSWER " + registerResponse.data);
            if (registerResponse.data.status === "success"){
                setSuccessMessage(registerResponse.data.message);
                document.getElementById("successAlert").removeAttribute("hidden");
            }else{
                setFailureMessage(registerResponse.data.message);
                document.getElementById("failureAlert").removeAttribute("hidden");
            }
        });


    }

    return(
    <div>
        <h1>Register</h1>
        <form>
            <div className="mb-3">
                <label htmlFor="name-input" className="form-label">Name</label>
                <input type="text" className="form-control" id="name-input" placeholder="Adam" onChange={ handleNameChange }/>
            </div>
            <div className="mb-3">
                <label htmlFor="email-input" className="form-label">E-mail</label>
                <input type="email" className="form-control" id="email-input" placeholder="adam@email.com" onChange={ handleEmailChange }/>
            </div>
            <div className="mb-3">
                <label htmlFor="password-input" className="form-label">Password</label>
                <input type="password" className="form-control" id="password-input" placeholder="Enter password here - do not share with anyone" onChange={ handlePasswordChange }/>
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary mb-3" onClick={ handleClick }>Register</button>
            </div>

            <div id="successAlert" hidden>
                <div className="alert alert-success" role="alert">
                    <p>{ successMessage }</p>
                </div>
            </div>

            <div id="failureAlert" hidden>
                <div className="alert alert-danger" role="alert">
                    <p>{ failureMessage }</p>
                </div>
            </div>
            
        </form>
    </div>
    );
}

export default RegisterForm;
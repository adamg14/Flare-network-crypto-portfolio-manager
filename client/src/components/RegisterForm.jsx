import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function RegisterForm(){
    return(
    <div>
        <h1>Register</h1>
        <form action="/" method="POST">
            <div className="mb-3">
                <label htmlFor="name-input" className="form-label">Name</label>
                <input type="text" className="form-control" id="name-input" placeholder="Adam"/>
            </div>
            <div className="mb-3">
                <label htmlFor="email-input" className="form-label">E-mail</label>
                <input type="email" className="form-control" id="email-input" placeholder="adam@email.com"/>
            </div>
            <div className="mb-3">
                <label htmlFor="password-input" className="form-label">Password</label>
                <input type="password" className="form-control" id="password-input" placeholder="Enter password here - do not share with anyone"/>
            </div>
        </form>
    </div>
    );
}

export default RegisterForm;
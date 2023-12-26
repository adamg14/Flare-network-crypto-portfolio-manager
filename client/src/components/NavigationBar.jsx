import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";
function NavigationBar(){
    return (
        <div>
            <BrowserRouter>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Portfolio Manager</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="/register" className="nav-link">Register</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Add Asset</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/portfolio">View Portfolio</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </BrowserRouter>
        </div>
    )
}
export default NavigationBar;
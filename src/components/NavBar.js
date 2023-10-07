import React from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary" id='navId'>
                    <div className="container-fluid">
                        <a className="navbar-brand" id='logo' href="/home"><img src="/images/logo.png" alt="not found" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/community">Community</a>
                                    
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="./contactus">Contact Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="./login">Login/Signup</Link>
                               
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/search"><span class="material-symbols-outlined">
                                        search
                                    </span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/cart"><span class="material-symbols-outlined">
                                        shopping_cart
                                    </span></a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}


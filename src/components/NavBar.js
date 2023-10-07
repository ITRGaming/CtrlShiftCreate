import React from 'react'
<<<<<<< HEAD
import './NavBar.css';
=======
// import './Navbar.css';
>>>>>>> 0c2c18564856b4208ad71739f554d467bb9c93ec

export default function NavBar() {
    return (
        <>
<<<<<<< HEAD
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg bg-body-tertiary" id='navId'>
                    <div className="container-fluid">
                        <a className="navbar-brand" id='logo' href="/home"><img src="/images/logo.png" alt="not found" /></a>
=======
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary" id='navId'>
                    <div className="container-fluid">
                        <a className="navbar-brand" id='logo' href="/home">CtrlShiftBuy</a>
>>>>>>> 0c2c18564856b4208ad71739f554d467bb9c93ec
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
<<<<<<< HEAD
                                    <a className="nav-link" href="/about">Products</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">About</a>
=======
                                    <a className="nav-link" href="/about">About</a>
>>>>>>> 0c2c18564856b4208ad71739f554d467bb9c93ec
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/login">Login/Signup</a>
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


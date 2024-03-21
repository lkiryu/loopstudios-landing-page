import React from "react";
import logo from "../../images/logo.svg"

import './header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="menu">
                <a href="/">
                    <img src={logo} alt="logo"></img>
                </a>

                <div className="mobile-menu">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

                <nav>
                    <ul className="nav-list">
                        <li className="nav-link">
                            <a href="/">About</a>
                        </li>
                        <li className="nav-link">
                            <a href="/">Careers</a>
                        </li>
                        <li className="nav-link">
                            <a href="/">Events</a>
                        </li>
                        <li className="nav-link">
                            <a href="/">Products</a>
                        </li>
                        <li className="nav-link">
                            <a href="/">Support</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <h1 className="title">Immersive experiences that deliver</h1>
        </header>
    )
}

export default Header
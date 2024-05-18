import React from "react";
import logo from "../../images/logo.svg"
import Links from "../links/links";

import './header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="menu">
                <a href="/">
                    <img src={logo} alt="logo"></img>
                </a>

                <nav>
                    <div className="mobile-menu">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>

                    <Links />
                </nav>
            </div>

            <h1 className="title">Immersive experiences that deliver</h1>
        </header>
    )
}

export default Header
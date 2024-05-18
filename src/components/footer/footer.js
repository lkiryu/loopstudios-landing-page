import React from "react";
import logo from "../../images/logo.svg"
import Links from "../links/links";

import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <a href="/">
                    <img src={logo} alt="logo"></img>
                </a>

                <ul className="social">
                    <li>
                        <a href="/"><i className="fa-brands fa-facebook"></i></a>
                    </li>
                    <li>
                        <a href="/"><i className="fa-brands fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="/"><i className="fa-brands fa-pinterest"></i></a>
                    </li>
                    <li>
                        <a href="/"><i className="fa-brands fa-instagram"></i></a>
                    </li>
                </ul>
            </div>
            <div>
                <Links/>

                <p className="rights">© 2021 Loopstudios. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
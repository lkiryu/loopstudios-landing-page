import React from "react";
import logo from '../images/logo.svg'

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
                <ul>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Careers</a>
                    </li>
                    <li>
                        <a href="/">Events</a>
                    </li>
                    <li>
                        <a href="/">Products</a>
                    </li>
                    <li>
                        <a href="/">Support</a>
                    </li>
                </ul>

                <p className="rights">© 2021 Loopstudios. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
import React from "react";

import './links.css'

const linksData = [
    {
        link: "About",
        href: "/",
    },
    {
        link: "Careers",
        href: "/",
    },
    {
        link: "Events",
        href: "/",
    },
    {
        link: "Products",
        href: "/",
    },
    {
        link: "Support",
        href: "/",
    },
]

const Links = () => {
    return (
        <ul className="links">
            {
                linksData.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item.href}>{item.link}</a>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Links
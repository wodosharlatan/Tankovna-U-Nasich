
import React from "react";
import { IoBeerOutline } from "react-icons/io5";
import "./header.scss";

function Header() {

    // function handleScroll() {
    //     const nav = document.querySelector(".header");
    //     const navHeight = nav.getBoundingClientRect().height;
    //     const scrollHeight = window.pageYOffset;
    //     if (scrollHeight > 200) {
    //         nav.classList.remove("no-bg");
    //     } else {
    //         nav.classList.add("no-bg");
    //     }
    // }

    // window.addEventListener("scroll", handleScroll);

    return (
        <header className="header no-bg">
            <div className="container">

                <a className="navbar-brand" href="/">
                    <h1>
                        Tankovna u našich <IoBeerOutline className="icon" />
                    </h1>
                </a>

                <nav>
                    <ul className="nav-links">
                        <li>
                            <a href="/">Úvod</a>
                        </li>
                        <li>
                            <a href="/about/">O Nás</a>
                        </li>
                        <li>
                            <a href="/menu/">Menu</a>
                        </li>
                    </ul>
                </nav>
                <a href="/#reservation">
                    <button className="reserveButton">Rezervace</button>
                </a>
            </div>

        </header>
    );
}

export default Header;
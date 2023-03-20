
import React from "react";
import { IoBeerOutline } from "react-icons/io5";
import "./header.scss";

function Header() {
    return (
        <header>
            <div className="container">

                <a className="navbar-brand" href="/">
                    <h1>
                        Bar u našich <IoBeerOutline className="icon" />
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
                <a href="/reservation/">
                    <button className="reserveButton">Rezervace</button>
                </a>
            </div>

        </header>
    );
}

export default Header;
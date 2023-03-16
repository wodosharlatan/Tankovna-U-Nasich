import React from "react";
import "../../public/CSS/NavigationStyle.scss";
import { IoBeerOutline } from "react-icons/io5";

function Navigation() {
	return (
		<header>
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
					<li>
						<a href="/contact/">Kontakt</a>
					</li>
				</ul>
			</nav>
			<a href="/reservation/">
				<button className="reserveButton">Rezervace</button>
			</a>
		</header>
	);
}

export default Navigation;
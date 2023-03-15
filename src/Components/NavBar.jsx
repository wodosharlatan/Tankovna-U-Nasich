import React from "react";
import "../../public/CSS/NavigationStyle.css";
import { IoBeerOutline } from "react-icons/io5";

function Navigation() {
	return (
		<header>
			<a class="navbar-brand" href="/">
				<h1>
					Bar u našich <IoBeerOutline class="icon" />
				</h1>
			</a>

			<nav>
				<ul class="nav-links">
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
				<button class="reserveButton">Rezervace</button>
			</a>
		</header>
	);
}

export default Navigation;
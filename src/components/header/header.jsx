import React from "react";
import { IoBeerOutline } from "react-icons/io5";
import "./header.scss";
import "../Button.scss";

// wait till page loads 
setTimeout(() => {
	// check if url contains "/#reservation" then scroll to reservation
	if (window.location.href.includes("/#reservation")) {
		window.scrollTo(0, document.body.scrollHeight);
	}
}, 1000);

function Header() {
	const redirectToReservation = () => {
		window.location.href = "/#reservation";
	};

	const toggleMenu = () => {
		const header = document.querySelector("header");
		header.classList.toggle("active");

		const menuToggle = document.querySelector(".menu-toggle");
		menuToggle.classList.toggle("active");
	};

	return (
		<header className="header no-bg">
			<div className="container">
				<a className="navbar-brand" href="/">
					<h1>
						Tankovna u našich <IoBeerOutline className="icon" />
					</h1>
				</a>

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

				<a className="reservation-btn" onClick={redirectToReservation} href="/#reservation">
					<div className="animationHolder">
						<button>
							<div className="text_index"> Rezervace</div>
							<div className="wave"></div>
						</button>
					</div>
				</a>

				<div className="menu-toggle" onClick={toggleMenu}>
					<label class="menu__btn" for="menu__toggle">
						<span></span>
					</label>
				</div>
			</div>
		</header>
	);
}

export default Header;

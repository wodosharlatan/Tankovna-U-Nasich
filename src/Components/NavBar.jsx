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

{
	/*
				<nav class="navbar navbar-expand-lg custom_nav-container ">
					<a class="navbar-brand" href="/">
						<h1>Bar u našich <IoBeerOutline class="icon" /></h1>
					</a>

					<div class="collapse navbar-collapse">
						<ul class="navbar-nav  mx-auto ">
							<li  >
								<a class="nav-link" href="/">
									Úvod
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/about/">
									O Nás
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/menu/">
									Menu
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/contact/">
									Kontakt
								</a>
							</li>
							<li class="nav-item">
								<a href="/reservation/" class="reserveButton">
									Rezervace
								</a>
							</li>
						</ul>
					</div>
				</nav>
	*/
}

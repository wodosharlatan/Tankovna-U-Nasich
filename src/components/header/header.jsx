import React from 'react';
import { useHistory } from 'react-router-dom';
import { IoBeerOutline } from "react-icons/io5";
import "./header.scss";
import "../Button.scss";

function Header() {

	const history = useHistory();

	const goToReservation = () => {
		history.push("#/reservation");
	};


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

				<a onClick={goToReservation}>
					<div className="animationHolder">
						<button>
							<div className="text_index"> Rezervace</div>
							<div className="wave"></div>
						</button>
					</div>
				</a>
			</div>
		</header>
	);
}

export default Header;

/*
Rezervace
<div class="wave"></div>
</button>
*/

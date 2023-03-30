import React from "react";
import "./menuHome.scss";
import { IoArrowForwardOutline } from "react-icons/io5";

function HomeMenu() {
	return (
		<>
			<div className="welcome">
				<div className="left">
					<img src="https://media.tenor.com/Dc5SGhuskTUAAAAC/old-guy-falling-down-stairs.gif" alt="random" />
				</div>

				<div className="right">
					<h1 className="section__title">Bruh Jsou 2 ráno!</h1>
					<div className="about__text">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consequatur dolores consequuntur alias illum labore, corrupti tempora nostrum quisquam omnis ex, quibusdam sed porro reiciendis, nam magni saepe cupiditate at!
						</p>

						<div className="button_div">
							<button className="welcome_button">
								<a href="/about/"> Zobrazit Nápojový Lístek </a>
								<IoArrowForwardOutline className="icon" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default HomeMenu;

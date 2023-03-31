import React from "react";
import "./menuHome.scss";
import { IoArrowForwardOutline } from "react-icons/io5";

function HomeMenu() {
	return (
		<>
			<div className="homeMenu">
				<div className="left">
					<h1 className="section__title"> Menu MENU (so true(real))!</h1>
					<div className="homeMenu__text">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consequatur dolores consequuntur alias illum labore, corrupti tempora nostrum quisquam omnis ex, quibusdam sed porro reiciendis, nam magni saepe cupiditate at!
						</p>

						<div className="button_div">
							<button className="homeMenu_button">
								<a href="/menu/"> Zobrazit Nápojový Lístek </a>
								<IoArrowForwardOutline className="icon" />
							</button>
						</div>
					</div>
				</div>


				<div className="right">
					<img src="https://media.tenor.com/Dc5SGhuskTUAAAAC/old-guy-falling-down-stairs.gif" alt="random" />
				</div>


			</div>
		</>
	);
}

export default HomeMenu;

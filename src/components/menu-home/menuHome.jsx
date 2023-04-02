import React from "react";
import "./menuHome.scss";
import { IoArrowForwardOutline } from "react-icons/io5";

function HomeMenu() {
	return (
		<>
			<div className="homeMenu">
				<div className="left">
					<h1 className="section__title"> Prozkoumejte naši širokou nabídku nápojů </h1>
					<div className="homeMenu__text">
						<p>
							V Tankovně jsme hrdí na to, že nabízíme širokou škálu nápojů,
							které vyhovují každému vkusu. Ať už jste příznivci kvalitních piv
							nebo tvrdého alkoholu, máme pro vás širokou nabídku nápojů. A co
							je to skvělý nápoj bez dokonalého doplňku? Naše menu je navrženo
							tak, aby zvýraznilo chuť našich nápojů, nabízí malé občerstvení a
							skvělé klobásy, které umocní váš zážitek.
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
					<img src="../Images/Menu.png" alt="menu image" />
				</div>
			</div>
		</>
	);
}

export default HomeMenu;

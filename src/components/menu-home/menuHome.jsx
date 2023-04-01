import React from "react";
import "./menuHome.scss";
import { IoArrowForwardOutline } from "react-icons/io5";

function HomeMenu() {
	return (
		<>
			<div className="homeMenu">
				<div className="left">
					<h1 className="section__title"> Nápojový lístek </h1>
					<div className="homeMenu__text">
						<p>
							Náš bar nabízí široký výběr nápojů, včetně kvalitních piv a
							tvrdého alkoholu. Naše menu je navrženo tak, aby doplňovalo chuť
							našich nápojů, k dispozici je malé občerstvení a sendviče. Ať už
							máte náladu na lehkou plzeň nebo silnou IPA, my vám pomůžeme.
							Nabízíme také různé whisky, rumy, giny a další nápoje podle vašich
							preferencí. Přijďte si k nám užít skvělou noc s přáteli a nechte
							náš zkušený personál doporučit ten ideální drink pro vás.
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
					<img
						src="../Images/Menu.png"
						alt="menu image"
					/>
				</div>
			</div>
		</>
	);
}

export default HomeMenu;

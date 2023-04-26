import React from "react";
import "./HomeComponent.scss";
import Divider from "../divider/svg-divider";
import "../Button.scss";

const HomeComponent = () => {
	return (
		<>
			<div className="landing-page">
				<div className="container">
					<h1>Tankovna U Našich</h1>
					<h2>V Tankovně ochutnáš, popiješ a pochutnáš</h2>

					<div className="CursorHolder">
						<a href="/#reservation">
							<div className="animationHolderHome">
								<button>
									<div className="text_index"> Navštivte nás</div>
									<div className="wave"></div>
								</button>
							</div>
						</a>
					</div>

					<Divider />
				</div>
			</div>
		</>
	);
};

export default HomeComponent;

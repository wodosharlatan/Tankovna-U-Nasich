import React from "react";
import "./HomeComponent.scss";
import Divider from "../divider/svg-divider";

const HomeComponent = () => {
	return (
		<>
			<div className="landing-page">

				<div className="container">
					<h1>Tankovna U Našich</h1>
					<h2>V Tankovně ochutnáš, popiješ a pochutnáš</h2>

					<a href="/#reservation">
						<button>Navštivte nás
						</button>
					</a>

					{/* <p>
					Najděte si svůj dokonalý drink v Tankovně U Našich. Máme řadu
					kvalitních piv a lihovin, které se perfektně hodí k našemu lahodnému
					občerstvení a klobásám. Přijďte si užít naši příjemnou atmosféru. Brzy
					se uvidíme!
				</p> */}
					<Divider />
				</div>
			</div>
		</>
	);
};

export default HomeComponent;

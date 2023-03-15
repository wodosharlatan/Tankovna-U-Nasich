import React from "react";
import Navigation from "./Components/NavBar";
import PageFooter from "./Components/Footer";
import AboutComponent from "./Components/about";
import MenuComponent from "./Components/menu";
import ReservationComponent from "./Components/reservation";

function App() {
	return (
		<div>
			<Navigation />
			<AboutComponent />
			<MenuComponent />
			<ReservationComponent />
			<PageFooter />

		</div>
	);
}

export default App;
 
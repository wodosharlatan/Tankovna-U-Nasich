import React from "react";
import Navigation from "./Components/NavBar";
import PageFooter from "./Components/Footer";
import AboutComponent from "./Components/about";
import MenuComponent from "./Components/menu";
import ReservationComponent from "./Components/reservation";

function App() {
	return (
		<>
			<Navigation />
			<div className="content">
				<AboutComponent />
				<MenuComponent />
				<ReservationComponent />
			</div>
			<PageFooter />
		</>
	);
}

export default App;

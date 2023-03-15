import React from "react";
import ReservationComponent from "../Components/reservation";
import Navigation from "../Components/NavBar";
import PageFooter from "../Components/Footer";

function ReservationApp() {
	return (
		<div>
			<Navigation />
			<ReservationComponent />
			<PageFooter />
		</div>
	);
}

export default ReservationApp;

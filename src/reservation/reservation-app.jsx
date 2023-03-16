import React from "react";
import ReservationComponent from "../Components/reservation";
import Navigation from "../Components/NavBar";
import PageFooter from "../Components/Footer";

function ReservationApp() {
	return (
		<>
			<Navigation />
			<div className="content">
				<ReservationComponent />
			</div>
			<PageFooter />
		</>
	);
}

export default ReservationApp;

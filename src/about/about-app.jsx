import React from "react";
import AboutComponent from "../Components/about";
import Navigation from "../Components/NavBar";
import PageFooter from "../Components/Footer";

function AboutApp() {
	return (
		<>
			<Navigation />
			<div className="content">
				<AboutComponent />
			</div>
			<PageFooter />
		</>
	);
}

export default AboutApp;

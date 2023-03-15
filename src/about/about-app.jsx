import React from "react";
import AboutComponent from "../Components/about";
import Navigation from "../Components/NavBar";
import PageFooter from "../Components/Footer";

function AboutApp() {
	return (
		<div>
			<Navigation />
			<AboutComponent />
            <PageFooter />
		</div>
	);
}

export default AboutApp;

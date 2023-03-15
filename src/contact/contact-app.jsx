import React from "react";
import ContactComponent from "../Components/contact";
import Navigation from "../Components/NavBar";
import PageFooter from "../Components/Footer";

function ContactApp() {
	return (
		<div>
			<Navigation />
			<ContactComponent />
			<PageFooter />
		</div>
	);
}

export default ContactApp;

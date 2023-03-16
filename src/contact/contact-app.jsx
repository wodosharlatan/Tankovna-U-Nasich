import React from "react";
import ContactComponent from "../Components/contact";
import Navigation from "../Components/NavBar";
import PageFooter from "../Components/Footer";

function ContactApp() {
	return (
		<>
			<Navigation />
			<div className="content">
				<ContactComponent />
			</div>
			<PageFooter />
		</>
	);
}

export default ContactApp;

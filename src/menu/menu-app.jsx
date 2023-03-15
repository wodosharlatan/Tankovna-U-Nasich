import React from "react";
import MenuComponent from "../Components/menu";
import Navigation from "../Components/NavBar";
import PageFooter from "../Components/Footer";

function MenuApp() {
	return (
		<div>
			<Navigation />
			<MenuComponent />
			<PageFooter />
		</div>
	);
}

export default MenuApp;

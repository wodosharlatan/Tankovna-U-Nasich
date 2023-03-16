import React from "react";
import MenuComponent from "../Components/menu";
import Navigation from "../Components/NavBar";
import PageFooter from "../Components/Footer";

function MenuApp() {
	return (
		<>
			<Navigation />
			<div className="conetent">
				<MenuComponent />
			</div>
			<PageFooter />
		</>
	);
}

export default MenuApp;

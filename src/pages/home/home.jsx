import "./home.scss";
import Welcome from "../../components/welcome/welcome.jsx";
import HomeMenu from "../../components/menu-home/menuHome.jsx";
import Reservation from "../reservation/reservation";
import HomeComponent from "../../components/HomeComponent/HomeComponent";

const Home = () => {
	return (
		<>
			<div className="container">
				<HomeComponent />
				<hr />
				<Welcome />
				<hr />
				<HomeMenu />
				<hr />
				<Reservation />
			</div>
		</>
	);
};

export default Home;

import "./home.scss";
import Welcome from "../../components/welcome/welcome.jsx";
import HomeMenu from "../../components/menu-home/menuHome.jsx";
import Reservation from "../reservation/reservation";
import HomeComponent from "../../components/HomeComponent/HomeComponent";
import Divider from "../../components/divider/svg-divider";

const Home = () => {
	return (
		<>
			<HomeComponent />
			<Divider/>
			<div className="container">
				<HomeMenu />
				<hr />
				<Welcome />
				<hr />
				<Reservation />
			</div>
		</>
	);
};

export default Home;

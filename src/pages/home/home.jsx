import "./home.scss";
import Welcome from "../../components/welcome/welcome.jsx";
import HomeMenu from "../../components/menu-home/menuHome.jsx";
import Reservation from "../../components/reservation/reservation";
import HomeComponent from "../../components/HomeComponent/HomeComponent";

const Home = () => {
	return (
		<>
			<HomeComponent />
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

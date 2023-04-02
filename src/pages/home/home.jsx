import "./home.scss";
import Welcome from "../../components/welcome/welcome.jsx";
import HomeMenu from "../../components/menu-home/menuHome.jsx";
import Reservation from "../reservation/reservation";
import HomeComponent from "../../components/HomeComponent/HomeComponent";

const Home = () => {
	return (
		<>
			<div className="HomeContainer">
				<HomeComponent />
			</div>
            
			<div className="container">
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

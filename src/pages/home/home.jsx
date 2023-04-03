import "./home.scss";
import Welcome from "../../components/welcome/welcome.jsx";
import HomeMenu from "../../components/menu-home/menuHome.jsx";
import Reservation from "../reservation/reservation";
import HomeComponent from "../../components/HomeComponent/HomeComponent";

const Home = () => {
	return (
		<>
			{/* <div className="test">
				<img src="./Images/ii.png" alt="" />
			</div> */}
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

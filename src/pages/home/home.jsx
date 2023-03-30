import './home.scss';
import Welcome from '../../components/welcome/welcome.jsx'
import HomeMenu from '../../components/menu-home/menuHome.jsx'
import Reservation from '../reservation/reservation';

const Home = () => {
    return (
        <div className="container">
            <h1>Home</h1>
            <Welcome />
            <hr />
            <HomeMenu />
            <hr />
            <Reservation />
        </div>
    );
}

export default Home;

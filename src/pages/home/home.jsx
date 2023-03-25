import './home.scss';
import Welcome from '../../components/welcome/welcome.jsx'
import Menu from '../menu/menu';
import Reservation from '../reservation/reservation';

const Home = () => {
    return (
        <div className="container">
            <h1>Home</h1>
            <Welcome />
            <hr />
            <Menu />
            <hr />
            <Reservation />
        </div>
    );
}

export default Home;
import { Gallery } from "../../components/gallery/GalleryFunction";
import Welcome from "../../components/welcome/welcome";
import "./about.scss";

function About() {
	return (
		<div className="about-page container">
			<Welcome hideBtn />
			<Gallery />
		</div>
	);
}
export default About;


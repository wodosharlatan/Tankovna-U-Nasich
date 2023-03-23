import ImprovedGallery from "../../components/gallery/ImprovedGallery";
import Welcome from "../../components/welcome/welcome";
import "./about.scss";

function About() {
	return (
		<div className="about-page container">
			<Welcome />
			<ImprovedGallery />
		</div>
	);
}
export default About;


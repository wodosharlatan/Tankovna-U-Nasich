import { Gallery } from "../../components/Gallery/Gallery";
import "./about.scss";

function About() {
	const galleryImages = [
		{
			img: "../public/images/0.png",
		},
		{
			img: "../public/images/1.png",
		},
		{
			img: "../public/images/2.png",
		},
		{
			img: "../public/images/3.png",
		},
		{
			img: "../public/images/4.png",
		},
		{
			img: "../public/images/5.png",
		},
		{
			img: "../public/images/6.png",
		},
		{
			img: "../public/images/7.png",
		},
		{
			img: "../public/images/8.png",
		},
		{
			img: "../public/images/9.png",
		},
		{
			img: "../public/images/10.png",
		},
		{
			img: "../public/images/11.png",
		},
		{
			img: "../public/images/12.png",
		},
		{
			img: "../public/images/13.png",
		},
		{
			img: "../public/images/14.png",
		},
		{
			img: "../public/images/15.png",
		},
		{
			img: "../public/images/16.png",
		},
		{
			img: "../public/images/17.png",
		},
		{
			img: "../public/images/18.png",
		},
	];

	return (
		<>
			<div className="container">
				
				<div>
					<Gallery galleryImages={galleryImages} />
				</div>

			</div>
		</>
	);
}

export default About;

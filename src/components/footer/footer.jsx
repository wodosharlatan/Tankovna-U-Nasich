import React from "react";
import "./footer.scss";
import { FaFacebook, FaInstagram } from "react-icons/fa";



function Footer() {

	const text = "info@tankovnaunasich.cz";

	return (
		<footer>
			<div className="container">
				<div className="contact">
					<h1>Kontaktujte Nás</h1>
					<a className="footer-link" href="https://goo.gl/maps/2Nth1NqsFaYZm2eU9" target="_blank" rel="noopener noreferrer">
						Nám. Svobody 20, 506 01 Jičín
					</a>

					<a className="footer-link" href="tel:+420605191896">
						tel: +420 605 191 896
					</a>
					<a className="footer-link" onClick={() => { navigator.clipboard.writeText(text); }}>
						info@tankovnaunasich.cz
					</a>
				</div>

				<div className="socials">
					<h1>Tankovna U Našich</h1>
					<div className="social">
						<a target="_blank" href="https://www.facebook.com/PivniceUNasich">
							<FaFacebook className="FooterIcon" id="FaceBook" />
						</a>
						<a target="_blank" href="https://www.instagram.com/tankovnaunasich/?hl=cs">
							<FaInstagram className="FooterIcon" id="Instagram" />
						</a>
					</div>
					<h6 className="CopyrightDiv" >
						<a className="copyright" target="_blank" href="https://github.com/wodosharlatan"> &copy; All rights reserverd {new Date().getFullYear()} | Tomáš Bosák</a>
						<a className="copyright" target="_blank" href="https://www.matejmichalek.com/"> & Matěj Michálek &copy;</a>
					</h6>
				</div>

				<div className="time">
					<h1>Otevírací Doba</h1>
					<a className="footer-desc">
						Neděle - Čtvrtek <br /> 15:00 - 1:00h <br />
						Pátek - Sobota <br /> 15:00- 3:00h
					</a>
				</div>
			</div>
		</footer>
	);
}


export default Footer;

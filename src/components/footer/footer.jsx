import React from "react";
import "./footer.scss";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {


	return (
		<footer>
			<div className="container">
				<div>
					<h1>Kontaktujte Nás</h1>
					<div>
						<a className="footer-link" href="https://goo.gl/maps/2Nth1NqsFaYZm2eU9" target="_blank" rel="noopener noreferrer">
							Nám. Svobody 20, 506 01 Jičín
						</a>

						<a className="footer-link" href="tel:+420605191896">
							tel: +420 605 191 896
						</a>
						<a className="footer-link" href="info@tankovnaunasich.cz">
							info@tankovnaunasich.cz
						</a>
					</div>
				</div>

				<div>
					<h1>Tankovna U Našich</h1>
					<div className="social">
						<a href="">
							<FaFacebook className="FooterIcon" id="FaceBook" />
						</a>
						<a href="">
							<FaLinkedin className="FooterIcon" id="LinkedIn"/>
						</a>
						<a href="">
							<FaInstagram className="FooterIcon"  id="Instagram" />
						</a>
					</div>
					<h6 >
						<a className="copyright" target="_blank" href="https://bosic.xyz/"> &copy; Copyright {new Date().getFullYear()}, Tomáš Bosák</a>
						<a className="copyright" target="_blank" href="https://www.matejmichalek.com/"> & Matěj Michálek &copy;</a>
					</h6>
				</div>

				<div>
					<h1>Otevírací Doba</h1>
					<a className="footer-desc">
						Neděle - Čtvrtek <br /> 15:00 - 1:00h <br />
						Patek - Sobota <br /> 15:00- 3:00h
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

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
						<a className="footer-link">
							<span>Nám. Svobody 20, 506 01 Jičín</span>
						</a>
						<a className="footer-link">
							<span>tel: +420 605 191 896</span>
						</a>
						<a className="footer-link">
							<span>info@tankovnaunasich.cz</span>
						</a>
					</div>
				</div>

				<div>
					<h1>Tankovna U Našich</h1>
					<div className="social">
						<a href="">
							<FaFacebook className="FooterIcon" />
						</a>
						<a href="">
							<FaLinkedin className="FooterIcon" />
						</a>
						<a href="">
							<FaInstagram className="FooterIcon" />
						</a>
					</div>
					<h6 >
					<a className="copyright" target="_blank" href="https://bosic.xyz/"> &copy; Copyright {new Date().getFullYear()}, Tomáš Bosák</a>
					<a className="copyright" target="_blank"  href="https://www.matejmichalek.com/"> & Matěj Michálek &copy;</a>
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

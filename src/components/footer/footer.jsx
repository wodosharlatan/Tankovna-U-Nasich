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
							<span>[ ADRESA ]</span>
						</a>
						<a className="footer-link">
							<span>[ CISLO ]</span>
						</a>
						<a className="footer-link">
							<span>[ EMAIL ] </span>
						</a>
					</div>
				</div>

				<div>
					<h1>Bar U Našich</h1>
					<p className="footer-desc">[Popis Naseho Baru]</p>
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

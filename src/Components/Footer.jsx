import React from "react";
import "../../public/CSS/FooterStyle.scss";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

function PageFooter() {
	return (
		<footer>
			<div>
				<h1>Kontaktujte Nás</h1>
				<div>
					<a className="footer-link" href="">
						<span>Kde Jsme ?</span>
					</a>
					<a className="footer-link" href="">
						<span>Zavolejte nám</span>
					</a>
					<a className="footer-link" href="">
						<span>Emailová Adresa </span>
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
				<h1>Otevirací Doba</h1>
				<a className="footer-desc">
					Neděle - Čtvrtek <br /> 15:00 - 1:00h <br />
					Patek - Sobota <br /> 15:00- 3:00h
				</a>
			</div>
		</footer>
	);
}

export default PageFooter;

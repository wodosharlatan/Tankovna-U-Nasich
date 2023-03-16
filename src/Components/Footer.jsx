import React from "react";
import "../../public/CSS/FooterStyle.css";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

function PageFooter() {
	return (
		<footer>
			<div>
				<h1>Kontaktujte Nás</h1>
				<div>
					<a class="footer-link" href="">
						<span>Kde Jsme ?</span>
					</a>
					<a class="footer-link" href="">
						<span>Zavolejte nám</span>
					</a>
					<a class="footer-link" href="">
						<span>Emailová Adresa </span>
					</a>
				</div>
			</div>

			<div>
				<h1>Bar U Našich</h1>
				<p class="footer-desc">[Popis Naseho Baru]</p>
				<div class="social">
					<a href="">
						<FaFacebook class="FooterIcon" />
					</a>
					<a href="">
						<FaLinkedin class="FooterIcon" />
					</a>
					<a href="">
						<FaInstagram class="FooterIcon" />
					</a>
				</div>
			</div>

			<div>
				<h1>Otevirací Doba</h1>
				<a class="footer-desc">
					Neděle - Čtvrtek <br /> 15:00 - 1:00h <br />
					Patek - Sobota <br /> 15:00- 3:00h
				</a>
			</div>
		</footer>
	);
}

export default PageFooter;

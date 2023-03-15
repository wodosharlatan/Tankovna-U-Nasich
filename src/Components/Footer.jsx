import React from "react";
import "../../public/CSS/FooterStyle.css";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

function PageFooter() {
	return (
		<footer>
			<div>
				<h4>Kontaktujte Nas</h4>
				<div>
					<a class="footer-link" href="">
						<span>Kde Jsme ?</span>
					</a>
					<a class="footer-link" href="">
						<span>Zavolejte nám</span>
					</a>
					<a class="footer-link" href="">
						<span>Emailova Adresa</span>
					</a>
				</div>
			</div>

			<div>
				<a href="" class="footer-link">
					<span>Bar U nasich</span>
				</a>
				<p>[Popis Naseho Baru]</p>
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
				<h4>Oteviraci Doba</h4>
				<a>
					Neděle - Čtvrtek <br /> 15:00 - 1:00h <br />
					Patek - Sobota <br /> 15:00- 3:00h
				</a>
			</div>
		</footer>
	);
}

export default PageFooter;

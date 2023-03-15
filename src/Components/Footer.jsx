import React from "react";
import "../../public/CSS/FooterStyle.css";


function PageFooter() {
	return (
		<footer class="footer_section">
			<div class="container">
				<div class="row">
					<div class="col-md-4 footer-col">
						<div class="footer_contact">
							<h4>Kontaktujte Nas</h4>
							<div class="contact_link_box">
								<a href="">
									<i class="fa fa-map-marker" aria-hidden="true"></i>
									<span>Kde Jsme ?</span>
								</a>
								<a href="">
									<i class="fa fa-phone" aria-hidden="true"></i>
									<span>Zavolejte nám</span>
								</a>
								<a href="">
									<i class="fa fa-envelope" aria-hidden="true"></i>
									<span>Emailova Adresa</span>
								</a>
							</div>
						</div>
					</div>
					<div class="col-md-4 footer-col">
						<div class="footer_detail">
							<a href="" class="footer-logo">
								Bar U nasich
							</a>
							<p>[Popis Naseho Baru]</p>
							<div class="footer_social">
								<a href="">
									<i class="fa fa-facebook" aria-hidden="true"></i>
								</a>
								<a href="">
									<i class="fa fa-linkedin" aria-hidden="true"></i>
								</a>
								<a href="">
									<i class="fa fa-instagram" aria-hidden="true"></i>
								</a>
							</div>
						</div>
					</div>
					<div class="col-md-4 footer-col">
						<h4>Oteviraci Doba</h4>
						<a>
							Neděle - Čtvrtek <br /> 15:00 - 1:00h <br />
							Patek - Sobota <br /> 15:00- 3:00h
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default PageFooter;

import React from "react";

function Navigation() {
	return (
		<header class="header_section nav-container">
			<div class="container">
				<nav class="navbar navbar-expand-lg custom_nav-container ">
					<a class="navbar-brand" href="#">
						<span>Bar u nasich</span>
					</a>

					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav  mx-auto ">
							<li class="nav-item active">
								<a class="nav-link" href="#">
									Úvod
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/about/">
									O Nás
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/menu/">
									Menu
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/contact/">
									Kontakt
								</a>
							</li>

							<div class="user_option">
								<a href="/reservation/" class="order_online">
									Rezervace
								</a>
							</div>
						</ul>
					</div>
				</nav>
			</div>
		</header>
	);
}

export default Navigation;

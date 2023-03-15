import React from "react";

function ReservationComponent() {
	return (
		<section class="book_section section-padding_top layout_padding">
			<div class="container">
				<div class="heading_container">
					<h2>Zarezervujte si stůl</h2>
				</div>
				<div class="row">
					<div class="col-md-6">
						<div class="form_container">
							<form action="">
								<div>
									<input type="text" class="form-control" placeholder="Jmeno" />
								</div>
								<div>
									<input
										type="text"
										class="form-control"
										placeholder="Telefoni Cislo"
									/>
								</div>
								<div>
									<input
										type="email"
										class="form-control"
										placeholder="E-mail"
									/>
								</div>
								<div>
									<select class="form-control nice-select wide">
										<option value="" disabled selected>
											Pocet Osob
										</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
									</select>
								</div>
								<div>
									<input type="date" class="form-control" />
								</div>
								<div class="btn_box">
									<button>Zarezervovat</button>
								</div>
							</form>
						</div>
					</div>
					<div class="col-md-6">
						<div class="map_container ">
							<iframe
								class="GoogleMap"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158.83019573268277!2d15.349080607340237!3d50.435826700000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470ea472f2bca589%3A0x934e2a7b8dfb4670!2sTankovna%20U%20Na%C5%A1ich!5e0!3m2!1scs!2scz!4v1675204851544!5m2!1scs!2scz"
								allowfullscreen=""
								loading="lazy"
								referrerpolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ReservationComponent;

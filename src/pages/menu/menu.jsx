import { React, useState, useEffect } from "react";
import "./menu.scss";

const Menu = () => {

	// load alcohol products
	const [pr, setPr] = useState([]);

	useEffect(() => {
		fetch("./alcoholic.json")
			.then((response) => response.json())
			.then((data) => setPr(data));
	}, []);

	useEffect(() => {
		fetch("./non-alcoholic.json")
			.then((response) => response.json())
			.then((data) => setPr(data));
	}, []);

	
	useEffect(() => {
		fetch("./other.json")
			.then((response) => response.json())
			.then((data) => setPr(data));
	}, []);
	




	return (
		<>
			<button>Alkoholické Nápoje</button>
			<button>Nealkoholické Nápoje</button>
			<button>Pochutiny</button>

			<div className="container">
				{pr.map((sectionProduct, index) => {
					return (
						<div className="menu_section" key={index}>
							<div className="section__title-menu">
								<h1>{sectionProduct.name}</h1>
							</div>

							<ul className="menu-list">
								{sectionProduct.products.map((product, index) => {
									return (
										<li className="menu-item" key={index}>
											<div className="menu-product">
												<h3 className="menu-product-name">
													{product.name}
													{product.description && (
														<span className="menu-description">
															- {product.description}
														</span>
													)}
												</h3>
											</div>

											<p className="menu-price">{product.price}</p>
										</li>
									);
								})}
							</ul>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Menu;

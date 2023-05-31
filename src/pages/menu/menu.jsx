import { React, useState, useEffect } from "react";
import "./menu.scss";
import { json } from "react-router-dom";

let alcohol = [];
	let other = [];
	let non_alcoholic = [];
	
const Menu = () => {

	// load alcohol products
	const [pr, setPr] = useState([]);

	

	useEffect(() => {
		fetch("../alcoholic.json")
			.then((response) => response.json())
			.then((data) => { alcohol = [...data] });
	}, []);

	useEffect(() => {
		fetch("../non-alcoholic.json")
			.then((response) => response.json())
			.then((data) => { non_alcoholic = [...data]});
	}, []);


	useEffect(() => {
		fetch("../other.json")
			.then((response) => response.json())
			.then((data) => { other = [...data] });
	}, []);


	function HandleJSONrender(json) {
		console.log(json);

		setPr([...json]);
	}



	return (
		<>
			<button onClick={() => { HandleJSONrender(alcohol) }} 	>Alkoholické Nápoje</button>
			<button onClick={() => { HandleJSONrender(non_alcoholic) }}  	>Nealkoholické Nápoje</button>
			<button onClick={() => { HandleJSONrender(other) }}  	>Pochutiny</button>

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

import "./menu.scss";

const pr = [
	{
		name: "nealkoholické nápoje",
		products: [
			{
				name: "Classic Coca-Cola",
				description: "0,5l",
				price: "50Kč",
			},
			{
				name: "Limonáda",
				description: "1l",
				price: "50Kč",
			},
			{
				name: "Sprite",
				description: "0,5l",
				price: "50Kč",
			},
			{
				name: "Fanta",
				description: "0,5l",
				price: "50Kč",
			},
		],
	},
	{
		name: "alkohol",
		products: [
			{
				name: "Pivo",
				description: "0,5l",
				price: "50Kč",
			},
			{
				name: "Rum",
				description: "0,04l",
				price: "50Kč",
			},
			{
				name: "Vodka",
				description: "0,04l",
				price: "50Kč",
			},
		],
	},
	{
		name: "pochutiny",
		products: [
			{
				name: "Utopenci",
				description: "150g",
				price: "50Kč",
			},
		],
	},
];

const Menu = () => {
	return (
		<>
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
										<>
											<li className="menu-item" key={index}>
												<div>
													<h3>{product.name}</h3>
													<p className="menu-description">
														{product.description}
													</p>
												</div>

												<p className="menu-price">{product.price}</p>
											</li>
										</>
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

import "./menu.scss";

const pr = [
	{
		name: "nealkoholické nápoje",
		products: [
			{
				name: "Classic Coca-Cola",
				description: "Refreshing and bubbly",
				price: "50Kč"
			},
			{
				name: "Limonáda",
				description: "Refreshing and bubbly",
				price: "50Kč"
			},
			{
				name: "Sprite",
				description: "Refreshing and bubbly",
				price: "50Kč"
			},
			{
				name: "Fanta",
				description: "Refreshing and bubbly",
				price: "50Kč"
			},

		]
	},
	{
		name: "alkohol",
		products: [
			{
				name: "Pivo",
				description: "Refreshing and bubbly",
				price: "50Kč"
			},
			{
				name: "Rum",
				description: "Refreshing and bubbly",
				price: "50Kč"
			},
			{
				name: "Vodka",
				description: "Refreshing and bubbly",
				price: "50Kč"
			},

		]
	},
	{
		name: "pochutiny",
		products: [
			{
				name: "Utopenci",
				description: "Refreshing and bubbly",
				price: "50Kč"
			},
		]
	}
]

const Menu = () => {
	return (
		<>
			<div className="container">
				{
					pr.map((sectionProduct, index) => {
						return (
							<div className="menu_section" key={index}>
								<div className="section__title-menu" >
									<h1>{sectionProduct.name}</h1>
								</div>

								<ul className="menu-list">
									{sectionProduct.products.map((product, index) => {
										return (
											<li className="menu-item" key={index}>
												<h3>{product.name}</h3>
												<p className="menu-description">{product.description}</p>
												<p className="menu-price">{product.price}</p>
											</li>
										)
									})}
								</ul>
							</div>

						);
					})
				}



			</div>
		</>
	);
};

export default Menu;

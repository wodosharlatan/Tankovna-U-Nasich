import "./menu.scss";

const pr = [
	{
		name: "Tennessee Whiskey",
		products: [
			{
				name: "Jack Daniel's",
				description: "4cl",
				price: "82Kč",
			},
			{
				name: "Jack Daniel's Honey",
				description: "4cl",
				price: "82Kč",
			},
			{
				name: "Jack Daniel's Fire",
				description: "4cl",
				price: "82Kč",
			},
			{
				name: "Jack Daniel's Apple",
				description: "4cl",
				price: "82Kč",
			},
			{
				name: "Jack Daniel's Gentleman Jack",
				description: "4cl",
				price: "102Kč",
			},
			{
				name: "Jack Daniel's Single Barrel",
				description: "4cl",
				price: "124Kč",
			},
		],
	},
	{
		name: "Whiskey A Bourbon",
		products: [
			{
				name: "Jim Beam",
				description: "4cl",
				price: "58Kč",
			},
			{
				name: "Jameson",
				description: "4cl",
				price: "68Kč",
			},
			{
				name: "Vodka",
				description: "4cl",
				price: "64Kč",
			},
			{
				name: "Benriach 10 y.o.",
				description: "4cl",
				price: "130Kč",
			},
			{
				name: "GlenDronach 12 y.o.",
				description: "4cl",
				price: "140Kč",
			},
		],
	},
	{
		name: "Brandy A Cognac",
		products: [
			{
				name: "Metaxa 5*",
				description: "4cl",
				price: "54Kč",
			},
		],
	},
	{
		name: "Vodka",
		products: [
			{
				name: "Finlandia Vodka",
				description: "4cl",
				price: "50Kč",
			},
			{
				name: "Finlandia Kokos",
				description: "4cl",
				price: "50Kč",
			},
			{
				name: "Finlandia Brusinka",
				description: "4cl",
				price: "50Kč",
			},
			{
				name: "Finlandia Grapefruit",
				description: "4cl",
				price: "50Kč",
			},
			{
				name: "Božkov Vodka",
				description: "4cl",
				price: "38Kč",
			},
			{
				name: "Amundsen Ochucený [dle nabídky]",
				description: "4cl",
				price: "42Kč",
			},
			{
				name: "Amundsen",
				description: "4cl",
				price: "46Kč",
			},
			{
				name: "Nemiroff Vodka",
				description: "4cl",
				price: "44Kč",
			},
		],
	},
	{
		name: "Tequila A Mezcal",
		products: [
			{
				name: "Pepe Lopez Silver",
				description: "4cl",
				price: "54Kč",
			},
			{
				name: "Pepe Lopez Gold",
				description: "4cl",
				price: "54Kč",
			},
			{
				name: "El Jimador Blanco",
				description: "4cl",
				price: "74Kč",
			},
			{
				name: "El Jimador Reposado",
				description: "4cl",
				price: "74Kč",
			},
		],
	},
	{
		name: "Gin",
		products: [
			{
				name: "Gordon's Dry Gin",
				description: "4cl",
				price: "56Kč",
			},
			{
				name: "Gordon's Pink Gin",
				description: "4cl",
				price: "54Kč",
			},
			{
				name: "Bombay Sapphire",
				description: "4cl",
				price: "74Kč",
			},
		],
	},
	{
		name: "Rum A Tuzemák & Cachaca",
		products: [
			{
				name: "Che Guevara",
				description: "4cl",
				price: "44Kč",
			},
			{
				name: "Captain Morgan Spiced Gold",
				description: "4cl",
				price: "52Kč",
			},
			{
				name: "Bacardi Carta Blanca",
				description: "4cl",
				price: "56Kč",
			},
			{
				name: "Božkov Republika",
				description: "4cl",
				price: "62Kč",
			},
			{
				name: "Heffron",
				description: "4cl",
				price: "62Kč",
			},
			{
				name: "Bandita Originál",
				description: "4cl",
				price: "62Kč",
			},
			{
				name: "Kakadu",
				description: "4cl",
				price: "78Kč",
			},
			{
				name: "Cappitan Bucanero",
				description: "4cl",
				price: "78Kč",
			},
			{
				name: "Legendario Elixir de Cuba",
				description: "4cl",
				price: "78Kč",
			},
			{
				name: "Bandita Black",
				description: "4cl",
				price: "76Kč",
			},
			{
				name: "Plantation Grande Reserva",
				description: "4cl",
				price: "86Kč",
			},
			{
				name: "Kraken Black Spiced",
				description: "4cl",
				price: "88Kč",
			},
			{
				name: "Diplomatico Mantuano Venezuela",
				description: "4cl",
				price: "100Kč",
			},
			{
				name: "Pamepero Aniversario",
				description: "4cl",
				price: "104Kč",
			},
			{
				name: "Pyrat",
				description: "4cl",
				price: "110Kč",
			},
			{
				name: "Diplmatico Planas",
				description: "4cl",
				price: "118Kč",
			},
			{
				name: "Diplomatico Reserva 12",
				description: "4cl",
				price: "128Kč",
			},
			{
				name: "Don Papa",
				description: "4cl",
				price: "128Kč",
			},
			{
				name: "Zapa Centario 23",
				description: "4cl",
				price: "130Kč",
			},
			{
				name: "Abuelo 12 Años",
				description: "4cl",
				price: "126Kč",
			},
			{
				name: "La Hechicera",
				description: "4cl",
				price: "170Kč",
			},
		],
	},
	{
		name: "Likéry",
		products: [
			{
				name: "Božkov Vaječný",
				description: "4cl",
				price: "38Kč",
			},
			{
				name: "Božkov Griotte",
				description: "4cl",
				price: "38Kč",
			},
			{
				name: "Božkov Peprmint",
				description: "4cl",
				price: "38Kč",
			},
			{
				name: "Bartida Zelená",
				description: "4cl",
				price: "34Kč",
			},
			{
				name: "Bartida Griotka",
				description: "4cl",
				price: "34Kč",
			},
			{
				name: "Bartida Vaječňák",
				description: "4cl",
				price: "38Kč",
			},
			{
				name: "Malibu",
				description: "4cl",
				price: "46Kč",
			},
			{
				name: "Baileys",
				description: "4cl",
				price: "62Kč",
			},
			{
				name: "Souther Comfort",
				description: "4cl",
				price: "70Kč",
			},
		],
	},
	{
		name: "Likéry Bylinné",
		products: [
			{
				name: "Fernet Stock",
				description: "4cl",
				price: "44Kč",
			},
			{
				name: "Feret Stock Citrus",
				description: "4cl",
				price: "44Kč",
			},
			{
				name: "Becherovka",
				description: "4cl",
				price: "46Kč",
			},
			{
				name: "Jägermeister",
				description: "4cl",
				price: "62Kč",
			},
		],
	},
	{
		name: "Ostatní Lihoviny / Destiláty",
		products: [
			{
				name: "Božkov Tuzemský",
				description: "4cl",
				price: "40Kč",
			},
			{
				name: "Božkov Kávový",
				description: "4cl",
				price: "42Kč",
			},
			{
				name: "Božkov Mandlový",
				description: "4cl",
				price: "42Kč",
			},
			{
				name: "Božkov Mangový",
				description: "4cl",
				price: "62Kč",
			},
			{
				name: "Božkov Bílý",
				description: "4cl",
				price: "42Kč",
			},
			{
				name: "Malinovice R.Jelínek",
				description: "4cl",
				price: "42Kč",
			},
			{
				name: "Hruškovice R.Jelínek",
				description: "4cl",
				price: "42Kč",
			},
			{
				name: "Slivovice R.Jelínek",
				description: "4cl",
				price: "42Kč",
			},
			{
				name: "Absinth",
				description: "4cl",
				price: "74Kč",
			},
			{
				name: "Bartida Tuzemský",
				description: "4cl",
				price: "38Kč",
			},
		],
	},
	{
		name: "Drinky",
		products: [
			{
				name: "Summer Spritz",
				description: "0,3l",
				price: "128Kč",
			},
			{
				name: "Kozičky",
				description: "0,24l",
				price: "80Kč",
			},
			{
				name: "Huggo Secco",
				description: "0,34l",
				price: "98Kč",
			},
			{
				name: "Tom Cllins",
				description: "0,24l",
				price: "104Kč",
			},
			{
				name: "Bellini",
				description: "0,3l",
				price: "98Kč",
			},
			{
				name: "Chupito",
				description: "4cl",
				price: "56Kč",
			},
			{
				name: "Chupito Italiano",
				description: "4cl",
				price: "56Kč",
			},
		],
	},
	{
		name: "Nealkoholické Nápoje",
		products: [
			{
				name: "Pepsi",
				description: "0,25l",
				price: "40Kč",
			},
			{
				name: "Tonic Schweppes",
				description: "0,25l",
				price: "40Kč",
			},
			{
				name: "Tonic Schweppes Zázvor",
				description: "0,25l",
				price: "40Kč",
			},
			{
				name: "Tonic Schweppes Pink",
				description: "0,25l",
				price: "40Kč",
			},
			{
				name: "Mattoni jemně perlivá, perlivá, neperlivá",
				description: "0,33l",
				price: "34Kč",
			},
			{
				name: "Kofola Točená",
				description: "0,1l",
				price: "10Kč",
			},
			{
				name: "Džus [dle aktuální nabídky]",
				description: "0,1l",
				price: "18Kč",
			},
			{
				name: "Voda z kohoutku",
				description: "0,3l",
				price: "15Kč",
			},
			{
				name: "Voda z kohoutku",
				description: "0,5l",
				price: "20Kč",
			},
			{
				name: "Pepsi",
				description: "0,1l",
				price: "18Kč",
			},
			{
				name: "Mirinda",
				description: "0,1l",
				price: "18Kč",
			},
			{
				name: "7 UP",
				description: "0,1l",
				price: "18Kč",
			},
			{
				name: "Tonic [dle aktuální nabídky]",
				description: "0,1l",
				price: "18Kč",
			},
			{
				name: "Rockstar",
				description: "0,5l",
				price: "50Kč",
			},
			{
				name: "Red Bull",
				description: "0,25l",
				price: "66Kč",
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

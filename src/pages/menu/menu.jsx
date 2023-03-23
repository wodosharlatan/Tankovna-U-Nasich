import "./menu.scss";

const Menu = () => {

	const list = [
		{
			name: nealko,
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
				
			],
			name: alkohol,
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
				
			],
			name: pochutiny,
			products: [
				{
					name: "Utopenci",
					description: "Refreshing and bubbly",
					price: "50Kč"
				},
				
			]
			
		}
	]










	return (
		<>
			<div className="container">
				<div className="section__title-menu">
					<h1>Nealkoholické Nápoje</h1>
				</div>
				<hr></hr>

				<ul class="menu-list">
					<li class="menu-item">
						<h3>Classic </h3>
						<p class="menu-description">Refreshing and bubbly</p>
						<p class="menu-price">50Kč</p>
					</li>

					<li class="menu-item">
						<h3>Classic Coca-Cola</h3>
						<p class="menu-description">Refreshing and bubbly</p>
						<p class="menu-price">50Kč</p>
					</li>

					<li class="menu-item">
						<h3>Classic Coca-Cola</h3>
						<p class="menu-description">Refreshing and bubbly</p>
						<p class="menu-price">50Kč</p>
					</li>

					<li class="menu-item">
						<h3>Classic Coca-Cola</h3>
						<p class="menu-description">Refreshing and bubbly</p>
						<p class="menu-price">50Kč</p>
					</li>

					<li class="menu-item">
						<h3>Classic Coca-Cola</h3>
						<p class="menu-description">Refreshing and bubbly</p>
						<p class="menu-price">50Kč</p>
					</li>

					<li class="menu-item">
						<h3>Classic Coca-Cola</h3>
						<p class="menu-description">Refreshing and bubbly</p>
						<p class="menu-price">50Kč</p>
					</li>
				</ul>

				<div className="section__title-menu">
					<h1>Alkoholické nápoje</h1>
				</div>
				<hr></hr>

				<ul>
					<li class="menu-item">
						<h3>Classic Coca-Cola</h3>
						<p class="menu-description">Refreshing and bubbly</p>
						<p class="menu-price">50Kč</p>
					</li>

					<li class="menu-item">
						<h3>Classic Coca-Cola</h3>
						<p class="menu-description">Refreshing and bubbly</p>
						<p class="menu-price">50Kč</p>
					</li>

					<li class="menu-item">
						<h3>Classic Coca-Cola</h3>
						<p class="menu-description">Refreshing and bubbly</p>
						<p class="menu-price">50Kč</p>
					</li>

					<li class="menu-item">
						<h3>Classic Coca-Cola</h3>
						<p class="menu-description">Refreshing and bubbly</p>
						<p class="menu-price">50Kč</p>
					</li>

					<li class="menu-item">
						<h3>Classic Coca-Cola</h3>
						<p class="menu-description">Refreshing and bubbly</p>
						<p class="menu-price">50Kč</p>
					</li>
				</ul>

				<div className="section__title-menu">
					<h1>Pochutinky</h1>
				</div>
				<hr></hr>

				<ul>
					<li class="menu-item">
						<h3>Classic Coca-Cola</h3>
						<p class="menu-description">Refreshing and bubbly</p>
						<p class="menu-price">50Kč</p>
					</li>

					<li class="menu-item">
						<h3>Classic Coca-Cola</h3>
						<p class="menu-description">Refreshing and bubbly</p>
						<p class="menu-price">50Kč</p>
					</li>

					<li class="menu-item">
						<h3>Classic Coca-Cola</h3>
						<p class="menu-description">Refreshing and bubbly</p>
						<p class="menu-price">50Kč</p>
					</li>

					<li class="menu-item">
						<h3>Classic Coca-Cola</h3>
						<p class="menu-description">Refreshing and bubbly</p>
						<p class="menu-price">50Kč</p>
					</li>

					<li class="menu-item">
						<h3>Classic Coca-Cola</h3>
						<p class="menu-description">Refreshing and bubbly</p>
						<p class="menu-price">50Kč</p>
					</li>	
				</ul>
			</div>
		</>
	);
};

export default Menu;

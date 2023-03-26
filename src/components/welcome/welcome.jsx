import "./welcome.scss";

const Welcome = () => {
	return (
		<div className="welcome">
			<div className="left">
				<img src="https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000" alt="random"/>
			</div>

			<div className="right">
				<h1 className="section__title">
					Pijte a Ochutnejte!
				</h1>
				<div className="about__text">
					<p>
						Vítejte v našem Baru, kde nabízíme široký výběr piv a tvrdých
						alkoholů. Doplníme váš zážitek s našimi malými pochutinami. U nás si
						můžete vychutnat dobré pivo s přáteli nebo si dát silný drink na
						zahřátí. Nenechte si ujít atmosféru našeho baru a přijďte si užít
						chvíle plné dobrého pití a jídla. Těšíme se na vaši návštěvu!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
import "./welcome.scss";
import "../Button.scss";

const Welcome = (props) => {
	return (
		<div className="welcome">
			<div className="left">
				<img src="../Images/Beer.png" alt="random" />
			</div>

			<div className="right">
				<h1 className="section__title">Zažijte jedinečnou atmosféru naši tankovny</h1>
				<div className="about__text">
					<p>
						Vítejte Tankovně U Našich, perfektním místě pro každého, kdo oceňuje
						skvělé nápoje, chutné jídlo a příjemnou atmosféru. Jsme hrdí na to,
						že nabízíme široký výběr piv a lihovin, abychom zajistili, že každý
						host najde perfektní nápoj, který vyhovuje jeho chuťovým
						preferencím.
					</p>

					{!props.hideBtn && (
						<div className="button_div">
							<button className="button_class">
								<a href="/about/"> Zobrazit Galerii </a>
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Welcome;

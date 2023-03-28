import { React, useState } from "react";
import "./Gallery.scss";
import {
	IoArrowForwardOutline,
	IoArrowBackOutline,
	IoCloseCircleOutline,
} from "react-icons/io5";
import { Blurhash } from "react-blurhash";

const galleryImages = [
	{
		img: "../Images/0.jpg",
		hash: "UJEouXK#RQWa*JXSw]xZ]p$ROEo|,^Rno|tP",
	},
	{
		img: "../Images/1.jpg",
		hash: "UPGRnsOpWFS4?]X8xaoL]owNtQf7+cWFX8W=",
	},
	{
		img: "../Images/2.jpg",
		hash: "UMGb9HKLNJS#.Soz%0n%|2w3oyjGz=aMbabb",
	},
	{
		img: "../Images/3.jpg",
		hash: "U31PB@l?oap@d7dGlPaPUdi4ljcni1cpZki~",
	},
	{
		img: "../Images/4.jpg",
		hash: "UGHw=8}*?aJ73r0,RTRQ=E?bV?xb^Q-:X4%2",
	},
	{
		img: "../Images/5.jpg",
		hash: "UFIEFD^G?bEj4914$+nO,B~Wi{%2=L?bNG%3",
	},
	{
		img: "../Images/6.jpg",
		hash: "UAGQ?~Dj_49a_M0L-B9aR6S$S}$$=|xZTJIo",
	},
	{
		img: "../Images/7.jpg",
		hash: "UFGk2b;NjHM_~oR-n+NGM|E%S$r?-pX8tkIp",
	},
	{
		img: "../Images/8.jpg",
		hash: "UCF5gK5?EK9Z~oM~adNG00aJ%Mxu02%Mozn#",
	},
	{
		img: "../Images/9.jpg",
		hash: "UAEVE000+@xv*I4;t6nO00$*x^D*MJODbXkX",
	},
	{
		img: "../Images/10.jpg",
		hash: "UGIE2:00S_El_K9voyIp00-pxFM{DjjcX9j]",
	},
	{
		img: "../Images/11.jpg",
		hash: "UGFE.R-:0yW._N={M{e.4;J7xas:0LR-xuof",
	},
	{
		img: "../Images/12.jpg",
		hash: "UOGt=}-UNGs,_MxtRjniShs.axRk4:R+S2WB",
	},
	{
		img: "../Images/13.jpg",
		hash: "USGkUYM{NZNH~pRjbbR+S2R*t7s:EMWBoet6",
	},
	{
		img: "../Images/14.jpg",
		hash: "UDH_xxM_%h-;~2RPR.ae~9WAM{Ri?Exts:ax",
	},
	{
		img: "../Images/15.jpg",
		hash: "UDG8=t00kr00_NWAM_IUIojaV@%3nOxvIUt7",
	},
	{
		img: "../Images/16.jpg",
		hash: "UHH1q_05tPV]~PN2W:s:IUIrWXs,IuM|a~ob",
	},
	{
		img: "../Images/17.jpg",
		hash: "UFH_3V04?D9e~QD;NajdD%ItX8sS59WAxtoI",
	},
	{
		img: "../Images/18.jpg",
		hash: "UYIXH4~SIW9bobaxIqWFM{f5R+WEbct6xZRk",
	},
];

export function Gallery() {
	const [slideNumber, setSlideNumber] = useState(0);
	const [openModal, setOpenModal] = useState(false);

	const handleOpenModal = (index) => {
		setSlideNumber(index);
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	const handleSlideChange = (direction) => {
		const totalSlides = galleryImages.length;
		let newSlideNumber = slideNumber + direction;
		if (newSlideNumber < 0) {
			newSlideNumber = totalSlides - 1;
		} else if (newSlideNumber >= totalSlides) {
			newSlideNumber = 0;
		}
		setSlideNumber(newSlideNumber);
	};




	return (
		<>
			<div>
				{openModal && (
					<div className="sliderWrap">
						<IoCloseCircleOutline
							className="Close"
							onClick={handleCloseModal}
						/>
						<IoArrowBackOutline
							className="Prev"
							onClick={() => handleSlideChange(-1)}
						/>
						<IoArrowForwardOutline
							className="Next"
							onClick={() => handleSlideChange(1)}
						/>
						<div className="fullScreenImage">
							<img src={galleryImages[slideNumber].img} />
						</div>
					</div>
				)}

				<div className="galleryWrap">
					{galleryImages &&
						galleryImages.map((slide, index) => (
							<div
								className="single"
								key={index}
								onClick={() => handleOpenModal(index)}
							>
								<Blurhash
									className="bluredImage"
									hash={slide.hash}
									resolutionX={32}
									resolutionY={32}
									punch={1}
									width="100%"
									height="100%"
								/>

								<img src={slide.img} alt={slide.alt} loading="lazy" />
							</div>
						))}
				</div>
			</div>
		</>
	);
}

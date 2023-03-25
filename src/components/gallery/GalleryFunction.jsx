import { React, useState } from "react";
import "./Gallery.scss";
import { IoArrowForwardOutline, IoArrowBackOutline, IoCloseCircleOutline } from "react-icons/io5";

const galleryImages = [
	{
		img: "../Images/5.jpg",
	},
	{
		img: "../Images/1.jpg",
	},
	{
		img: "../Images/2.jpg",
	},
	{
		img: "../Images/4.jpg",
	},
	{
		img: "../Images/11.jpg",
	},
	{
		img: "../Images/0.jpg",
	},
	{
		img: "../Images/6.jpg",
	},
	{
		img: "../Images/7.jpg",
	},
	{
		img: "../Images/8.jpg",
	},
	{
		img: "../Images/9.jpg",
	},
	{
		img: "../Images/10.jpg",
	},
	{
		img: "../Images/3.jpg",
	},
	{
		img: "../Images/12.jpg",
	},
	{
		img: "../Images/13.jpg",
	},
	{
		img: "../Images/14.jpg",
	},
	{
		img: "../Images/15.jpg",
	},
	{
		img: "../Images/16.jpg",
	},
	{
		img: "../Images/17.jpg",
	},
	{
		img: "../Images/18.jpg",
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

	const prevSlide = () => {
		slideNumber === 0 ? setSlideNumber(galleryImages.length - 1) : setSlideNumber(slideNumber - 1);
	};

	const nextSlide = () => {
		slideNumber === galleryImages.length - 1 ? setSlideNumber(0) : setSlideNumber(slideNumber + 1);
	};

	return (
		<>
			<div>
				{openModal &&
					<div className="sliderWrap">
						<IoCloseCircleOutline className="Close" onClick={handleCloseModal} />
						<IoArrowBackOutline className="Prev" onClick={prevSlide} />
						<IoArrowForwardOutline className="Next" onClick={nextSlide} />
						<div className="fullScreenImage">
							<img src={galleryImages[slideNumber].img} alt=""></img>
						</div>



					</div>}

				<div className="galleryWrap">
					{galleryImages &&
						galleryImages.map((slide, index) => {
							return (
								<div
									className="single"
									key={index}
									onClick={() => handleOpenModal(index)}
								>
									<img src={slide.img} alt={slide.img} />
								</div>
							);
						})}
				</div>
			</div>
		</>
	);
};

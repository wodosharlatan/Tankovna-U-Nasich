import { React, useState } from "react";
import "./Gallery.scss";
import {
	IoArrowForwardOutline,
	IoArrowBackOutline,
	IoCloseCircleOutline,
} from "react-icons/io5";

const galleryImages = [
	{
		img: "../Images/0.jpg",
		thumbnail: "../Images/Thumbnail/0.jpg",
	},
	{
		img: "../Images/1.jpg",
		thumbnail: "../Images/Thumbnail/1.jpg",
	},
	{
		img: "../Images/2.jpg",
		thumbnail: "../Images/Thumbnail/2.jpg",
	},
	{
		img: "../Images/4.jpg",
		thumbnail: "../Images/Thumbnail/4.jpg",
	},
	{
		img: "../Images/5.jpg",
		thumbnail: "../Images/Thumbnail/5.jpg",
	},
	{
		img: "../Images/6.jpg",
		thumbnail: "../Images/Thumbnail/6.jpg",
	},
	{
		img: "../Images/7.jpg",
		thumbnail: "../Images/Thumbnail/7.jpg",
	},
	{
		img: "../Images/8.jpg",
		thumbnail: "../Images/Thumbnail/8.jpg",
	},
	{
		img: "../Images/9.jpg",
		thumbnail: "../Images/Thumbnail/9.jpg",
	},
	{
		img: "../Images/10.jpg",
		thumbnail: "../Images/Thumbnail/10.jpg",
	},
	{
		img: "../Images/11.jpg",
		thumbnail: "../Images/Thumbnail/11.jpg",
	},
	{
		img: "../Images/12.jpg",
		thumbnail: "../Images/Thumbnail/12.jpg",
	},
	{
		img: "../Images/13.jpg",
		thumbnail: "../Images/Thumbnail/13.jpg",
	},
	{
		img: "../Images/14.jpg",
		thumbnail: "../Images/Thumbnail/14.jpg",
	},
	{
		img: "../Images/15.jpg",
		thumbnail: "../Images/Thumbnail/15.jpg",
	},
	{
		img: "../Images/16.jpg",
		thumbnail: "../Images/Thumbnail/16.jpg",
	},
	{
		img: "../Images/17.jpg",
		thumbnail: "../Images/Thumbnail/17.jpg",
	},
	{
		img: "../Images/18.jpg",
		thumbnail: "../Images/Thumbnail/18.jpg",
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
								<img src={slide.thumbnail} alt={slide.alt} loading="lazy" />
							</div>
						))}
				</div>
			</div>
		</>
	);
}

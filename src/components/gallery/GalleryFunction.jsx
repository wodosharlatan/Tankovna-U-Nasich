import { React, useState } from "react";
import "./Gallery.scss";
import { IoArrowForwardOutline,IoArrowBackOutline,IoCloseCircleOutline } from "react-icons/io5";

export const Gallery = ({ galleryImages }) => {
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

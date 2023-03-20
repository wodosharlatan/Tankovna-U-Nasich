import {React, useState} from 'react'
import "./Gallery.scss";

export const Gallery = ({galleryImages}) => {


  const [slideNumber,setSlideNumber] = useState(0);
  const [openModal,setOpenModal] = useState(false);



  return (
    <>
    <div className="galleryWrap">
      {
        galleryImages && galleryImages.map((slide,index) => {
          return (
            <div className="single" key={index} >
              <img src={slide.img} alt="" />
            </div>
          )
        })
      }
    </div>
    
    </>
  )
}

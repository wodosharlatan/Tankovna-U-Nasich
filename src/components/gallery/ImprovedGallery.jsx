import React from "react";
import {Gallery} from "./Gallery.jsx";

function ImprovedGallery() {


  const galleryImages = [
		{
			img: "../public/Images/0.png",
    },
		{
			img: "../public/Images/1.png",
		},
		{
			img: "../public/Images/2.png",
		},
		{
			img: "../public/Images/3.png",
		},
		{
			img: "../public/Images/4.png",
		},
		{
			img: "../public/Images/5.png",
		},
		{
			img: "../public/Images/6.png",
		},
		{
			img: "../public/Images/7.png",
		},
		{
			img: "../public/Images/8.png",
		},
		{
			img: "../public/Images/9.png",
		},
		{
			img: "../public/Images/10.png",
		},
		{
			img: "../public/Images/11.png",
		},
		{
			img: "../public/Images/12.png",
		},
		{
			img: "../public/Images/13.png",
		},
		{
			img: "../public/Images/14.png",
		},
		{
			img: "../public/Images/15.png",
		},
		{
			img: "../public/Images/16.png",
		},
		{
			img: "../public/Images/17.png",
		},
		{
			img: "../public/Images/18.png",
		},
	];
	return (
		<>
			<Gallery galleryImages={galleryImages} />
		</>
	);
};

export default ImprovedGallery;

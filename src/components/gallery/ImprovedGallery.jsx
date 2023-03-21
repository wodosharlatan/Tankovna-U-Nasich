import React from "react";
import { Gallery } from "./GalleryFunction";

function ImprovedGallery() {


	const galleryImages = [
		{
			img: "../Images/5.png",
		},
		{
			img: "../Images/1.png",
		},
		{
			img: "../Images/2.png",
		},
		{
			img: "../Images/4.png",
		},
		{
			img: "../Images/11.png",
		},
		{
			img: "../Images/0.png",
		},
		{
			img: "../Images/6.png",
		},
		{
			img: "../Images/7.png",
		},
		{
			img: "../Images/8.png",
		},
		{
			img: "../Images/9.png",
		},
		{
			img: "../Images/10.png",
		},
		{
			img: "../Images/3.png",
		},
		{
			img: "../Images/12.png",
		},
		{
			img: "../Images/13.png",
		},
		{
			img: "../Images/14.png",
		},
		{
			img: "../Images/15.png",
		},
		{
			img: "../Images/16.png",
		},
		{
			img: "../Images/17.png",
		},
		{
			img: "../Images/18.png",
		},
	];
	return (
		<>
			<Gallery galleryImages={galleryImages} />
		</>
	);
};

export default ImprovedGallery;

import React from "react";
import { Gallery } from "./GalleryFunction";

function ImprovedGallery() {


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
	return (
		<>
			<Gallery galleryImages={galleryImages} />
		</>
	);
};

export default ImprovedGallery;

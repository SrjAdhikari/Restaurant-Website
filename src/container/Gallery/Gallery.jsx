import React, { useRef } from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import {
	BsInstagram,
	BsArrowLeftShort,
	BsArrowRightShort,
} from "react-icons/bs";
import "./Gallery.css";

// Array of gallery images imported from constants
const galleryImages = [
	images.gallery01,
	images.gallery02,
	images.gallery03,
	images.gallery04,
];

const Gallery = () => {
	// useRef hook to create a reference to the scrollable container
	const scrollRef = useRef(null);

	// Function to handle scrolling left or right within the gallery
	const scroll = (direction) => {
		const { current } = scrollRef;
		// Scroll 300px to the left or right based on the direction parameter
		if (direction === "left") {
			current.scrollLeft -= 300;
		} else {
			current.scrollLeft += 300;
		}
	};

	return (
		<div className="app__gallery flex__center">
			{/* Gallery content section with heading and description */}
			<div className="app__gallery-content">
				<SubHeading title="Instagram" />
				<h1 className="headtext__cormorant">Photo Gallery</h1>
				<p
					className="p__opensans"
					style={{ color: "#AAA", marginTop: "2rem" }}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					voluptas vel, similique, nam cum placeat deleniti at facere.
				</p>
				<button type="button" className="custom__button">
					View More
				</button>
			</div>

			{/* Scrollable gallery images section */}
			<div className="app__gallery-images">
				<div className="app__gallery-images_container" ref={scrollRef}>
					{/* Map through galleryImages array to display each image */}
					{galleryImages.map((image, index) => (
						<div
							className="app__gallery-images_card flex__center"
							key={`gallery_image-${index + 1}`}
						>
							<img src={image} alt="gallery" />
							{/* Instagram icon overlay on each image */}
							<BsInstagram className="gallery__image-icon" />
						</div>
					))}
				</div>

				{/* Left and Right arrow buttons for scrolling the gallery */}
				<div className="app__gallery-images_arrows">
					<BsArrowLeftShort
						className="gallery__arrow-icon"
						onClick={() => scroll("left")}
					/>
					<BsArrowRightShort
						className="gallery__arrow-icon"
						onClick={() => scroll("right")}
					/>
				</div>
			</div>
		</div>
	);
};

export default Gallery;

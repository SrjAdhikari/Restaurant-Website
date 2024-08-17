import React, { useRef, useState } from "react"; // Importing React, useRef, and useState from the React library
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs"; // Importing play and pause icons from the react-icons library
import { meal } from "../../constants"; // Importing the video file from the constants
import "./Intro.css"; // Importing the CSS file for styling

// Functional component 'Intro'
const Intro = () => {
	// State variable 'playVideo' to track whether the video is playing or paused
	const [playVideo, setPlayVideo] = useState(false);

	// useRef hook to directly access the video DOM element
	const vidRef = useRef();

	// Function to handle play/pause action on the video
	const handleVideo = () => {
		// Toggle the playVideo state (true if playing, false if paused)
		setPlayVideo((prevPlayVideo) => !prevPlayVideo);

		// If video is currently playing, pause it; otherwise, play it
		if (playVideo) {
			vidRef.current.pause(); // Pause the video
		} else {
			vidRef.current.play(); // Play the video
		}
	};

	// JSX to render the video player and overlay
	return (
		<div className="app__video">
			{/* Video element with source, reference, and properties */}
			<video
				src={meal} // Source of the video
				ref={vidRef} // Reference to the video element
				type="video/mp4" // Type of the video file
				loop // Loop the video continuously
				controls={false} // Hide default video controls
				muted // Mute the video by default
			/>

			{/* Overlay div to display the play/pause button */}
			<div className="app__video-overlay flex__center">
				{/* Play/Pause button container */}
				<div
					className="app__video-overlay_circle flex__center"
					onClick={handleVideo} // On click, trigger the handleVideo function
				>
					{/* Render the pause icon if video is playing, otherwise render the play icon */}
					{playVideo ? (
						<BsPauseFill color="#fff" fontSize={30} /> // Pause icon when video is playing
					) : (
						<BsFillPlayFill color="#fff" fontSize={30} /> // Play icon when video is paused
					)}
				</div>
			</div>
		</div>
	);
};

export default Intro; // Exporting the Intro component as the default export

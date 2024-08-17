import React from "react";
import { images, data } from "../../constants";
import { SubHeading } from "../../components";
import "./Laurels.css";

// AwardCard component to display individual award details
const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
	<div className="app__laurels_awards-card">
		{/* Displaying the image associated with the award */}
		<img src={imgUrl} alt="awards" />
		<div className="app__laurels_awards-card_content">
			{/* Title of the award with specific styling */}
			<p className="p__cormorant" style={{ color: "#DCCA87" }}>
				{title}
			</p>
			{/* Subtitle or description of the award */}
			<p className="p__cormorant">{subtitle}</p>
		</div>
	</div>
);

// Laurels component to display a list of awards and recognition
const Laurels = () => {
	return (
		<div className="app__bg app__wrapper section__padding" id="awards">
			<div className="app__wrapper_info">
				{/* SubHeading component for displaying the subtitle */}
				<SubHeading title="Awards & recognition" />
				{/* Main heading for the section */}
				<h1 className="headtext__cormorant">Our Laurels</h1>

				<div className="app__laurels_awards">
					{/* Mapping through the awards data to render each AwardCard */}
					{data.awards.map((award) => (
						<AwardCard award={award} key={award.title} />
					))}
				</div>
			</div>

			<div className="app__wrapper_img">
				{/* Displaying the image associated with the laurels section */}
				<img src={images.laurels} alt="laurels_img" />
			</div>
		</div>
	);
};

export default Laurels;

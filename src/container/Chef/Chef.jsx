import React from "react";
import images from "../../constants/images";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => {
	return (
		<div className="app__bg app__wrapper section__padding">
			<div className="app__wrapper_img app__wrapper_img-reverse">
				<img src={images.chef} alt="chef_img" />
			</div>

			<div className="app__wrapper_info">
				<SubHeading title="Chef's Word" />
				<h1 className="headtext__cormorant">What we believe in</h1>

				<div className="app__chef-content">
					<div className="app__checf-content_quote">
						<img src={images.quote} alt="quote" />
						<p className="p__opensans">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit.
						</p>
					</div>

					<p className="p__opensans">
						Autem optio numquam accusantium fuga quibusdam dolorem
						quia culpa quo magnam adipisci, vero unde nostrum sed
						ratione hic nam, laudantium id eligendi?
					</p>
				</div>

				<div className="app__chef-sign">
					<p>Kevin Luo</p>
					<p className="p__opensans">Chef & Founder</p>
					<img src={images.sign} alt="sign" />
				</div>
			</div>
		</div>
	);
};

export default Chef;

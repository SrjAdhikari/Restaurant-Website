import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => {
	return (
		<div className="app__menuitem">
			{/* Header section of the menu item, containing the title, price, and a decorative dash */}
			<div className="app__menuitem-head">
				{/* Title of the menu item with a specific font color */}
				<div className="app__menuitem-name">
					<p className="p__cormorant" style={{ color: "#DCCA87" }}>
						{title}
					</p>
				</div>

				{/* Decorative dash between the title and price */}
				<div className="app__menuitem-dash" />

				{/* Price of the menu item */}
				<div className="app__menuitem-price">
					<p className="p__cormorant">{price}</p>
				</div>
			</div>

			{/* Subtitle or tags for the menu item with a muted color */}
			<div className="app__menuitem-sub">
				<p className="p__opensans" style={{ color: "#AAA" }}>
					{tags}
				</p>
			</div>
		</div>
	);
};

export default MenuItem;

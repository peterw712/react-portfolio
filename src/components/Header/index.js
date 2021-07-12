import React from "react";
import Navigation from "../Nav";

function Header(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<header>
			<div>
				<h1 className="title">Peter Wang</h1>
                <h4 className="subtitle">Web Developer</h4>
			</div>
			<div>
				<Navigation
					currentTab={currentTab}
					setCurrentTab={setCurrentTab}
				></Navigation>
			</div>
		</header>
	);
}

export default Header;

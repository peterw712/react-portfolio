import React from "react";

function Navigation(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<nav>
			<ul className="flex-row mobile-view">
				<li className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("about")}>About Me</span>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
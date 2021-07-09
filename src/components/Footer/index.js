import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/peterw712"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/images/github-logo.png")}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/peter-wang-a1598a204/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/images/linkedin-logo.png")}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;

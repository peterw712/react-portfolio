import React from "react";
import File from "../../assets/files/peters-resume.pdf";

function Resume() {
	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Resume</h1>
			</div>
			<div>
				<a href={File} download>
					<h5>Download My Resume</h5>
				</a>
			</div>
			<div>
				<h5>Front-End Skills</h5>
				<ol>
			        <li>Github</li> 
					<li>HTML</li>
					<li>CSS</li>
					<li>Bootstrap</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>React</li>	
				</ol>
				<br></br>
				<h5>Back-End Skills</h5>
				<ol>
					<li>APIs</li>
					<li>NodeJS</li>
					<li>Express.js</li>
					<li>Model View Controller</li>
					<li>RESTful architecture</li>
					<li>Progressive Web Applications</li>
				</ol>
				<h5>Database Skills</h5>
				<ol>
					<li>MySQL</li>
					<li>Sequelize</li>
					<li>NoSQL</li>
					<li>GraphQL</li>
					<li>MongoDB</li>
					<li>Mongoose</li>
				</ol>
			</div>
		</section>
	);
};

export default Resume;

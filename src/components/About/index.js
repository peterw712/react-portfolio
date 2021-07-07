import React from 'react';
import self from '../../assets/images/self.jpg';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={self}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
					I am a full stack web developer from Toronto, Canada.
                    Looking to develop full-stack MERN applications using my entrepreneurial, creative, and analytical skills.
				</p>
			</div>
		</section>
	);
};

export default About;



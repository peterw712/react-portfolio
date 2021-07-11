import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Habit Tracker',
			description:
				'An app for tracking habits',
			image: 'habit-tracker.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
			],
			github: 'https://github.com/peterw712/habit-tracker',
			deployed: 'https://peterw712.github.io/habit-tracker',
		},
		{
			name: 'Guess the Opinion',
			description:
				'A multiplayer game inspired by Family Feud',
			image: 'opinion-guess.jpeg',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Handlebars.js',
                'Express & Sequelize',
                'Socket.io',
				'Heroku',
			],
			github: 'https://github.com/phonix375/opinion-guess',
			deployed: 'https://glacial-hamlet-81144.herokuapp.com/',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Portfolio;

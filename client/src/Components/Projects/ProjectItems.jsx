import React from "react";
import projects from "../../api/projects/projects.js";

export default function ProjectItems() {
	const renderProjects = projects.map((project, index) => {
		return (
			<div className="card project-card" key={index}>
				<h3>{project.name}</h3>
				<div
					className="project-img"
					style={{background: `url("${project.pic}") center top / cover`}}
				></div>
				<div className="project-desc">{project.desc}</div>
				<div className="project-stack">
					{project.stack.map((stack, index) => (
						<span className="project-stack-item" key={index}>
							{stack}
						</span>
					))}
				</div>
				<div className="project-links">
					<div>
						<a href={project.demo} target="_blank" rel="noopener noreferrer">
							<span>
								<i className="fab fa-firefox-browser"></i>See it live
							</span>
						</a>
					</div>
					<div>
						<a href={project.repo} target="_blank" rel="noopener noreferrer">
							<span>
								<i className="fab fa-github"></i>See the code
							</span>
						</a>
					</div>
				</div>
			</div>
		);
	});

	return <>{renderProjects}</>;
}

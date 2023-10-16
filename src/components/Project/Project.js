import React from "react";
import { Link } from "react-router-dom";

function Project({ project }) {
  const {
    title,
    description,
    technologies,
    img,
    details,
    link,
    hasRepo,
    repo,
  } = project;

  return (
    <div className="project" key={title}>
      <img src={img} alt={title} className="project-bg" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <h4>Technologies used: {technologies}</h4>
        <p>About this project: {description}</p>
        <div className="project-buttons">
          <Link to={link}>
            <button>View Project</button>
          </Link>
          {hasRepo && (
            <Link to={repo}>
              <button>View Source Code</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;

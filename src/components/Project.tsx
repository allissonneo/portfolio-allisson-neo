import React from "react";
import { Link } from "react-router-dom";

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const Project = ({ title, description, image, link }: ProjectProps) => {
  return (
    <Link target="_blank" rel="noopener noreferer" to={link} className="project-link" style={{ textDecoration: 'none' }}>
    <div className="project-cont">
      <div className="project-img-container">
        <img src={image} alt={`Imagem do projeto ${title}`} className="project-img" />
      </div>
      <div className="project-info">
      <h3 className="name-project">{title}</h3>
      <p className="project-desc">{description}</p>
      </div>
    </div>
    </Link>
  );
};
export default Project;
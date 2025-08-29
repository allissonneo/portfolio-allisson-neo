// src/components/Projects.tsx

import React from "react";
import Project from "./Project";

const Projects = () => {
  const projectData = [

    {
      title: "Trilha CSS DIO",
      description: "Desafio da DIO para a prática do CSS.",
      image: "/assets/cssdio.jpeg",
      link: "https://deafio-css-dio.vercel.app/"
    },
    {
      title: "Landing Page",
      description: "Landing Page desafio da Corebiz.",
      image: "/assets/landingcore.png",
      link: "https://final-challenge-gobeyond.vercel.app/"
    },
    {
      title: "ToDo App",
      description: "Aplicativo de tarefas com React + Hooks.",
      image: "/assets/todo-app.png",
      link: "https://neo-todo-list.vercel.app/"
    },
    {
      title: "Portfolio Dev",
      description: "Meu portfólio pessoal com React e SCSS.",
      image: "/assets/portfolio.jpeg",
      link: "https://portfolio-allisson-neo.vercel.app/"
    },
    {
      title: "E-commerce",
      description: "Loja virtual simples feita em 48h com HTML, CSS e JS.",
      image: "https://camo.githubusercontent.com/dd8b16e73ba249928be59900c62ffd63d5ac0768564085b299969168be479a5a/68747470733a2f2f692e696d6775722e636f6d2f634632744b506e2e706e67",
      link: "https://gobeyond-challenge-one.vercel.app/"
    },
    {
      title: "Jogo da Velha",
      description: "Jogo da velha com bot desenvolvido com algoritmo MiniMax.",
      image: "/assets/jogo-da-velha.png",
      link: "https://jogo-da-velha-minimax.vercel.app/"
    },
    
  ];
  return (
    <section id="projects" className="projects-container">
      <div className="projects-content">
        <div className="projects-header">
        <span className="name">Meu trabalho</span>
        <h1 className="profile-title">Veja os projetos em destaque</h1>
        </div>
        <div>
          <div className="projects-list"> 
            {projectData.map((project, index) => (
              <Project
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

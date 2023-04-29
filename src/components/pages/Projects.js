import React from 'react';
import passwordGenieImg from '../../images/passwordgenie.jpg';
import animangaImg from '../../images/animanga02.jpg';
import workdayscheduleImg from '../../images/workdayschedule.jpg';
import notetakingappImg from '../../images/notetakingapp.jpg';
import javaquizImg from '../../images/javaquiz.jpg';
import coderefractionImg from '../../images/coderefraction.jpg';

const projects = [
  {
    id: 1,
    title: "Password Generator",
    image: passwordGenieImg,
    link: 'https://dinoarslanovic26.github.io/Brand-New-Password-Generator/',
    github: 'https://github.com/dinoarslanovic26/Brand-New-Password-Generator'
  },
  {
    id: 2,
    title: "Animanga",
    image: animangaImg,
    link: 'https://jshigoodies.github.io/Animanga/',
    github: 'https://github.com/Jshigoodies/Animanga'
  },
  {
    id: 3,
    title: "Personal Schedule",
    image: workdayscheduleImg,
    link: 'https://dinoarslanovic26.github.io/Personal-Workday-Schedule/',
    github: 'https://github.com/dinoarslanovic26/Personal-Workday-Schedule'
  },
  {
    id: 4,
    title: "Personal Note Taker",
    image: notetakingappImg,
    link: 'https://note-taking-app-v1.herokuapp.com/',
    github: 'https://github.com/dinoarslanovic26/Personal-Note-Taker'
  },
  {
    id: 5,
    title: "JavaScript Quiz",
    image: javaquizImg,
    link: 'https://dinoarslanovic26.github.io/JavaScipt-Quiz-2.0/',
    github: 'https://github.com/dinoarslanovic26/JavaScipt-Quiz-2.0'
  },
  {
    id: 6,
    title: "Code Refraction",
    image: coderefractionImg,
    link: 'https://dinoarslanovic26.github.io/Official-Module-1-Challenge/',
    github: 'https://github.com/dinoarslanovic26/Official-Module-1-Challenge'
  },
];

function generateProjectCards() {
  return projects.map(({ id, title, image, link, github }) => (
    <div className="col" key={id}>
      <div className="card h-100">
        <img src={image} alt={title} />
        <div className="card-body">
          <h3>{title}</h3>
          <div className="buttons" >
            <a href={link}>Live Demo </a>
            <a href={github}>GitHub</a>
          </div>
        </div>
      </div>
    </div>
  ));
}

export default function Projects() {
  return (
    <section className='container'>
      <h2>Personal Projects</h2>
      <div className="row row-cols-lg-3 g-4">
        {generateProjectCards()}
      </div>
    </section>
  );
}
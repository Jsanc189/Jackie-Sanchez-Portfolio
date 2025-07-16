import './App.css';
import React from 'react';
import { useRef, useState } from 'react';
import './App.css';
import emailjs from '@emailjs/browser';
import ProjectCard from './ProjectCard'; 


function App() {
  const projectsRef = useRef(null);
  const [showContact, setShowContact] = useState(false);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const projects = [
    {
      title: 'Super Mega Blasteroids 9',
      description: 'A solo build prototype for a space shooter game inspired by the show Foster\'s Home for Imaginary Friends. This game utilizes the Phaser 3 game engine, JavaScript and HTML for game development.',
      image: 'img/SuperMegaBlasteroids9.jpg',
      link: 'https://jsanc189.github.io/Super-Mega-Blasteroids-9/'},
    {
      title: 'Sussy Pizzaria',
      description: 'Lead developer on a team project of a restaurant game prototype that generates text reviews for the food served. This game utilizes the P5.js library, JavaScript, and HTML.',
      image: 'img/SussyPizzaria.jpg',
      link: 'https://jsanc189.github.io/Sussy-Pizzaria/'
    },
    {
      title: 'Plant Harvest',
      description:'Lead developer on a team project of a farming game prototype that a user can navigate and plant/harvest crops. This game utilizes the Phaser 3 game engine, JavaScript and HTML for game development and is also installable app.',
      image: 'img/PlantHarvest.jpg',
      link: 'https://jsanc189.github.io/121-Final-project/'
    }
  ]

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      'service_bvsadyk', 
      'template_yovs9gt', 
      form.current, 
      'OMMLldBrtuA7eAT3K'
    )
    .then(
      (result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        setShowContact(false); // Close contact form after sending
      },
      (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again later.');
      }
    );
    e.target.reset(); // Reset form fields after submission
  };

  return (
    <div className="App">
      {/* Menu placement */}
      <nav className="menu-bar">
       <button className="menu-btn projects-button" onClick={scrollToProjects}>Projects</button>
       <button className="menu-btn initials" onClick={scrollToTop}>JS</button>
       <button className="menu-btn contact-me" onClick={() => setShowContact(true)}>Contact Me</button>
      </nav>

      {/* Profile pic placement */}
      <div className ="container">
        <div className="profile-picture-container">
          <img src="img/Headshot1.jpg" alt="Your profile" className="profile-picture"/>
        </div>

        {/* Profile text placement */}
        <div className="profile-text">
          <span className="word word-one">Hello! My name is </span>
          <span className="word word-two">Jackie Sanchez. </span>
          <span className="word word-three">Here are the projects I have or am currently working on.  I always strive to engineer with inclusivity.</span>
        </div>
      </div>

      {/* Projects section */}
      <div ref={projectsRef} id="projects" className="projects-section">
        <h1>Projects</h1>
        <div className="project-grid">
          {projects.map((proj, index) => (
            <ProjectCard
              key={index}
              title={proj.title}
              description={proj.description}
              image={proj.image}
              link={proj.link}
            />
          ))}
        </div>
      </div>

      {/* Contact section */}
      {showContact && (
        <div className="contact-section">
          <div className="contact-form">
            <button className="close-btn" onClick={() => setShowContact(false)}>X</button>
            <h1>Contact Me</h1>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="user_name" placeholder="Your Name" required />
              <input type="email" name="user_email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" required></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      )} 
    </div>
  );
}

export default App;

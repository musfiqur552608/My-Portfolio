import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>Hello, I'm Musfiqur Rahman, a full-stack developer passionate about using technology to solve real-world problems. With expertise in Android and web development, I work with front-end and back-end technologies to create high-quality, user-focused solutions. I've built a range of projects, from simple utility apps to complex social networking platforms and enterprise-level web applications. With proficiency in languages like Java and Python, as well as front-end frameworks like React and Angular, I'm comfortable working on both Android and web projects. I'm a strong communicator and collaborator, and I thrive in team-based environments where I can learn from my colleagues and contribute my own expertise. Let's connect and build something amazing together!</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
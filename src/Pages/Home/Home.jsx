import { Link } from 'react-router-dom'
import './Home.scss'
import { FaGithub, FaLinkedin, FaDoorOpen } from 'react-icons/fa'
import { SubHeading, ProjectCard } from '../../Components'
import { useEffect, useState } from 'react'

const Home = () => {
  const [portfolioData, setPortfolioData] = useState({})

  useEffect(() => {
    fetch('src/data/portfolio.json')
      .then((res) => res.json())
      .then((data) => setPortfolioData(data.portfolio))
  }, [])

  return (
    <>
      <section className="section hero">
        <div className="social-links flex flex-fd-c">
          <div className="line" />
          <Link to="https://github.com/iancenry" target="_blank">
            <FaGithub color="#abb2bf" fontSize={20} />
          </Link>
          <Link to="." target="_blank">
            <FaLinkedin color="#abb2bf" fontSize={20} />
          </Link>
          <Link to=".">
            <FaDoorOpen color="#abb2bf" fontSize={20} />
          </Link>
        </div>
        <div className="hero__content flex flex-jc-sb">
          <div className="hero__content__info flex flex-fd-c">
            <h1 className="headtext__firacode">
              Ian Cenry is a <span>Full-Stack Developer</span> and
              <span> Software Engineer</span>
            </h1>
            <p className="p__firacode">
              I craft responsive web applications where technologies meet
              creativity and functionality
            </p>
            <Link className="btn p__firacode">Contact me</Link>
          </div>
          <div className="hero__content__image">
            <img
              src="/src/assets/images/person-hero.png"
              alt=""
              className="hero-person"
            />
            <img
              src="/src/assets/images/hero-pattern.png"
              alt=""
              className="hero-pattern"
            />
            <img
              src="/src/assets/images/hero-dots.png"
              alt=""
              className="hero-dots"
            />
            <div className="current-work flex flex-ai-c ">
              <div className="current-work__mini-square" />
              <p className="p__firacode">
                Currently working on <b style={{ color: '#fff' }}>Portfolio</b>
              </p>
            </div>
          </div>
        </div>
        <div className="hero__quote-wrapper">
          <img
            src="/src/assets/images/quote.png"
            alt=""
            className="upper-quote"
          />
          <img
            src="/src/assets/images/quote.png"
            alt=""
            className="lower-quote"
          />
          <p className="h3__firacode">
            With great power comes great electricity bill
          </p>
        </div>
      </section>
      <section className="section projects">
        <div className="section__subheading flex flex-ai-c flex-jc-sb">
          <SubHeading subheading={'projects'} />
          <p className="p__h3__firacode">View all ~~&gt;</p>
        </div>
        <div className="project-card">{/* call ProjectCard in map */}</div>
      </section>
    </>
  )
}

export default Home

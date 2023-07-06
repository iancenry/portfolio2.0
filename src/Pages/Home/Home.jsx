import { Link } from 'react-router-dom'
import './Home.scss'
import { FaGithub, FaLinkedin, FaDoorOpen } from 'react-icons/fa'
import { SubHeading, ProjectCard } from '../../Components'
import { useEffect, useState } from 'react'

const Home = () => {
  const [portfolioData, setPortfolioData] = useState()

  useEffect(() => {
    fetch('/src/data/portfolio.json')
      .then((res) => res.json())
      .then((data) => setPortfolioData(data.portfolio))
  }, [])

  const homePortfolios = portfolioData?.map((portfolio) => (
    <ProjectCard
      key={portfolio.id}
      cover={portfolio.cover}
      title={portfolio.title}
      description={portfolio.description}
      languages={portfolio.languages}
    />
  ))

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
                Current project: <b style={{ color: '#fff' }}>APIs</b>
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
        <div className="hero__tech-stack">{/* TODO add tech stack */}</div>
      </section>
      <section className="section projects">
        <div className="flex flex-ai-c flex-jc-sb">
          <SubHeading subheading={'projects'} />
          <Link className="h3__firacode">View all ~~&gt;</Link>
        </div>
        <div className="project-cards">{homePortfolios}</div>
      </section>
      <section className="section skills">
        <SubHeading subheading={'skills'} />
      </section>
    </>
  )
}

export default Home

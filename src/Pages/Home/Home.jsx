import { Link } from 'react-router-dom'
import './Home.scss'
import { SubHeading, ProjectCard, SkillsCard } from '../../Components'
import { useEffect, useState } from 'react'

const Home = () => {
  const [data, setData] = useState()

  useEffect(() => {
    fetch('/src/data/db.json')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  const homePortfolios = data?.portfolio.map((portfolio) => (
    <ProjectCard
      key={portfolio.id}
      cover={portfolio.cover}
      title={portfolio.title}
      description={portfolio.description}
      languages={portfolio.languages}
      link={portfolio.link}
    />
  ))

  const skills = data?.skills.map((skill) => (
    <SkillsCard key={skill.id} title={skill.title} content={skill.content} />
  ))

  return (
    <>
      <section className="section hero">
        <div className="hero__content flex flex-jc-sb">
          <div className="hero__content__info flex flex-fd-c">
            <h1 className="headtext__firacode">
              Hi, I&#39;m Ian Cenry. A passionate{' '}
              <span>Full-Stack Developer</span> and
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
      </section>
      <section className="section projects">
        <div className="flex flex-ai-c flex-jc-sb">
          <SubHeading subheading={'projects'} />
          <Link to="projects" className="h3__firacode">
            View all ~~&gt;
          </Link>
        </div>
        <div className="project-cards">{homePortfolios}</div>
      </section>
      <section className="section skills">
        <SubHeading subheading={'skills'} />
        <div className="skills__tech-stack flex flex-jc-c">
          <p className="p__firacode">
            <b>Tech Stack | </b>
          </p>
          <div className="skills__tech-stack__logos">
            <img src="src/assets/images/stack/html.png" alt="Html" />
            <img
              src="src/assets/images/stack/javascript.png"
              alt="JavaScript"
            />
            <img src="src/assets/images/stack/css.png" alt="CSS" />
            <img src="src/assets/images/stack/react.png" alt="React" />
            <img
              src="src/assets/images/stack/typescript.png"
              alt="TypeScript"
            />
            <img src="src/assets/images/stack/python.png" alt="Python" />
            <img src="src/assets/images/stack/node-js.png" alt="Node" />
            <img src="src/assets/images/stack/sass.png" alt="Sass" />
          </div>
        </div>
        <div className="skills__main flex flex-jc-sb flex-ai-c">
          <div className="skills__main__pattern">
            <img src="/src/assets/images/skills-pattern.png" alt="" />
          </div>
          <div className="skills__main__cards flex">{skills}</div>
        </div>
      </section>
    </>
  )
}

export default Home

// TODO export fetches to api.js
// TODO limit fetch to 3 projects in Home.jsx
// TODO might switch to loaders and add loading state

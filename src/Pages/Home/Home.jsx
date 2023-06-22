import { Link } from 'react-router-dom'
import './Home.scss'
import { FaGithub, FaLinkedin, FaDoorOpen } from 'react-icons/fa'

const Home = () => {
  return (
    <div className="section hero flex flex-jc-sb">
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
      <div className="hero__info flex flex-fd-c">
        <h1 className="headtext__firacode">
          Ian Cenry is a <span>Full-Stack Developer</span> and
          <span> Software Engineer</span>
        </h1>
        <p className="p__firacode">
          I craft responsive web applications where technologies meet creativity
          and functionality
        </p>
        <Link className="btn p__firacode">Contact me</Link>
      </div>
      <div className="hero__image">
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
  )
}

export default Home

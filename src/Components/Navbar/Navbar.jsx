import { Link } from 'react-router-dom'
import './Navbar.scss'
import { FaGithub, FaLinkedin, FaDoorOpen } from 'react-icons/fa'
import { useState } from 'react'
import logo from '../../assets/images/logo.png'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <header>
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
      <nav className="navbar flex flex-jc-sb flex-ai-c">
        <div className="navbar__logo flex">
          <img src={logo} alt="portfolio logo" />
        </div>
        <ul className="navbar__links flex flex-jc-c flex-ai-c hide-for-mobile">
          <li>
            <Link to="." className="p__firacode">
              <span>#</span>home
            </Link>
          </li>
          <li className="p__firacode">
            <Link to="projects" className="p__firacode">
              <span>#</span>projects
            </Link>
          </li>
          <li className="p__firacode">
            <Link to="about" className="p__firacode">
              <span>#</span>about
            </Link>
          </li>
          <li className="p__firacode">
            <Link to="contact" className="p__firacode">
              <span>#</span>contact
            </Link>
          </li>
          <li className="p__firacode">
            <Link to="blog" className="p__firacode">
              <span>#</span>blog
            </Link>
          </li>
        </ul>
        {/* small scrren */}
        <div
          className={`navbar--smallscreen ${
            toggleMenu && 'open'
          } hide-for-desktop`}
        >
          <div
            className="btn-hamburger flex flex-fd-c"
            onClick={() => setToggleMenu((prevValue) => !prevValue)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          {toggleMenu && (
            <div className="navbar--smallscreen_overlay flex flex-jc-c">
              <ul className="navbar--smallscreen__links flex flex-jc-c flex-fd-c hide-for-desktop">
                <li>
                  <Link
                    to="."
                    className="headtext__firacode"
                    onClick={() => setToggleMenu((prevValue) => !prevValue)}
                  >
                    <span>#</span>home
                  </Link>
                </li>
                <li className="p__firacode">
                  <Link
                    to="projects"
                    className="headtext__firacode"
                    onClick={() => setToggleMenu((prevValue) => !prevValue)}
                  >
                    <span>#</span>projects
                  </Link>
                </li>
                <li className="p__firacode">
                  <Link
                    to="about"
                    className="headtext__firacode"
                    onClick={() => setToggleMenu((prevValue) => !prevValue)}
                  >
                    <span>#</span>about
                  </Link>
                </li>
                <li className="p__firacode">
                  <Link
                    to="contact"
                    className="headtext__firacode"
                    onClick={() => setToggleMenu((prevValue) => !prevValue)}
                  >
                    <span>#</span>contact
                  </Link>
                </li>
                <li className="p__firacode">
                  <Link
                    to="blog"
                    className="headtext__firacode"
                    onClick={() => setToggleMenu((prevValue) => !prevValue)}
                  >
                    <span>#</span>blog
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar

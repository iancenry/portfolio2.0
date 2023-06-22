import { Link } from 'react-router-dom'
import './Navbar.scss'
import { useState } from 'react'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <header>
      <nav className="navbar flex flex-jc-sb flex-ai-c">
        <div className="navbar__logo">
          <img src="/src/assets/images/logo.png" alt="portfolio logo" />
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
        </ul>
        {/* small scrren */}
        {/* /add classname open if toggled to switch styles to X */}
        <div className="navbar--smallscreen hide-for-desktop  open">
          <div
            className="btn-hamburger flex flex-fd-c"
            onClick={() => setToggleMenu((prevValue) => !prevValue)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          {toggleMenu && (
            <div className="navbar--smallscreen_overlay">
              <ul className="navbar--smallscreen__links flex flex-jc-c flex-ai-c hide-for-desktop">
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
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar

//TODO add blog route

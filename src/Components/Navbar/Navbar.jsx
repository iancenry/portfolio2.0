import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <header>
      <nav className="navbar flex flex-jc-sb flex-ai-c">
        <div className="navbar__logo">
          <img src="/src/assets/images/logo.png" alt="portfolio logo" />
        </div>
        <ul className="navbar__links flex flex-jc-c flex-ai-c">
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
        <div className="navbar__login flex flex-jc-c flex-ai-c">
          <Link to="." className="p__firacode">
            Login
          </Link>
        </div>
        {/* smallscreen navbar */}
      </nav>
    </header>
  )
}

export default Navbar

//TODO: add smallscreen navbar and put login to side as icon not words

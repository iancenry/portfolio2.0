import { Link } from 'react-router-dom'
import './Footer.scss'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__info flex flex-jc-sb flex-ai-c">
        <div className="footer__text">
          <div className="top-text flex flex-ai-c">
            <img src="/src/assets/images/logo.png" alt="" />
            <p
              className="p__firacode"
              style={{ fontSize: '0.875rem', marginLeft: '1rem' }}
            >
              iancenry@gmail.com
            </p>
          </div>

          <p>Full-Stack Developer and Software Engineer</p>
        </div>
        <div className="footer__media">
          <h3 className="h3__firacode">Media</h3>
          <Link to="https://github.com/iancenry" target="_blank">
            <FaGithub color="#abb2bf" fontSize={20} />
          </Link>
          <Link to="." target="_blank">
            <FaLinkedin color="#abb2bf" fontSize={20} />
          </Link>
        </div>
      </div>
      <p
        className="p__firacode"
        style={{ fontSize: '0.75rem', textAlign: 'center' }}
      >
        &copy; Copyright {new Date().getFullYear()}. Made by Ian Cenry
      </p>
    </footer>
  )
}

export default Footer

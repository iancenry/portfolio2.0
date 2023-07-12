import { Link } from 'react-router-dom'
import './NotFound.scss'
const NotFound = () => {
  return (
    <div className="error flex flex-fd-c flex-ai-c">
      <div className="img-container">
        <img src="/src/assets/images/404-err.png" alt="coming soon" />
      </div>
      <p className="p__firacode">Page cannot be found</p>
      <Link to="." className="btn">
        Go Back
      </Link>
    </div>
  )
}

export default NotFound

//TODO go back to previous link

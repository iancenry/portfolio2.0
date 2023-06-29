import { Link } from 'react-router-dom'
import './ProjectCard.scss'
import PropTypes from 'prop-types'

const ProjectCard = ({ cover, title, description, languages }) => {
  return (
    <div className="project-card flex flex-fd-c">
      <div className="project-card__image">
        <img src={cover} alt={`${title} project`} />
      </div>
      <div className="project-card__langauges">
        <p className="p__firacode">{languages.join(' ')}</p>
      </div>
      <div className="project-card__info flex flex-fd-c">
        <h3 className="h3__firacode">{title}</h3>
        <p className="p__firacode">{description}</p>
        <Link className="btn" target="_blank">
          Live ~&gt;
        </Link>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  cover: PropTypes.string,
  languages: PropTypes.array,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default ProjectCard

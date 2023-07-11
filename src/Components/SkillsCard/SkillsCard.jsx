import './SkillsCard.scss'
import PropTypes from 'prop-types'

const SkillsCard = ({ title, content }) => {
  return (
    <div className="skill-card ">
      <h3>{title}</h3>
      <p className="p__firacode">{content.join(' ')}</p>
    </div>
  )
}

SkillsCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.array,
}

export default SkillsCard

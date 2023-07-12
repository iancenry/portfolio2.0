import './SubHeading.scss'

const SubHeading = ({ subheading }) => {
  return (
    <p className="h3__firacode subtitle">
      <span>#</span>
      {subheading}
    </p>
  )
}

export default SubHeading

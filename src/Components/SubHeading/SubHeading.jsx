import './SubHeading.scss'

const SubHeading = ({ subheading }) => {
  return (
    <h3 className="h3__firacode subtitle">
      <span>#</span>
      {subheading}
    </h3>
  )
}

export default SubHeading

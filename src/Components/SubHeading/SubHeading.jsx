import './SubHeading.scss'

const SubHeading = ({ subheading }) => {
  return (
    <>
      <p className="h3__firacode subtitle" style={{ fontSize: '2rem' }}>
        <span>#</span>
        {subheading}
      </p>
    </>
  )
}

export default SubHeading

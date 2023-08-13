import './Blog.scss'
import comingSoon from '../../assets/images/coming-soon.png'

const Blog = () => {
  return (
    <div className="blog">
      <div className="coming-soon">
        <img src={comingSoon} alt="coming soon" />
      </div>
    </div>
  )
}

export default Blog

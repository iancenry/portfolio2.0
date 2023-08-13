import { useLocation } from 'react-router-dom'
import { PageHeading } from '../../Components'
import './About.scss'
import aboutImage from '../../assets/images/about-img.png'

const About = () => {
  const location = useLocation()

  return (
    <>
      <section className="section">
        <PageHeading path={location.pathname} />
        <p className="p__firacode">Who am i?</p>

        <div className="about">
          <div className="about__content flex flex-jc-sb">
            <div className="about__info flex flex-fd-c">
              <p className="p__firacode">
                Hello, i’m Ian! <br /> <br /> I’m a professional fullstack
                developer based in Nairobi, Kenya. I can develop responsive web
                applications from scratch and raise them into modern
                user-friendly web experiences. <br />
                <br />
                <br /> Transforming my creativity and knowledge into a
                functional problem solving applications is my goal. I have
                worked with various clients to establish their presence online.
              </p>
            </div>
            <div>
              <img
                src={aboutImage}
                alt="anonymous person"
                className="about-person"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About

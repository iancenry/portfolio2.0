import { useLocation } from 'react-router-dom'
import { SubHeading, ProjectCard, PageHeading } from '../../Components'
import { useEffect, useState } from 'react'

const Projects = () => {
  const location = useLocation()

  const [data, setData] = useState()

  useEffect(() => {
    fetch('/src/data/db.json')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  const projects = data?.portfolio.map((portfolio) => (
    <ProjectCard
      key={portfolio.id}
      cover={portfolio.cover}
      title={portfolio.title}
      description={portfolio.description}
      languages={portfolio.languages}
      link={portfolio.link}
    />
  ))

  return (
    <>
      <section className="section projects">
        <PageHeading path={location.pathname} />
        <p className="p__firacode">List of my Projects</p>
        <SubHeading subheading={'projects'} />
        <div className="project-cards">{projects}</div>
      </section>
    </>
  )
}

export default Projects

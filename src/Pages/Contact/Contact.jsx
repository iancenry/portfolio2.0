import './Contact.scss'
import { useLocation } from 'react-router-dom'
import { PageHeading } from '../../Components'
import { useState } from 'react'
import { FaMailBulk, FaLinkedin, FaGithub, FaPhoneAlt } from 'react-icons/fa'

const Contact = () => {
  const location = useLocation()
  const [contactFormData, setcontactFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setcontactFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(contactFormData)
  }

  return (
    <>
      <section className="section">
        <PageHeading path={location.pathname} />
        <p className="p__firacode">How to reach me?</p>

        <div className="contact">
          <div className="contact__content flex flex-jc-sb">
            <div className="contact__info">
              <p className="p__firacode">
                I’m interested in freelance opportunities. However, if you have
                other request or question, don’t hesitate to contact me
              </p>
              <div className="contact-details">
                <h3>Contact me here</h3>
                <p className="p__firacode" style={{ fontSize: '0.875rem' }}>
                  <FaPhoneAlt color="#abb2bf" fontSize={14} /> +254 721 442 506
                </p>
                <p className="p__firacode" style={{ fontSize: '0.875rem' }}>
                  <FaLinkedin color="#abb2bf" fontSize={14} />{' '}
                  linkedin.com/in/iancenry/
                </p>
                <p className="p__firacode" style={{ fontSize: '0.875rem' }}>
                  <FaGithub color="#abb2bf" fontSize={14} /> github.com/iancenry
                </p>
                <p className="p__firacode" style={{ fontSize: '0.875rem' }}>
                  <FaMailBulk color="#abb2bf" fontSize={14} />{' '}
                  iancenry@gmail.com
                </p>
              </div>
            </div>
            <div className="contact__form">
              <form
                onSubmit={handleSubmit}
                className="login-form flex flex-fd-c"
              >
                <div className="top flex">
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={contactFormData.name}
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={contactFormData.email}
                    placeholder="Email Address"
                  />
                </div>

                <input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  value={contactFormData.title}
                  placeholder="Title"
                />
                <textarea
                  rows="5"
                  cols="50"
                  name="message"
                  onChange={handleChange}
                  value={contactFormData.message}
                  placeholder="Message"
                />
                <button
                  className="btn h3__firacode"
                  style={{ paddingBottom: '3rem' }}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact

//TODO link form to emailjs

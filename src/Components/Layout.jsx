import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from './'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout

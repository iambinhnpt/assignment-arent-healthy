import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import ScrollButton from '../../components/ScrollButton'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ScrollButton />
      <Footer />
    </>
  )
}

export default Layout

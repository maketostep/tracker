

import { Outlet } from 'react-router'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Index from './pages/Index.jsx'
function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App

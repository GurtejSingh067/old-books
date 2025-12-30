import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <div className='max-h-screen md:min-h-screen flex flex-col'>
        <Navbar />      
          <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App

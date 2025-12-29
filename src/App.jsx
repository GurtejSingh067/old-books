import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <div className='max-h-screen md:min-h-screen flex flex-col'>
        <Navbar />
        <main className='flex-1 overflow-y-auto'>
          <Main />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App

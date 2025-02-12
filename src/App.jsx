import './App.css'
import About from './Components/About'
import Hero from './Components/Home'
import Navbar from './Components/Navbar'
import {Outlet} from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar />
      <Outlet/>
      <Hero/>

    </>
  )
}

export default App
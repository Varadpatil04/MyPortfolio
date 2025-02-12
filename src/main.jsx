import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App.jsx'
// import Layout from './layout.jsx'
import Hero from './Components/Home.jsx'
import About from './Components/About.jsx'
import Works from './Components/Works.jsx'
import Skills from './Components/Skills.jsx'
import Contact from './Components/Contact.jsx'




const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children: [
      {
        path : "home",
        element: <Hero/>
      },{
        path : "about",
        element : <About/>
      },{
        path : "works",
        element : <Works/>
      },{
        path : "skills",
        element : <Skills/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router} />
  </StrictMode>,
)

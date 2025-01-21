import { useState } from 'react'
import routes from './routes'
import './App.css'
import NavigationBar from './Components/NavigationBar/NavigationBar'
import { useRoutes } from 'react-router'
import Footer from './Components/Footer/Footer'

function App() {
 
let router=useRoutes(routes)
  return (
    <div className='App'>

      <NavigationBar/>
      {router}
      <Footer/>
    </div>
    
  )
}

export default App

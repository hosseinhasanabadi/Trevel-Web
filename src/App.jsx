import { useState } from 'react'
import routes from './routes'
import './App.css'
import NavigationBar from './Components/NavigationBar/NavigationBar'
import { useRoutes } from 'react-router'

function App() {
 
let router=useRoutes(routes)
  return (
    <div className='App'>

      <NavigationBar/>
      {router}
    </div>
    
  )
}

export default App

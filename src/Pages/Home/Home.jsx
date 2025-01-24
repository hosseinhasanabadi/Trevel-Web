import React from 'react'
import './Home.css'
import Herosection from '../../Components/Herosection/Herosection'
import SearchForm from '../../Components/SearchForm/SearchForm'
function Home() {
  return (
    <div className='home-page'>
     <Herosection/>
     <SearchForm/>
    </div>
  )
}

export default Home

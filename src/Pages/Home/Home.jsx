import React from 'react'
import './Home.css'
import Herosection from '../../Components/Herosection/Herosection'
import SearchForm from '../../Components/SearchForm/SearchForm'
import LastHolidaySection from '../../Components/LastHolidaySection/LastHolidaySection'
function Home() {
  return (
    <div className='home-page'>
     <Herosection/>
     <SearchForm/>
     <LastHolidaySection/>
    </div>
  )
}

export default Home

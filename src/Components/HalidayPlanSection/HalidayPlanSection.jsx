import React from 'react'
import './HalidayPlanSection.css'
import Container from 'react-bootstrap/esm/Container'
import GreenBtn from '../GreenBtn/GreenBtn'
function HalidayPlanSection(props) {
  return (
    <div className='holiday-plan-section py-5'>
        <Container className='h-100 d-flex flex-column 
        align-items-start
        justify-content-end'>
            <h3 className='text-start text-light text-capitalize
            fw-semibold'>{props.itemHalidayPlanSectionTitle}</h3>
            <p className='text-light text-start pb-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum dolore impedit, assumenda ratione aperiam veritatis!</p>
        <GreenBtn btnTitle='Check Summer Deals ' />
        </Container>
      
    </div>
  )
}

export default HalidayPlanSection

import React from 'react'
import Card from 'react-bootstrap/Card';
import './LastHolidayCard.css'
function LastHolidayCard(props) {
  return (
    <div className='col-lg-4'>
        <Card className='shadow h-100 overflow-hidden'>
      <Card.Img className='img-hover' variant="top" src={props.itemImage} />
      <Card.Body>
        <Card.Title className='text-start text-uppercase fw-bold'
        >{props.Title}</Card.Title>
        <Card.Text className='text-start'>
          {props.Description}
        </Card.Text>
        <a href="/" className='
        text-green text-capitalize fw-semibold'>Book Now</a>
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default LastHolidayCard;

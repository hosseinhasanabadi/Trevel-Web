import React from 'react'
import "./greenBtn.css"
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router'
function GreenBtn(props) {
  return (
    <Button id='green-btn'>
<Link to={props.btnLink} className=' text-decoration-none 
text-light text-capitalize'>{props.btnTitle}</Link>
    </Button>
  )
}

export default GreenBtn

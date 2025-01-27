import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function RecentHolidayCard(props) {
  return (
    <div className="col-lg-6">
      <Card
        className="shadow d-flex flex-sm-row h-100 
        overflow-hidden"
      >
        <Card.Img
          className="img-div img-hover col-sm-6"
          src={props.itemImage}
          variant="center"
        />

        <div className="col-sm-6 ">
          <Card.Body className="p-4">
            <Card.Title
              className="text-start text-uppercase
            fw-bold"
            >
              {props.itemTitle}
            </Card.Title>
            <ul className="unstyled">
              <li className="text-start">{props.itemDescription}</li>
              <li className="text-start">{props.itemNights}</li>
              <li className="text-green text-start price">
                <strong>{props.itemPrice}</strong>
              </li>
            </ul>
            <Button variant="dark">View Now</Button>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
}

export default RecentHolidayCard;

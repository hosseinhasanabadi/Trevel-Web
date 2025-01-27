import React from "react";
import "./RecentHolidays.css";
import RecentHolidayCard from "./RecentHolidayCard";
import Container from "react-bootstrap/esm/Container";
import RecentHolidayItem from "../../assets/RecentHolidadyItem";
function RecentHolidays() {
  return (
    <div className="recent-holidays my-4 my-sm-5">
      <Container>
        <h2 className="text-uppercase fw-semibold mb-4 mb-sm-5">
          Recent Holidays
        </h2>
        <div className="row g-4">{
            RecentHolidayItem.map((item=>
                <RecentHolidayCard key={item.id} 
                itemImage={item.itemImage} itemTitle={item.Title}
                itemDescription={item.Description} 
                itemNights={item.Nights} itemPrice={item.itemPrice}/>
            ))
            }</div>
      </Container>
    </div>
  );
}

export default RecentHolidays;

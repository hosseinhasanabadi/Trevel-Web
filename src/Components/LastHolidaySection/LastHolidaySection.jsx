import React from "react";
import "./lastHolidaySection.css";
import Container from "react-bootstrap/Container";
import LastHolidayItem from "../../assets/lastHolidayItem";
import LastHolidayCard from "./LastHolidayCard";
function LastHolidaySection() {
  return (
    <div className="last-holiday-section ">
      <Container>
        <h2
          className="text-uppercase fw-semibold my-sm-4 
    pt-lg-4"
        >
          Last minute holidays{" "}
        </h2>
        <div className="row g-4">
          {LastHolidayItem.map((item) => (
            <LastHolidayCard
              key={item.id}
              itemImage={item.itemImage}
              Title={item.itemTitle}
              Description={item.itemDescription}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default LastHolidaySection;

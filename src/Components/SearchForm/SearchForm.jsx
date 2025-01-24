import React, { useRef } from "react";
import "./searchForm.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
function SearchForm() {
  const checkInRef = useRef();
  const checkOutRef = useRef();
  return (
    <div className=" position-relative">

    <Container>
      <Form
        className="search-form d-lg-flex  
        justify-content-center
        align-items-center mx-auto p-4 mt-4  mt-lg-0 z-2 rounded"
        >
        <div className="col-lg-2">
          <Form.Select aria-label="Default select example">
            <option>Search Place</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>

        <div className="col-lg-2 mx-lg-3 my-2 my-lg-0">
          <Form.Select aria-label="Default select example">
            <option>Rooms</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
        <div className="col-lg-2">
          <Form.Control
            type="text"
            ref={checkInRef}
            placeholder="Check-in date "
            onFocus={() => (checkInRef.current.type = "date")}
            onBlur={() => (checkInRef.current.type = "date")}
            />
        </div>
        <div className="col-lg-2 mx-lg-3 my-2 my-lg-0">
          <Form.Control
            type="text"
            ref={checkOutRef}
            placeholder="Check-out date "
            onFocus={() => (checkOutRef.current.type = "date")}
            onBlur={() => (checkOutRef.current.type = "date")}
            />
           
        </div>
        <Button variant="dark" type="submit">
            Submit
            </Button>
      </Form>
    </Container>
            </div>
  );
}

export default SearchForm;

import React from "react";
import "./herosection.css";
import Carousel from "react-bootstrap/Carousel";
import GreenBtn from "../GreenBtn/GreenBtn";
function Herosection() {
  return (
    <div className="hero-section  ">
      <Carousel>
        <Carousel.Item className="item1 vh-100  w-100   ">
          <Carousel.Caption className="h-100">
            <div className="row h-100 ">
              <div
                className="col-lg-6  d-flex
         justify-content-center flex-column mt-5 align-items-start"
              >
                <h1 className=" text capitalize">Find perfect holiday</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatum, eum praesentium eligendi cupiditate amet deleniti
                  possimus minus architecto necessitatibus explicabo odio
                  numquam beatae temporibus, eaque sapiente quae eius aspernatur
                  vitae dolorem molestias sequi. Eligendi assumenda veritatis
                  fugit tenetur, itaque consectetur facilis impedit et ex, quae
                  rem? Provident obcaecati excepturi eaque!
                </p>
                <GreenBtn btnTitle="check our holidays"
                 btnLink="/holidays" />
              </div>
              <div className="col-lg-6 d-non d-lg-block"></div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item2 vh-100 ">
          <Carousel.Caption className="h-100 
        ">
            <div className="row h-100 ">
              <div
                className="col-lg-6  d-flex
         justify-content-center flex-column mt-5 align-items-start"
              >
                <h1 className=" text capitalize">Do you nedd a city break?</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatum, eum praesentium eligendi cupiditate amet deleniti
                  possimus minus architecto necessitatibus explicabo odio
                  numquam beatae temporibus, eaque sapiente quae eius aspernatur
                  vitae dolorem molestias sequi. Eligendi assumenda veritatis
                  fugit tenetur, itaque consectetur facilis impedit et ex, quae
                  rem? Provident obcaecati excepturi eaque!
                </p>
                <GreenBtn btnTitle="Our city breaks" 
                btnLink="/city-breaks" />
              </div>
              <div className="col-lg-6 d-non d-lg-block"></div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item3 vh-100">
          <Carousel.Caption className="h-100">
            <div className="row h-100 ">
            <div className="col-lg-6 d-non d-lg-block"></div>
              <div
                className="col-lg-6  d-flex
         justify-content-center flex-column mt-5 align-items-end"
              >
                <h1 className=" text capitalize">Travel anywhere</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatum, eum praesentium eligendi cupiditate amet deleniti
                  possimus minus architecto necessitatibus explicabo odio
                  numquam beatae temporibus, eaque sapiente quae eius aspernatur
                  vitae dolorem molestias sequi. Eligendi assumenda veritatis
                  fugit tenetur, itaque consectetur facilis impedit et ex, quae
                  rem? Provident obcaecati excepturi eaque!
                </p>
                <GreenBtn btnTitle="check all destinations
                " btnLink="/destinations" />
              </div>
         
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
/* <Carousel>
      <Carousel.Item className='item1 vh-100  w-100   ' >
        <Carousel.Caption className='h-100 d-flex
         justify-content-top flex-column  align-items-center'>
<div className="row h-100">
  <div className="cil-lg-6 d-flex flex-column justify-content-top flex-column  align-items-center ">
    <h1 className='text'>
      Findddsdfgsdgsdfgdfsgds
    </h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat accusamus voluptatum dolor aperiam similique quo.

    </p>
  </div>
  <div className='col-lg-6 d-non d-lg-block'></div>
</div>
         </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item className='item1 vh-100  w-100   ' >
        <Carousel.Caption className='h-100 d-flex
         justify-content-top flex-column  align-items-center'>
<div className="row h-100">
  <div className="cil-lg-6 d-flex flex-column justify-content-top flex-column  align-items-center ">
    <h1 className='text'>
      Findddsdfgsdgsdfgdfsgds
    </h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat accusamus voluptatum dolor aperiam similique quo.

    </p>
  </div>
  <div className='col-lg-6 d-non d-lg-block'></div>
</div>
         </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item className='item2 vh-100  w-100   ' >
        <Carousel.Caption className='h-100 d-flex
         justify-content-top flex-column  align-items-center'>
<div className="row h-100">
  <div className="cil-lg-6 d-flex flex-column justify-content-top flex-column  align-items-center ">
    <h1 className='text'>
      Findddsdfgsdgsdfgdfsgds
    </h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat accusamus voluptatum dolor aperiam similique quo.

    </p>
  </div>
  <div className='col-lg-6 d-non d-lg-block'></div>
</div>
         </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item className='item3 vh-100  w-100   ' >
        <Carousel.Caption className='h-100 d-flex
         justify-content-top flex-column  align-items-center'>
<div className="row h-100">
  <div className="cil-lg-6 d-flex flex-column justify-content-top flex-column  align-items-center ">
    <h1 className='text'>
      Findddsdfgsdgsdfgdfsgds
    </h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat accusamus voluptatum dolor aperiam similique quo.

    </p>
  </div>
  <div className='col-lg-6 d-non d-lg-block'></div>
</div>
         </Carousel.Caption>

      </Carousel.Item>
    </Carousel>
   </div> */

export default Herosection;

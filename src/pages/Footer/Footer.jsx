import React from "react";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-primary text-center text-md-left mt-5">  
      <div className="card text-center bg-dark text-light">
        <div className="card-header">Top Chefs</div>
        <Row>
          <Col>
            <div>
              <h5 className="card-title">About</h5>
              <p className="card-text">
                We provide Top Chefs and best recipes. You can find here your
                choices.
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <h5 className="card-title">Our best Chefs</h5>
              <p>Anne-Sophie</p>
              <p>Mario Batali</p>
              <p>Aliya LeeKong</p>
              <p>Eric Ripert</p>
              <p>William Bradley</p>
              <p>Thomas Keller</p>
            </div>
          </Col>
          <Col>
            <div>
              <h5 className="card-title">Contact</h5>
              <p>787 Mark View Street, New Town, California</p>
              <p>topchefs@thatix.com</p>
              <p>666 888 0000</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;

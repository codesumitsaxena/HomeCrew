import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import HeroImage from '../assets/HeroSection.jpg';
import FilterServiceAgent from './FilterServiceAgent'

function HeroSection() {
 
  return (
    <div className="bg-[#fdf9f5] py-5">
      <Container className="pt-2">
        <Row className="align-items-center">
          <Col lg={6}>
            <h1 className="display-6 fw-bold text-dark">
              Reliable Home Services,<br />Delivered to Your <br/>Doorstep.
            </h1>
            <p className="text-muted mt-3" style={{ fontSize: '1.1rem' }}>
              From beauty and wellness to repairs and deep cleaning, book trusted professionals in just a few clicks.
            </p>
          </Col>
          <Col lg={6} className="text-center">
            <img
              src={HeroImage}
              alt="Home Service Professional"
              className="img-fluid rounded-4 shadow"
              style={{ maxHeight: '420px', objectFit: 'cover' }}
            />
          </Col>
        </Row>
      </Container>

      <Container className="mt-4 position-relative d-none d-md-block">
        <FilterServiceAgent/>
      </Container>
    </div>
  );
}

export default HeroSection;

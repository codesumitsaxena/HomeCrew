import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaApplePay,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="bg-light text-dark pt-5 pb-4"
      style={{ fontSize: "15px" }}
    >
      <Container>
        <Row className="mb-5">
          <Col xs={12} md={3} className="mb-4">
            <h5 className="fw-bold mb-3">Home Crew</h5>
            <p className="small">
              Home Crew is your trusted partner for all household needs — from
              electrical repairs to salon at home. Book reliable services
              instantly with peace of mind.
            </p>
            <div className="d-flex gap-3 fs-5 mt-3 flex-wrap">
              <FaInstagram />
              <FaFacebookF />
              <FaPinterestP />
              <FaLinkedinIn />
              <FaYoutube />
              <FaTwitter />
            </div>
          </Col>

          <Col xs={6} md={2} className="mb-4">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled small">
              <li><a href="/" className="text-dark text-decoration-none">About Us</a></li>
              <li><a href="/" className="text-dark text-decoration-none">Careers</a></li>
              <li><a href="/" className="text-dark text-decoration-none">Our Team</a></li>
              <li><a href="/" className="text-dark text-decoration-none">Blog</a></li>
              <li><a href="/" className="text-dark text-decoration-none">Press</a></li>
            </ul>
          </Col>

          <Col xs={6} md={2} className="mb-4">
            <h6 className="fw-bold mb-3">Services</h6>
            <ul className="list-unstyled small">
              <li>AC Repair</li>
              <li>Salon at Home</li>
              <li>Cleaning Services</li>
              <li>Electrician</li>
              <li>Pest Control</li>
              <li>Carpenter</li>
            </ul>
          </Col>

          <Col xs={6} md={2} className="mb-4">
            <h6 className="fw-bold mb-3">Support</h6>
            <ul className="list-unstyled small">
              <li><a href="/" className="text-dark text-decoration-none">Help Center</a></li>
              <li><a href="/" className="text-dark text-decoration-none">FAQs</a></li>
              <li><a href="/" className="text-dark text-decoration-none">Contact Us</a></li>
              <li><a href="/" className="text-dark text-decoration-none">Cancellation Policy</a></li>
              <li><a href="/" className="text-dark text-decoration-none">Feedback</a></li>
            </ul>
          </Col>

          <Col xs={6} md={3} className="mb-4">
            <h6 className="fw-bold mb-3">Trust & Safety</h6>
            <ul className="list-unstyled small">
              <li>Background Verified Experts</li>
              <li>Insurance Coverage</li>
              <li>Covid Safety Guidelines</li>
              <li>Non-Toxic Materials</li>
              <li>Child & Pet Safe Products</li>
            </ul>
            <div className="d-none d-sm-block">
  <h6 className="fw-bold mt-4 mb-2">We Accept</h6>
  <div className="d-flex gap-2 fs-3 flex-wrap">
    <FaCcVisa />
    <FaCcMastercard />
    <FaApplePay />
    <FaCcPaypal />
  </div>
</div>
          </Col>
        </Row>

        <hr />

        <Row className="text-center text-md-start align-items-center">
          <Col xs={12} md={6} className="mb-2">
            <small className="text-muted">
              &copy; 2025 Home Crew Services Pvt. Ltd. All Rights Reserved.
            </small>
          </Col>
          <Col xs={12} md={6} className="text-md-end">
            <a href="/" className="text-muted text-decoration-none me-3 small">
              Privacy Policy
            </a>
            <a href="/" className="text-muted text-decoration-none me-3 small">
              Terms & Conditions
            </a>
            <a href="/" className="text-muted text-decoration-none small">
              Sitemap
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

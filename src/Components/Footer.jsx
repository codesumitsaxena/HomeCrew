import React from "react";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
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
    <footer className="bg-[#] text-dark pt-5 pb-4" style={{ fontSize: "16px" }}>
      <Container>
        <Row className="mb-5">
          <Col md={3}>
            <h5 className="fw-bold mb-3">Home Crew</h5>
            <p style={{ fontSize: "15px" }}>
              Home Crew is your trusted partner for all household needs — from electrical repairs to salon at home. Book reliable services instantly with peace of mind.
            </p>
            <div className="d-flex gap-3 fs-5 mt-3">
              <FaInstagram />
              <FaFacebookF />
              <FaPinterestP />
              <FaLinkedinIn />
              <FaYoutube />
              <FaTwitter />
            </div>
          </Col>

          <Col md={2}>
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-dark text-decoration-none">About Us</a></li>
              <li><a href="/" className="text-dark text-decoration-none">Careers</a></li>
              <li><a href="/" className="text-dark text-decoration-none">Our Team</a></li>
              <li><a href="/" className="text-dark text-decoration-none">Blog</a></li>
              <li><a href="/" className="text-dark text-decoration-none">Press</a></li>
            </ul>
          </Col>

          <Col md={2}>
            <h6 className="fw-bold mb-3">Services</h6>
            <ul className="list-unstyled">
              <li>AC Repair</li>
              <li>Salon at Home</li>
              <li>Cleaning Services</li>
              <li>Electrician</li>
              <li>Pest Control</li>
              <li>Carpenter</li>
            </ul>
          </Col>

          <Col md={2}>
            <h6 className="fw-bold mb-3">Support</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-dark text-decoration-none">Help Center</a></li>
              <li><a href="/" className="text-dark text-decoration-none">FAQs</a></li>
              <li><a href="/" className="text-dark text-decoration-none">Contact Us</a></li>
              <li><a href="/" className="text-dark text-decoration-none">Cancellation Policy</a></li>
              <li><a href="/" className="text-dark text-decoration-none">Feedback</a></li>
            </ul>
          </Col>

          <Col md={3}>
            <h6 className="fw-bold mb-3">Trust & Safety</h6>
            <ul className="list-unstyled">
              <li>Background Verified Experts</li>
              <li>Insurance Coverage</li>
              <li>Covid Safety Guidelines</li>
              <li>Non-Toxic Materials</li>
              <li>Child & Pet Safe Products</li>
            </ul>
            <h6 className="fw-bold mt-4 mb-2">We Accept</h6>
            <div className="d-flex gap-2 fs-3">
              <FaCcVisa />
              <FaCcMastercard />
              <FaApplePay />
              <FaCcPaypal />
            </div>
          </Col>
        </Row>

        <hr />

        <Row className="text-center text-md-start">
          <Col md={6} className="mb-2">
            <small className="text-muted">
              &copy; 2025 Home Crew Services Pvt. Ltd. All Rights Reserved.
            </small>
          </Col>
          <Col md={6} className="text-md-end">
            <a href="/" className="text-muted text-decoration-none me-3 small">Privacy Policy</a>
            <a href="/" className="text-muted text-decoration-none me-3 small">Terms & Conditions</a>
            <a href="/" className="text-muted text-decoration-none small">Sitemap</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

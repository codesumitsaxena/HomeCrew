import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav, Form, Button } from "react-bootstrap";
import HeroImg from '../assets/ServiceImg.jpg'; // use any image or illustration

function Login() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <Container fluid className="login-container">
      <Row className="vh-100">
        <Col lg={6} className="login-image d-none d-lg-flex align-items-center justify-content-center">
          <img src={HeroImg} alt="Home Services" className="img-fluid p-4" />
        </Col>

        {/* Right side form */}
        <Col lg={6} className="form-col d-flex align-items-center justify-content-center">
          <div className="form-wrapper p-4 w-100" style={{ maxWidth: '400px' }}>
            <h3 className="text-center mb-3">Welcome to HomeCrew</h3>
            <p className="text-muted text-center">Get your chores done easily</p>

            <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
              <Nav variant="tabs" className="mb-3 justify-content-center">
                <Nav.Item>
                  <Nav.Link eventKey="login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="signup">Signup</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                {/* Login Form */}
                <Tab.Pane eventKey="login">
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <div className="text-end mb-3">
                      <a href="#" className="small text-muted">Forgot Password?</a>
                    </div>

                    <Button variant="primary" className="w-100 custom-btn">Login</Button>
                  </Form>
                </Tab.Pane>

                {/* Signup Form */}
                <Tab.Pane eventKey="signup">
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Create password" />
                    </Form.Group>

                    <Button variant="primary" className="w-100 custom-btn">Sign Up</Button>
                  </Form>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

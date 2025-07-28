import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginFormImg from "../assets/LoginFormImg.jpg";

function Login() {
  return (
    <Container fluid>
      <Row className="loginFormHeader">
        {/* Left Image */}
        <Col lg={6} className="d-none d-lg-flex align-items-center justify-content-center">
          <img src={LoginFormImg} alt="Home Services" className="img-fluid shadow ms-5  LoginFormImg rounded" />
        </Col>

        {/* Right Form */}
        <Col lg={6} className="d-flex align-items-center justify-content-center">
          <div style={{ maxWidth: "400px" }} className="p-4 w-100">
            <h2 className="fw-bold mb-2">Welcome back</h2>
            <p className="text-muted mb-4">Please enter your details</p>

            {/* Google Sign-in */}
            <Button
              variant="light"
              className="border w-100 mb-3 d-flex align-items-center justify-content-center"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                style={{ width: 20, marginRight: 8 }}
              />
              Sign in with Google
            </Button>

            <div className="d-flex align-items-center my-3">
              <hr className="flex-grow-1" />
              <span className="px-2 text-muted">or</span>
              <hr className="flex-grow-1" />
            </div>

            <Form>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <Form.Check type="checkbox" label="Remember for 30 days" />
                <a href="#" className="small text-muted">
                  Forgot password
                </a>
              </div>

              <Button variant="dark" type="submit" className="w-100">
                Sign in
              </Button>
            </Form>

            <p className="text-center mt-3">
              Don’t have an account?{" "}
              <Link to="/signup" className="fw-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

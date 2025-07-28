import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginFormImg from "../assets/LoginFormImg.jpg";

function Signup() {
  return (
    <Container fluid>
      <Row className="loginFormHeader bg-light">
        <Col
          lg={6}
          className="d-none d-lg-flex align-items-center justify-content-center"
        >
          <img
            src={LoginFormImg}
            alt="Home Services"
            className="img-fluid shadow ms-5 rounded"
          />
        </Col>

        {/* Right Form */}
        <Col lg={6} className="d-flex align-items-center justify-content-center">
          <div style={{ maxWidth: "400px" }} className="p-4 w-100">
            <h2 className="fw-bold mb-2">Create an account</h2>
            <p className="text-muted mb-4">Fill in the details to sign up</p>

            {/* SAME GOOGLE BUTTON AS LOGIN */}
            <Button
              variant="light"
              className="border w-100 mb-3 d-flex align-items-center justify-content-center"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                style={{ width: 20, marginRight: 8 }}
              />
              Continue with Google
            </Button>

            <div className="d-flex align-items-center my-3">
              <hr className="flex-grow-1" />
              <span className="px-2 text-muted">or</span>
              <hr className="flex-grow-1" />
            </div>

            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="dark" type="submit" className="w-100">
                Sign up
              </Button>
            </Form>

            <p className="text-center mt-3">
              Already have an account?{" "}
              <Link to="/login" className="fw-semibold">
                Sign in
              </Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;

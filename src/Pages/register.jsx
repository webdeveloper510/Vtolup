import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../Assets/css/login.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from '../components/header';
import Footer from '../components/footer';

const Register = () => {
  return (
    <main>
      <Header />
      <section className="Hero logInPage position-relative">
        {/* Optional background image */}
        {/* <div className="BG position-absolute w-100 h-100">
          <img src="/images/BG-innerPage.jpg" alt="Background" className="w-100 h-100 object-fit-cover" />
        </div> */}

        <Container>
          <div className="teXt text-center mb-4">
            <h2>Register</h2>
          </div>

          <div className="borderBox">
            <div className="formBox login_formBox">
              <Form>
                <Row>
                  <Col lg={6}>
                    <Form.Group className="form-group">
                      <div className="inputBox position-relative">
                        <Form.Control type="text" placeholder="First Name" />
                        <i className="bi bi-person iCon position-absolute input-icon"></i>
                        <i className="bi bi-asterisk text-danger reQuired position-absolute" style={{ right: '10px', top: '50%', transform: 'translateY(-50%)' }}></i>
                      </div>
                    </Form.Group>
                  </Col>

                  <Col lg={6}>
                    <Form.Group className="form-group">
                      <div className="inputBox position-relative">
                        <Form.Control type="text" placeholder="Last Name" />
                        <i className="bi bi-person iCon position-absolute input-icon"></i>
                      </div>
                    </Form.Group>
                  </Col>

                  <Col lg={6}>
                    <Form.Group className="form-group">
                      <div className="inputBox position-relative">
                        <Form.Control type="tel" placeholder="+1 Phone" />
                        <i className="bi bi-telephone iCon position-absolute input-icon"></i>
                        <i className="bi bi-asterisk text-danger reQuired position-absolute" style={{ right: '10px', top: '50%', transform: 'translateY(-50%)' }}></i>
                      </div>
                    </Form.Group>
                  </Col>

                  <Col lg={6}>
                    <Form.Group className="form-group">
                      <div className="inputBox position-relative">
                        <Form.Control type="email" placeholder="Email" />
                        <i className="bi bi-envelope iCon position-absolute input-icon"></i>
                      </div>
                    </Form.Group>
                  </Col>

                  <Col lg={6}>
                    <Form.Group className="form-group">
                      <div className="inputBox position-relative">
                        <Form.Control type="password" placeholder="Password" />
                        <i className="bi bi-lock-fill iCon position-absolute input-icon"></i>
                        <i className="bi bi-eye-fill position-absolute end-0 me-3 top-50 translate-middle-y" style={{ right: '30px', cursor: 'pointer' }}></i>
                        <i className="bi bi-asterisk text-danger reQuired position-absolute" style={{ right: '10px', top: '50%', transform: 'translateY(-50%)' }}></i>
                      </div>
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <div className="d-flex justify-content-center mt-3">
                      <Button variant="primary" className="login-btn">
                        <span>Register</span>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>

              <div className="RegisterForgetPassword mt-5 register-links">
                <Row>
                  <Col lg={6} className="text-center">
                    <p>
                      If you have an account,<br />
                      please <a href="/login">Login</a>
                    </p>
                  </Col>
                  <Col lg={6} className="text-center">
                    <p><a href="/forgot-password">Forgot Password</a></p>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
};

export default Register;

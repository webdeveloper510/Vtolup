import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../Assets/css/login.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from '../components/header';
import Footer from '../components/footer';

const ForgotPassword = () => {
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
            <h2>Forgot Password</h2>
          </div>

          <div className="borderBox">
            <div className="formBox login_formBox">
              <Form>
                <Row className="justify-content-center">
                  <Col xs={12} md={8}>
                    <Form.Group className="form-group">
                      <div className="inputBox position-relative">
                        <Form.Control type="tel" placeholder="+1 Phone" />
                        <i className="bi bi-telephone iCon position-absolute input-icon"></i>
                      </div>
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <div className="d-flex justify-content-center mt-3">
                      <Button variant="primary" className="login-btn">
                        <span>Send Code</span>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>

              <div className="RegisterForgetPassword mt-5 register-links">
                <Row>
                  <Col lg={6} className="text-center">
                    <p>
                      If you don't have an account,<br />
                      please <a href="/register">Register</a>
                    </p>
                  </Col>
                  <Col lg={6} className="text-center">
                    <p><a href="/login">Back to Login</a></p>
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

export default ForgotPassword;
